const dataRouter = {
    route: null,
    name: 'DataFolder',
    title: 'Data',
    type: 'folder',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/data-ui/',
    order: null,
    inNav: true,
    permission: [],
    children: [
        {
            name: 'avatar-ui',
            route: '/data-ui/avatar-ui',
            title: 'AvatarUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/avatar-ui.vue',
            inNav: true,
        },
        {
            name: 'card-ui',
            route: '/data-ui/card-ui',
            title: 'CardUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/card-ui.vue',
            inNav: true,
        },
        {
            name: 'carousel-ui',
            route: '/data-ui/carousel-ui',
            title: 'CarouselUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/carousel-ui.vue',
            inNav: true,
        },
        {
            name: 'collapse-ui',
            route: '/data-ui/collapse-ui',
            title: 'CollapseUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/collapse-ui.vue',
            inNav: true,
        },
        {
            name: 'descriptions-ui',
            route: '/data-ui/descriptions-ui',
            title: 'DescriptionsUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/descriptions-ui.vue',
            inNav: true,
        },
        {
            name: 'image-ui',
            route: '/data-ui/image-ui',
            title: 'ImageUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/image-ui.vue',
            inNav: true,
        },
        {
            name: 'table-ui',
            route: '/data-ui/table-ui',
            title: 'TableUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/table-ui.vue',
            inNav: true,
        },
        {
            name: 'time-line-ui',
            route: '/data-ui/time-line-ui',
            title: 'TimeLineUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/time-line-ui.vue',
            inNav: true,
        },
        {
            name: 'tree-ui',
            route: '/data-ui/tree-ui',
            title: 'TreeUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/data-ui/tree-ui.vue',
            inNav: true,
        },
    ]
}

export default dataRouter