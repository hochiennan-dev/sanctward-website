<template>
  <IconDefs />
  <NetworkBg />
  <SiteNav />
  <router-view />
  <SiteFooter />
</template>

<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import router from './router'

import IconDefs from './components/IconDefs.vue'
import NetworkBg from './components/NetworkBg.vue'
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'

const { locale, t } = useI18n()
watch(locale, (l) => { document.documentElement.lang = l; document.title = t('metaTitle') }, { immediate: true })

function observeReveals() {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
}

onMounted(async () => {
  await router.isReady()
  await nextTick()
  observeReveals()
})

// 每次換頁後重新觀察新頁面的 .reveal
router.afterEach(() => { nextTick().then(observeReveals) })
</script>
