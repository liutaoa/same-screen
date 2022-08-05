import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公共路由
export const constantRoutes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/views/index'),
    name: 'Index',
    meta: { title: '首页' }
  },
  {
    path: '/websocket-demo',
    component: () => import('@/views/websocket-demo'),
    name: 'demo',
    meta: { title: 'websocket-demo' }
  },
  {
    path: '/ppt',
    component: () => import('@/views/ppt/index'),
    name: 'ppt',
    meta: { title: 'ppt' }
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  base: '/web',
  routes: constantRoutes
}) 
