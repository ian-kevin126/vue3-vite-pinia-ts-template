//  src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld.vue')
const About = () => import('@/components/About.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'about'
    },
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
