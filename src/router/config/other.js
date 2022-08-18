const otherRouter = {
    route: null,
    name: 'OtherFolder',
    title: 'Other',
    type: 'folder',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/other-ui/',
    order: null,
    inNav: true,
    permission: [],
    children: [
        {
            name: 'color-picker-ui',
            route: '/color-picker-ui',
            title: 'ColorPickerUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/other-ui/color-picker-ui.vue',
            inNav: true,
        },
    ]
}

export default otherRouter