import _ from "lodash"
const DATA_KEYS = [
    'class', 'staticClass', 'style', 'staticStyle',
    'attrs', 'props', 'domProps',
    'on', 'nativeOn',
    'directives', 'scopedSlots',
    'slot', 'ref', 'key', 'refInFor'
]

function extractData(vnode, isComp) {
    const data = _.pick(vnode.data, DATA_KEYS)
    if (isComp) {
        const cOpts = vnode.componentOptions
        _.assign(data, {
            props: cOpts.propsData,
            on: cOpts.listeners
        })
    }
    return data
}

export default function cloneVNode(vnode, options = {}, child) {
    if (!vnode) return vnode
    // 使用创建原始vnode的上下文。
    const h = vnode.context && vnode.context.$createElement
    const isComp = !!vnode.componentOptions
    const isText = !vnode.tag // 这也将匹配注释，但基本上会删除这些注释
    let children = isComp
        ? vnode.componentOptions.children
        : vnode.children
    if (child) {
        children = (children || []).concat(child)
    }
    if (isText) return vnode.text

    let data = extractData(vnode, isComp)
    // 
    let ops1 = { ...options }
    let ops2 = { ...data }

    for (let key in ops1) {
        key != 'on' && (data[key] = { ...ops2[key], ...options[key] })
    }

    let nEven = { ...options.on };
    let oEven = { ...data.on }

    for (let eKey in nEven) {
        nEven[eKey] = (e) => {
            options.on[eKey](e)
            oEven[eKey] && oEven[eKey](e)
        }
    }
    data.on = { ...oEven, ...nEven }
    // 
    const tag = isComp
        ? vnode.componentOptions.Ctor
        : vnode.tag
    // const childNodes = children ? children.map(c => cloneVNode(c)) : undefined
    return h(tag, data, children)
}