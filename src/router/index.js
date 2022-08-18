import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from "@/router/routers/home-router"

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/public-ui/public-index-ui',
    component: ()=>import('@/views/layout/layout'),
    children: [...homeRouter],
  },
  {
    redirect: '/404',
    path: '*',
  },
]

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
