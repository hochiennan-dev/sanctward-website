<template>
  <IconDefs />
  <NetworkBg />
  <SiteNav />
  <router-view />
  <SiteFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import IconDefs from './components/IconDefs.vue'
import NetworkBg from './components/NetworkBg.vue'
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(() => {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
</script>
