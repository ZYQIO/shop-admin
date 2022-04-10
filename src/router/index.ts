import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
// import Home from '../views/home/index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/views/home/index.vue') },
  { path: '/about', component: () => import('@/views/login/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

export default router
