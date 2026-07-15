import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
  { path: '/solutions', name: 'solutions', component: () => import('../views/Solutions.vue') },
  { path: '/msp', name: 'msp', component: () => import('../views/Msp.vue') },
  { path: '/cases', name: 'cases', component: () => import('../views/Cases.vue') },
  { path: '/platform', name: 'platform', component: () => import('../views/Platform.vue') },
  { path: '/platform/sso', name: 'platform-sso', component: () => import('../views/platform/Sso.vue') },
  { path: '/platform/pam', name: 'platform-pam', component: () => import('../views/platform/Pam.vue') },
  { path: '/platform/zta', name: 'platform-zta', component: () => import('../views/platform/Zta.vue') },
  { path: '/platform/dlp', name: 'platform-dlp', component: () => import('../views/platform/Dlp.vue') },
  { path: '/platform/iae', name: 'platform-iae', component: () => import('../views/platform/Iae.vue') },
  { path: '/platform/hsm', name: 'platform-hsm', component: () => import('../views/platform/Hsm.vue') },
  { path: '/platform/compliance', name: 'platform-compliance', component: () => import('../views/platform/Compliance.vue') },
  { path: '/platform/reports', name: 'platform-reports', component: () => import('../views/platform/Reports.vue') },
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
