//在组件中引入mapGetters就是将vuex中的数据映射到组件的计算属性当中
import { deepClone, hasPermission, getRandomStr, deepTravel } from '@/utils/tool'

let stageMap = {}

/**
 * 在侧边栏展示时，如果当前路由 children 属性为空，则删除该路由
 * @param {*} arr 路由配置项数据
 */
function IterationDelateMenuChildren(arr) {
    if (arr.length) {
        for (const i in arr) {
            if (arr[i].children && !arr[i].children.length) {

                delete arr[i]
            } else if (arr[i].children && arr[i].children.length) {
                IterationDelateMenuChildren(arr[i].children)
            }
        }
    }
    return arr
}

/**
 * Shaking 掉無權限路由——無限制路由
 * @param {array} stageConfig 路由配置项数据
 * @param {array} permissions 当前登录者所拥有的权限集合
 * @param {object} currentUser 当前登录信息
 */
function permissionsShaking(stageConfig, permissions, currentUser) {
    const shookConfig = stageConfig.filter(route => {
        if (hasPermission(permissions, route, currentUser)) {
            if (route.children && route.children.length) {
                route.children = permissionsShaking(route.children, permissions, currentUser)
            }
            return true
        }
        return false
    })
    //沒有children的父級菜單的路由不顯示，子項也不會顯示在頂層菜單
    return IterationDelateMenuChildren(shookConfig)
}

export const permissionStageConfig = state => {
    const { routerConfig, permissions, user } = state
    const tempStageConfig = deepClone(routerConfig)
    const shookConfig = permissionsShaking(tempStageConfig, permissions, user)
    //緩存路由結果
    const list = {}
    deepTravel(shookConfig, item => {
        list[item.name] = item
    })
    stageMap = list
    return shookConfig
}

//這個方法獲取側邊欄
export const sideBarList = (state, getter) => {
    const { sideBarLevel } = state;//舞台深度
    const { permissionStageConfig } = getter
    function deepGetSideBar(target, level = 3) {
        //集合節點處理
        if (Array.isArray(target)) {
            const acc = target.map(item => deepGetSideBar(item, level - 1))
            return acc.filter(item => item !== null)
        }


        // 检测是否需要在导航中显示
        if (!target.inNav) {
            return null
        }

        // 处理 folder 模式,也就是頂層展示的菜單
        if (target.type === 'folder' && level !== 0) {
            const sideConfig = {}
            sideConfig.name = target.name
            sideConfig.title = target.title
            sideConfig.icon = target.icon
            sideConfig.path = target.route || getRandomStr(6)
            sideConfig.children = target.children.map(item => deepGetSideBar(item, level - 1))
            sideConfig.children = sideConfig.children.filter(item => item !== null)
            // console.log(target.children.map(item => deepGetSideBar(item, level-1)))
            return sideConfig
        }

        // 处理一级就是 view 的情况,一級飛folder
        if (target.type === 'view') {
            const sideConfig = {}
            sideConfig.name = target.name
            sideConfig.title = target.title
            sideConfig.icon = target.icon
            sideConfig.path = target.route
            return sideConfig
        }

        // 处理 appTab 情况
        if (target.type === 'tab') {
            const sideConfig = {}
            sideConfig.name = target.name
            sideConfig.title = target.title
            sideConfig.icon = target.icon
            sideConfig.path = target.route
            // 如果 Tab 没有设置默认打开的路由, 则设置为第一个子节点路由
            if (!sideConfig.path) {
                if (target.children && target.children.length > 0 && target.children[0].route) {
                    sideConfig.path = target.children[0].route
                }
            }
            return sideConfig
        }

        // 最后一层, 都当做子节点处理
        if (level <= 0) {
            const sideConfig = {}
            sideConfig.name = target.name
            sideConfig.title = target.title
            sideConfig.icon = target.icon
            sideConfig.path = getRandomStr(6)
            if (target.children && target.children.length > 0 && target.children[0].route) {
                sideConfig.path = target.children[0].route
            }
            return sideConfig
        }
        return null
    }

    const sideBar = deepGetSideBar(permissionStageConfig, sideBarLevel)
    return sideBar
}


