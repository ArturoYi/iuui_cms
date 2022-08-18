const navigationRouter = {
    route: null,
    name: 'NavigationFolder',
    title: 'Navigation',
    type: 'folder',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/navigation-ui/',
    order: null,
    inNav: true,
    permission: [],
    children: [
        {
            name: 'affix-ui',
            route: '/affix-ui',
            title: 'AffixUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/navigation-ui/affix-ui.vue',
            inNav: true,
        },
        {
            name: 'breadcrumb-ui',
            route: '/breadcrumb-ui',
            title: 'BreadcrumbUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/navigation-ui/breadcrumb-ui.vue',
            inNav: true,
        },
        {
            name: 'dropdown-ui',
            route: '/dropdown-ui',
            title: 'DropdownUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/navigation-ui/dropdown-ui.vue',
            inNav: true,
        },
        {
            name: 'menu-ui',
            route: '/menu-ui',
            title: 'MenuUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/navigation-ui/menu-ui.vue',
            inNav: true,
        },
        {
            name: 'page-ui',
            route: '/page-ui',
            title: 'PageUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/navigation-ui/page-ui.vue',
            inNav: true,
        },
        {
            name: 'tabs-ui',
            route: '/tabs-ui',
            title: 'TabsUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/navigation-ui/tabs-ui.vue',
            inNav: true,
        },
    ]
}

export default navigationRouter