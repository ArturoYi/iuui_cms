// lodash是強大的工具函數庫，你可以看看，這裡不使用
// import _ from 'lodash'


/**
 * 返回 n 位的随机字符串
 * @param {Number} n
 */
export function getRandomStr(n = 6) {
  let str = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  for (let i = 0; i < n; i += 1) {
    str += chars.charAt(Math.floor(Math.random() * 62))
  }
  return str
}

/**
 * 排序
 * @param {Array} source
 */
export function sortByOrder(source = []) {
  if (!Array.isArray(source)) {
    alert('sortByOrder 传入参数不符合要求, 应为数组', source);
    return source
  }
  //临时数组
  const tmp = []
  let target = []
  for (let i in source) {
    if (typeof source[i].order !== "number") {
      continue
    }
    let { order } = source[i]
    // 支持设置倒数顺序
    if (order < 0) {
      order = source.length + order
      if (order < 0) {
        order = 0
      }
    }
    // 确保整数
    source[i].order = Math.floor(order)
    // 插入临时数组
    insertItem(source[i], tmp)
  }
  // 合并数组
  for (let i = 0, j = 0; i < source.length; i += 1) {
    if (typeof source[i].order === 'number') {
      continue
    }
    // 找位置
    while (tmp[j]) {
      j += 1
    }
    tmp[j] = source[i]
  }
  // 筛除空隙
  target = tmp.filter(item => !!item)
  return target
}

export const deepClone = (origin, hashMap = new WeakMap()) => {
  /**
  * null == undefined -> true
  * null === undefined -> false
  */
  if (origin == null || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  const hashKey = hashMap.get(origin);

  /** 如果已经拷贝过，直接返回 */
  if (hashKey) {
    return hashKey;
  }

  /** 通过构造器来生成新对象，就无需考虑是 [] 还是 {} */
  const target = new origin.constructor();

  /** 如果没有拷贝过，就记录下来 */
  hashMap.set(origin, target);

  for (let k in origin) {
    /** 区分原型属性和自有属性 */
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap);
    }
  }

  return target;
}

export const hasPermission = (permissions, route, user) => {
  // eslint-disable-line
  if (user && user.admin) {
    return true
  }
  if (route.permission) {
    return permissions.some(permission => route.permission.indexOf(permission) > -1)
  }
  return true
}

export const deepTravel = (obj, fuc) => {
  if (Array.isArray(obj)) {
    obj.forEach(item => {
      deepTravel(item, fuc)
    })
    return
  }
  if (obj && obj.children) {
    fuc(obj)
    deepTravel(obj.children, fuc)
    return
  }
  if (obj.name) {
    fuc(obj)
  }
}

//循環遍歷查找
export const recursion = (data, current) => {
  if (!data) {
    return null
  }
  let list = deepClone(data)
  for (const item of list) {
    if (item.children) {
      for (const two of item.children) {
        if (two.children && two.children.length) {
          return recursion(two, current)
        }
        if (two.path === current) {
          return item.name
        }
      }
    }
    if (!item.children && item.path === current) {
      return item.name
    }
  }
  return false
}

/**
 * @desc 函数防抖
 * @param fnName 函数
 * @param time 延迟执行毫秒数
 */
// 自定义防抖的函数
export const debounce = (fun, deely) => {
  let timer = '';
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.call(this, ...arguments)
    }, deely);
  };
};
