<template>
<header class="nav" id="nav">
  <div class="container nav-inner">
    <router-link class="brand" to="/"><Logo3D /><img src="/assets/wordmark-black.svg" alt="SANCTWARD"></router-link>
    <nav class="nav-links">
      <router-link to="/#platform">平台</router-link><router-link to="/#solutions">解決方案</router-link><router-link to="/#cases">應用案例</router-link><a href="#">課程</a><router-link to="/about">關於我們</router-link>
    </nav>
    <div class="nav-right">
      <span class="lang"><b>繁</b> / EN</span>
      <router-link class="btn btn-primary" to="/contact">預約 Demo</router-link>
      <button class="menu-toggle" id="menuBtn" aria-label="menu"><svg class="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <router-link to="/#platform">平台</router-link><router-link to="/#solutions">解決方案</router-link><router-link to="/#cases">應用案例</router-link><a href="#">課程</a><router-link to="/about">關於我們</router-link>
  </div>
</header>
</template>

<script setup>
import Logo3D from './Logo3D.vue'
import { onMounted } from 'vue'
onMounted(() => {
  const nav=document.getElementById('nav');
  const onScroll=()=>nav.classList.toggle('scrolled', scrollY>10);
  addEventListener('scroll', onScroll); onScroll();
  const mb=document.getElementById('menuBtn'), mm=document.getElementById('mobileMenu');
  mb.addEventListener('click', ()=>mm.classList.toggle('open'));
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mm.classList.remove('open')));
})
</script>
