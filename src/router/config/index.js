
import allRouter from "./all-router"
import {sortByOrder,getRandomStr} from "@/utils/tool"

let homeRouter = []

// 初步排序
homeRouter = sortByOrder(allRouter)

// 使用 Symbol 处理 name 字段, 保证唯一性
const deepReduceName = target => {
  //如果是数组就遍历处理子项的name
  if (Array.isArray(target)) {
    target.forEach((item) => {
      if (typeof item != 'object') {
        return
      }
      deepReduceName(item)
    })
    return
  }
  // 如果是对象说明其是路由信息，一定有name属性
  if (typeof target === 'object') {
    // 判断是否为symbol，不然转为symbol
    if (typeof target.name !== 'symbol') {
      target.name = target.name || getRandomStr(6)
    }

    // 对其children进行递归操作
    if (Array.isArray(target.children)) {
      //子项同上，一直递归到最深没有了才结束
      target.children.forEach((item) => {
        if (typeof item !== 'object') {
          return
        }
        deepReduceName(item)
      })
    }
  }
}

// 自调用函数
deepReduceName(homeRouter)

export default homeRouter