const formRouter = {
    route: null,
    name: 'FormFolder',
    title: 'Form',
    type: 'folder',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/form-ui/',
    order: null,
    inNav: true,
    permission: [],
    children: [
        {
            name: 'checkbox-ui',
            route: '/form-ui/checkbox-ui',
            title: 'CheckboxUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/checkbox-ui.vue',
            inNav: true,
        },
        {
            name: 'radio-ui',
            route: '/form-ui/radio-ui',
            title: 'RadioUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/radio-ui.vue',
            inNav: true,
        },
        {
            name: 'date-picker-ui',
            route: '/form-ui/date-picker-ui',
            title: 'DatePickerUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/date-picker-ui.vue',
            inNav: true,
        },
        {
            name: 'form-ui',
            route: '/form-ui/form-ui',
            title: 'FormUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/form-ui.vue',
            inNav: true,
        },
        {
            name: 'input-number-ui',
            route: '/form-ui/input-number-ui',
            title: 'InputNumberUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/input-number-ui.vue',
            inNav: true,
        },
        {
            name: 'input-ui',
            route: '/form-ui/input-ui',
            title: 'InputUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/input-ui.vue',
            inNav: true,
        },

        {
            name: 'select-ui',
            route: '/form-ui/select-ui',
            title: 'SelectUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/select-ui.vue',
            inNav: true,
        },
        {
            name: 'slider-ui',
            route: '/form-ui/slider-ui',
            title: 'SliderUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/slider-ui.vue',
            inNav: true,
        },
        {
            name: 'switch-ui',
            route: '/form-ui/switch-ui',
            title: 'SwitchUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/switch-ui.vue',
            inNav: true,
        },
        {
            name: 'upload-ui',
            route: '/form-ui/upload-ui',
            title: 'UploadUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/form-ui/upload-ui.vue',
            inNav: true,
        },
    ]
}

export default formRouter