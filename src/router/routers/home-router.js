
import stageConfig from '../config/index'
// 拼裝路由
// 深度遍歷；路有數，類似於樹形菜單，構造路由
function deepTravel(config, method) {
    // 數組說明其是父路由，遍歷其子路由
    if (Array.isArray(config)) {
        config.forEach(subConfig => {
            deepTravel(subConfig, method)
        })
    } else if (config.children && config.children.length) {
        config.children.forEach(subConfig => {
            deepTravel(subConfig, method)
        })
    } else {
        method(config)
    }
}

//定義總路由
const homeRouter = []

//開始生成路由
deepTravel(stageConfig, viewConfig => {
    //當前處理的路由
    const viewRouter = {}
    viewRouter.path = viewConfig.route
    viewRouter.name = viewConfig.name
    // @/views:切記要views，不然可能被scss-loder編譯導致重複引入scss而報錯
    viewRouter.component = () => import(`@/views${viewConfig.filePath}`)
    viewRouter.meta = {
        title: viewConfig.title,
        icon: viewConfig.icon,
        permission: viewConfig.permission,
        type: viewConfig.type,
    }
    homeRouter.push(viewRouter)
})

export default homeRouter