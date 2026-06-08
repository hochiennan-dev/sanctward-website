import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
  { path: '/solutions', name: 'solutions', component: () => import('../views/Solutions.vue') },
  { path: '/cases', name: 'cases', component: () => import('../views/Cases.vue') },
  { path: '/platform', name: 'platform', component: () => import('../views/Platform.vue') },
  { path: '/privacy', name: 'privacy', component: () => import('../views/Privacy.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // 等待 lazy 載入的頁面與 reveal 區塊 render 完成再捲動到錨點
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, top: 80, behavior: 'smooth' }), 420)
      })
    }
    return { top: 0 }
  },
})
