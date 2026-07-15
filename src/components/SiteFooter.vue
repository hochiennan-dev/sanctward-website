<template>
<footer>
  <div class="container">
    <div class="foot-grid">
      <div class="foot-brand">
        <div class="foot-lockup"><Logo3D /><img src="/assets/wordmark-black.svg" alt="SANCTWARD"></div>
        <p>{{ $t('k7') }}<br>{{ $t('k8') }}</p>
      </div>
      <div class="foot-col"><h4>{{ $t('k0') }}</h4><router-link to="/platform/sso">{{ $t('mm_sso_t') }}</router-link><router-link to="/platform/pam">{{ $t('mm_pam_t') }}</router-link><router-link to="/platform/zta">{{ $t('mm_zta_t') }}</router-link><router-link to="/platform/dlp">{{ $t('mm_dlp_t') }}</router-link><router-link to="/platform/iae">{{ $t('mm_iae_t') }}</router-link><router-link to="/platform/hsm">{{ $t('mm_hsm_t') }}</router-link><router-link to="/platform/compliance">{{ $t('mm_cmp_t') }}</router-link><router-link to="/platform/reports">{{ $t('mm_rpt_t') }}</router-link></div>
      <div class="foot-col"><h4>{{ $t('k13') }}</h4><router-link to="/solutions">{{ $t('k1') }}</router-link><router-link to="/msp">{{ $t('msp_nav') }}</router-link><router-link to="/cases">{{ $t('k2') }}</router-link></div>
      <div class="foot-col"><h4>{{ $t('k17') }}</h4><router-link to="/about">{{ $t('k4') }}</router-link><router-link to="/contact">{{ $t('k6') }}</router-link><router-link to="/contact">{{ $t('k18') }}</router-link><router-link to="/privacy">{{ $t('k19') }}</router-link></div>
    </div>
    <div class="foot-bottom"><span>{{ $t('k20') }}</span><span>{{ $t('k21') }}</span></div>
  </div>
</footer>
</template>

<script setup>
import Logo3D from './Logo3D.vue'
</script>
