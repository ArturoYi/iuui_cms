import locale from '@/lang/index'

// 這裡註冊插件
const pluing = {
    locale: locale.use,
    i18n: locale.i18n,
    lang: {}
}

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
}

pluing.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    pluing.install(window.Vue);
}

export default pluing