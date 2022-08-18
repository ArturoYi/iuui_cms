// 自动注册全局组件，每次新增组件必须重新编译
import Vue from 'vue'


//黑名單，component下不需要遍歷的文件夾或文件名,如果是文件則包括文件名後綴
const fileNameList = ['utils', 'base', 'utils.js'];

//判斷是否有黑名單
function arrayCompare(arr1, arr2) {
    let two = [];
    arr1.filter(item => {
        if (arr2.indexOf(item) > -1) {
            two.push(item);
        }
    })
    if (two.length > 0) {
        return true
    } else {
        return false
    }
}

/**
 * 分類註冊組件和插件，需要考慮多種註冊情況
 */
const requireJsx = require.context(
    '.', // 其组件目录的相对路径
    true, // 是否查询其子目录
    /\.jsx$/ // 匹配基础组件文件名的正则表达式
)

const requireJs = require.context(
    '.', // 其组件目录的相对路径
    true, // 是否查询其子目录
    /\.js$/ // 匹配基础组件文件名的正则表达式
)

const requireVue = require.context(
    '.', // 其组件目录的相对路径
    true, // 是否查询其子目录
    /\.vue$/ // 匹配基础组件文件名的正则表达式
)

requireJsx.keys().forEach(fileName => {
    //過濾黑名單
    if (arrayCompare(fileName.split('/'), fileNameList) === false) {
        const componentConfig = requireJsx(fileName); // 获取组件配置
        const comp = componentConfig.default || componentConfig;
        if (Object.keys(comp).length !== 0) {
            /**
         * 兼容 import export 和 require module.export 两种规范
         */
            /** 如果这个组件选项是通过 export default 导出的,就会优先使用 .default;
             * 必須配置name屬性才會註冊
            */
            if (Object.prototype.toString.call(comp) === '[object Object]' && componentConfig.default.name) {
                Vue.component(comp.name, comp) // 此处的name是组件属性定义的name
            }
            // 如果是以esModule模塊導出，需要遍歷註冊，這裡待優化
            if (Object.prototype.toString.call(comp) === '[object Module]') {
                for (let a = 0; a < Object.keys(comp).length; a++) {
                    Vue.component(Object.entries(comp)[a][1].name, Object.entries(comp)[a][1])
                }
            }
        }
    }

})

requireJs.keys().forEach(fileName => {
    if (arrayCompare(fileName.split('/'), fileNameList) === false) {
        const componentConfig = requireJs(fileName); // 获取组件配置
        const comp = componentConfig.default || componentConfig
        //排除空文件
        if (Object.keys(comp).length !== 0) {
            if (Object.prototype.toString.call(comp) === '[object Object]' && componentConfig.default.name) {
                Vue.component(comp.name, comp) // 此处的name是组件属性定义的name
                //配置to_prototype=true則掛載到原型上，函數組件
                if (comp.to_prototype) {
                    if (comp.name === 'Message') {
                        Vue.prototype.$Message = comp;
                    }
                    if (comp.name === 'Notice') {
                        Vue.prototype.$Notice = comp;
                    }
                    if (comp.name === 'Modal') {
                        Vue.prototype.$Modal = comp;
                    }
                    if (comp.name === 'Loading') {
                        Vue.prototype.$Loading = comp;
                    }
                    if (comp.name === 'Image') {
                        Vue.prototype.$Image = comp;
                    }
                }
            }
            // 如果是以esModule模塊導出，需要遍歷註冊，這裡待優化
            if (Object.prototype.toString.call(comp) === '[object Module]') {
                for (let a = 0; a < Object.keys(comp).length; a++) {
                    Vue.component(Object.entries(comp)[a][1].name, Object.entries(comp)[a][1])
                }
            }
        }
        // 
    }
})

requireVue.keys().forEach(fileName => {
    console.log(fileName)
})


