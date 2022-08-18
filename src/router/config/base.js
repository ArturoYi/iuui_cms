const baseRouter = {
    route: null,
    name: 'BaseFolder',
    title: 'Base',
    type: 'folder',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/base-ui/',
    order: null,
    inNav: true,
    permission: [],
    children: [
        {
            name: 'button-ui',
            route: '/base-ui/button-ui',
            title: 'ButtonUi',
            type: 'view', // 取 route 为默认加载页
            icon: 'iconfont icon-huiyuanguanli',
            filePath: '/base-ui/button-ui.vue',
            inNav: true,
        },
        {
          name: 'icon-ui',
          route: '/base-ui/icon-ui',
          title: 'IconUi',
          type: 'view', // 取 route 为默认加载页
          icon: 'iconfont icon-huiyuanguanli',
          filePath: '/base-ui/icon-ui.vue',
          inNav: true,
      },
    ]
}

export default baseRouter