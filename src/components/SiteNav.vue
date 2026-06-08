<template>
<header class="nav" id="nav">
  <div class="container nav-inner">
    <router-link class="brand" to="/"><Logo3D /><img src="/assets/wordmark-black.svg" alt="SANCTWARD"></router-link>
    <nav class="nav-links">
      <router-link to="/#platform">{{ $t('k0') }}</router-link><router-link to="/#solutions">{{ $t('k1') }}</router-link><router-link to="/#cases">{{ $t('k2') }}</router-link><a href="#">{{ $t('k3') }}</a><router-link to="/about">{{ $t('k4') }}</router-link>
    </nav>
    <div class="nav-right">
      <span class="lang"><button type="button" class="lang-btn" :class="{ on: locale === 'zh-Hant' }" @click="setLang('zh-Hant')">繁</button><span class="lang-sep">/</span><button type="button" class="lang-btn" :class="{ on: locale === 'en' }" @click="setLang('en')">EN</button></span>
      <router-link class="btn btn-primary" to="/contact">{{ $t('k6') }}</router-link>
      <button class="menu-toggle" id="menuBtn" aria-label="menu"><svg class="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <router-link to="/#platform">{{ $t('k0') }}</router-link><router-link to="/#solutions">{{ $t('k1') }}</router-link><router-link to="/#cases">{{ $t('k2') }}</router-link><a href="#">{{ $t('k3') }}</a><router-link to="/about">{{ $t('k4') }}</router-link>
  </div>
</header>
</template>

<script setup>
import Logo3D from './Logo3D.vue'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
function setLang(l){ locale.value = l; try { localStorage.setItem('lang', l) } catch(e){}; document.documentElement.lang = l }
onMounted(() => {
  const nav=document.getElementById('nav');
  const onScroll=()=>nav.classList.toggle('scrolled', scrollY>10);
  addEventListener('scroll', onScroll); onScroll();
  const mb=document.getElementById('menuBtn'), mm=document.getElementById('mobileMenu');
  mb.addEventListener('click', ()=>mm.classList.toggle('open'));
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mm.classList.remove('open')));
})
</script>
