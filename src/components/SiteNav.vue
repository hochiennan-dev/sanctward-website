<template>
<header class="nav" id="nav">
  <div class="container nav-inner">
    <router-link class="brand" to="/"><Logo3D /><img src="/assets/wordmark-black.svg" alt="SANCTWARD"></router-link>
    <nav class="nav-links">
      <div class="nav-drop">
        <router-link to="/platform">{{ $t('k0') }}</router-link>
        <div class="mega">
          <span class="mega-head">{{ $t('mm_head') }}</span>
          <router-link class="mega-item" to="/platform/sso"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></span><span><span class="mi-t">{{ $t('mm_sso_t') }}</span><span class="mi-d">{{ $t('mm_sso_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/pam"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg></span><span><span class="mi-t">{{ $t('mm_pam_t') }}</span><span class="mi-d">{{ $t('mm_pam_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/zta"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></span><span><span class="mi-t">{{ $t('mm_zta_t') }}</span><span class="mi-d">{{ $t('mm_zta_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/dlp"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clip"/></svg></span><span><span class="mi-t">{{ $t('mm_dlp_t') }}</span><span class="mi-d">{{ $t('mm_dlp_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/iae"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg></span><span><span class="mi-t">{{ $t('mm_iae_t') }}</span><span class="mi-d">{{ $t('mm_iae_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/hsm"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></span><span><span class="mi-t">{{ $t('mm_hsm_t') }}</span><span class="mi-d">{{ $t('mm_hsm_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/compliance"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></span><span><span class="mi-t">{{ $t('mm_cmp_t') }}</span><span class="mi-d">{{ $t('mm_cmp_d') }}</span></span></router-link>
          <router-link class="mega-item" to="/platform/reports"><span class="mi-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg></span><span><span class="mi-t">{{ $t('mm_rpt_t') }}</span><span class="mi-d">{{ $t('mm_rpt_d') }}</span></span></router-link>
        </div>
      </div>
      <router-link to="/solutions">{{ $t('k1') }}</router-link><router-link to="/msp">{{ $t('msp_nav') }}</router-link><router-link to="/cases">{{ $t('k2') }}</router-link><router-link to="/about">{{ $t('k4') }}</router-link>
    </nav>
    <div class="nav-right">
      <span class="lang"><button type="button" class="lang-btn" :class="{ on: locale === 'zh-Hant' }" @click="setLang('zh-Hant')">繁</button><span class="lang-sep">/</span><button type="button" class="lang-btn" :class="{ on: locale === 'en' }" @click="setLang('en')">EN</button></span>
      <router-link class="btn btn-primary" to="/contact">{{ $t('k6') }}</router-link>
      <button class="menu-toggle" id="menuBtn" aria-label="menu"><svg class="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <router-link to="/platform">{{ $t('k0') }}</router-link>
    <router-link class="mm-sub" to="/platform/sso">{{ $t('mm_sso_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/pam">{{ $t('mm_pam_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/zta">{{ $t('mm_zta_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/dlp">{{ $t('mm_dlp_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/iae">{{ $t('mm_iae_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/hsm">{{ $t('mm_hsm_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/compliance">{{ $t('mm_cmp_t') }}</router-link>
    <router-link class="mm-sub" to="/platform/reports">{{ $t('mm_rpt_t') }}</router-link>
    <router-link to="/solutions">{{ $t('k1') }}</router-link><router-link to="/msp">{{ $t('msp_nav') }}</router-link><router-link to="/cases">{{ $t('k2') }}</router-link><router-link to="/about">{{ $t('k4') }}</router-link>
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
