<template>
  <section class="page-banner">
    <div class="page-banner-inner reveal">
      <span class="pb-eye">{{ $t('hsm_eyebrow') }}</span>
      <h1>{{ $t('hsm_h1') }}</h1>
      <p>{{ $t('hsm_intro') }}</p>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_edu_eye') }}</span><h2>{{ $t('hsm_edu_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('hsm_e1_t') }}</h3><p>{{ $t('hsm_e1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('hsm_e2_t') }}</h3><p>{{ $t('hsm_e2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('hsm_e3_t') }}</h3><p>{{ $t('hsm_e3_d') }}</p></div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_tier_eye') }}</span><h2>{{ $t('hsm_tier_h') }}</h2><p>{{ $t('hsm_tier_p') }}</p></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><span class="rk">1</span><h3>{{ $t('hsm_t1_t') }}</h3><p>{{ $t('hsm_t1_d') }}</p></div>
        <div class="sp-card"><span class="rk">2</span><h3>{{ $t('hsm_t2_t') }}</h3><p>{{ $t('hsm_t2_d') }}</p></div>
        <div class="sp-card"><span class="rk">3</span><h3>{{ $t('hsm_t3_t') }}</h3><p>{{ $t('hsm_t3_d') }}</p></div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_dg_eye') }}</span><h2>{{ $t('hsm_dg_h') }}</h2></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 962 118" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><defs><filter id="dg-hsm" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#16782A" flood-opacity="0.12"/></filter></defs><path d="M162 65 H200" stroke="#2DA23F" stroke-width="2.2"/><path d="M162 65 H200" stroke="#7FE8A6" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M193 59 l8 6 -8 6" stroke="#2DA23F" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M362 65 H400" stroke="#2DA23F" stroke-width="2.2"/><path d="M362 65 H400" stroke="#7FE8A6" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M393 59 l8 6 -8 6" stroke="#2DA23F" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M562 65 H600" stroke="#2DA23F" stroke-width="2.2"/><path d="M562 65 H600" stroke="#7FE8A6" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M593 59 l8 6 -8 6" stroke="#2DA23F" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M762 65 H800" stroke="#2DA23F" stroke-width="2.2"/><path d="M762 65 H800" stroke="#7FE8A6" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M793 59 l8 6 -8 6" stroke="#2DA23F" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g filter="url(#dg-hsm)"><rect x="6" y="36" width="150" height="58" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g><text x="81" y="61" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n1_t') }}</text><text x="81" y="78" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('hsm_dg_n1_s') }}</text><g filter="url(#dg-hsm)"><rect x="206" y="36" width="150" height="58" rx="14" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g><text x="281" y="61" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n2_t') }}</text><text x="281" y="78" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('hsm_dg_n2_s') }}</text><g filter="url(#dg-hsm)"><rect x="406" y="36" width="150" height="58" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g><text x="481" y="61" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n3_t') }}</text><text x="481" y="78" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('hsm_dg_n3_s') }}</text><g filter="url(#dg-hsm)"><rect x="606" y="36" width="150" height="58" rx="14" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g><text x="681" y="61" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n4_t') }}</text><text x="681" y="78" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('hsm_dg_n4_s') }}</text><g filter="url(#dg-hsm)"><rect x="806" y="36" width="150" height="58" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g><text x="881" y="61" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n5_t') }}</text><text x="881" y="78" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('hsm_dg_n5_s') }}</text></svg></div>
    </div>
  </section>

  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_cap_eye') }}</span><h2>{{ $t('hsm_cap_h') }}</h2><p>{{ $t('hsm_cap_p') }}</p></div>
      <div class="sp-grid2">
        <div class="sp-capcard reveal">
          <h3>{{ $t('hsm_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('hsm_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('hsm_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c3_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('hsm_c4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_c4_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_uc_eye') }}</span><h2>{{ $t('hsm_uc_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('hsm_u1_t') }}</h3><p>{{ $t('hsm_u1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('hsm_u2_t') }}</h3><p>{{ $t('hsm_u2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('hsm_u3_t') }}</h3><p>{{ $t('hsm_u3_d') }}</p></div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container"><div class="cta-in reveal">
      <h2>{{ $t('k344') }}</h2>
      <p>{{ $t('k345') }}</p>
      <div class="hs-cta"><router-link class="btn btn-primary btn-lg" to="/contact">{{ $t('k6') }}</router-link><router-link class="btn btn-ghost btn-lg" to="/platform">{{ $t('k0') }}</router-link></div>
    </div></div>
  </section>
</template>

<script setup></script>
