<template>
  <section class="page-banner">
    <div class="page-banner-inner reveal">
      <span class="pb-eye">{{ $t('pam_eyebrow') }}</span>
      <h1>{{ $t('pam_h1') }}</h1>
      <p>{{ $t('pam_intro') }}</p>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('pam_pil_eye') }}</span><h2>{{ $t('pam_pil_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('pam_p1_t') }}</h3><p>{{ $t('pam_p1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('pam_p2_t') }}</h3><p>{{ $t('pam_p2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('pam_p3_t') }}</h3><p>{{ $t('pam_p3_d') }}</p></div>
      </div>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('pam_dg_eye') }}</span><h2>{{ $t('pam_dg_h') }}</h2></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 762 138" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><path d="M134 54 H253" stroke="#D2DAD4" stroke-width="2.2"/><path d="M134 54 H253" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M321 54 H441" stroke="#D2DAD4" stroke-width="2.2"/><path d="M321 54 H441" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M509 54 H628" stroke="#D2DAD4" stroke-width="2.2"/><path d="M509 54 H628" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><circle cx="100" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-users" x="86" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="100" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('pam_dg_n1_t') }}</text><text x="100" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('pam_dg_n1_s') }}</text><circle cx="287" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-clock" x="273" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="287" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('pam_dg_n2_t') }}</text><text x="287" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('pam_dg_n2_s') }}</text><circle cx="475" cy="54" r="30" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-eye" x="461" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="475" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('pam_dg_n3_t') }}</text><text x="475" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('pam_dg_n3_s') }}</text><circle cx="662" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-server" x="648" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="662" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('pam_dg_n4_t') }}</text><text x="662" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('pam_dg_n4_s') }}</text></svg></div>
    </div>
  </section>

  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('pam_cap_eye') }}</span><h2>{{ $t('pam_cap_h') }}</h2><p>{{ $t('pam_cap_p') }}</p></div>
      <div class="sp-grid2">
        <div class="sp-capcard reveal">
          <h3>{{ $t('pam_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('pam_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('pam_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c3_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('pam_c4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('pam_c4_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('pam_uc_eye') }}</span><h2>{{ $t('pam_uc_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('pam_u1_t') }}</h3><p>{{ $t('pam_u1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('pam_u2_t') }}</h3><p>{{ $t('pam_u2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('pam_u3_t') }}</h3><p>{{ $t('pam_u3_d') }}</p></div>
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
