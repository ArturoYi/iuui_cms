const publicRouter = [{
    route: '/public-ui/public-index-ui',
    name: 'Index',
    title: 'Index',
    type: 'view',
    icon: 'iconfont icon-quanxianguanli',
    filePath: '/public-ui/public-index-ui.vue',
    order: null,
    inNav: true,
    permission: [],
},
{
    title: '404',
    type: 'view',
    name: '404',
    route: '/404',
    filePath: '/error-ui/404.vue',
    inNav: false,
    icon: 'iconfont icon-rizhiguanli',
},]

export default publicRouter