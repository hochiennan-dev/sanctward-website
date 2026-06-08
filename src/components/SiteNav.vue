<template>
<header class="nav" id="nav">
  <div class="container nav-inner">
    <a class="brand" href="#top"><Logo3D /><img src="/assets/wordmark-black.svg" alt="SANCTWARD"></a>
    <nav class="nav-links">
      <a href="#platform">平台</a><a href="#solutions">解決方案</a><a href="#cases">應用案例</a><a href="#">課程</a><a href="#">關於我們</a>
    </nav>
    <div class="nav-right">
      <span class="lang"><b>繁</b> / EN</span>
      <a class="btn btn-primary" href="#contact">預約 Demo</a>
      <button class="menu-toggle" id="menuBtn" aria-label="menu"><svg class="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="#platform">平台</a><a href="#solutions">解決方案</a><a href="#cases">應用案例</a><a href="#">課程</a><a href="#">關於我們</a>
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
