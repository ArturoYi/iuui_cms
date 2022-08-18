const layoutRouter = {
    route: null,
    name: 'LayoutFolder',
    title: 'Layout',
    type: 'folder',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/layout-ui/',
    order: null,
    inNav: true,
    permission: [],
    children: [
        {
            name: 'divider-ui',
            route: '/divider-ui',
            title: 'DividerUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/layout-ui/divider-ui.vue',
            inNav: true,
        },
        {
            name: 'flex-ui',
            route: '/flex-ui',
            title: 'FlexUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/layout-ui/flex-ui.vue',
            inNav: true,
        },
        {
            name: 'layout-ui',
            route: '/layout-ui',
            title: 'LayoutUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/layout-ui/layout-ui.vue',
            inNav: true,
        },
        {
            name: 'space-ui',
            route: '/space-ui',
            title: 'SpaceUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/layout-ui/space-ui.vue',
            inNav: true,
        },
    ]
}

export default layoutRouter