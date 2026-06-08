<template>
<footer>
  <div class="container">
    <div class="foot-grid">
      <div class="foot-brand">
        <div class="foot-lockup"><Logo3D /><img src="/assets/wordmark-black.svg" alt="SANCTWARD"></div>
        <p>{{ $t('k7') }}<br>{{ $t('k8') }}</p>
      </div>
      <div class="foot-col"><h4>{{ $t('k0') }}</h4><router-link to="/platform#cap-iam">IAM / SSO</router-link><router-link to="/platform#cap-pam">{{ $t('k9') }}</router-link><router-link to="/platform#cap-zta">{{ $t('k10') }}</router-link><router-link to="/platform#cap-endpoint">{{ $t('k11') }}</router-link><router-link to="/platform#cap-compliance">{{ $t('k12') }}</router-link></div>
      <div class="foot-col"><h4>{{ $t('k13') }}</h4><router-link to="/solutions">{{ $t('k1') }}</router-link><router-link to="/cases">{{ $t('k2') }}</router-link></div>
      <div class="foot-col"><h4>{{ $t('k17') }}</h4><router-link to="/about">{{ $t('k4') }}</router-link><router-link to="/contact">{{ $t('k6') }}</router-link><router-link to="/contact">{{ $t('k18') }}</router-link><router-link to="/privacy">{{ $t('k19') }}</router-link></div>
    </div>
    <div class="foot-bottom"><span>{{ $t('k20') }}</span><span>{{ $t('k21') }}</span></div>
  </div>
</footer>
</template>

<script setup>
import Logo3D from './Logo3D.vue'
</script>
