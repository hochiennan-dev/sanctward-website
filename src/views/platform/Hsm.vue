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
      <div class="sp-flow reveal"><svg viewBox="0 0 962 138" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><path d="M144 54 H262" stroke="#D2DAD4" stroke-width="2.2"/><path d="M144 54 H262" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M330 54 H447" stroke="#D2DAD4" stroke-width="2.2"/><path d="M330 54 H447" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M515 54 H633" stroke="#D2DAD4" stroke-width="2.2"/><path d="M515 54 H633" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M701 54 H818" stroke="#D2DAD4" stroke-width="2.2"/><path d="M701 54 H818" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><circle cx="110" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-layers" x="96" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="110" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n1_t') }}</text><text x="110" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_dg_n1_s') }}</text><circle cx="296" cy="54" r="30" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-key" x="282" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="296" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n2_t') }}</text><text x="296" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_dg_n2_s') }}</text><circle cx="481" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-clock" x="467" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="481" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n3_t') }}</text><text x="481" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_dg_n3_s') }}</text><circle cx="667" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-bolt" x="653" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="667" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n4_t') }}</text><text x="667" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_dg_n4_s') }}</text><circle cx="852" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-doc" x="838" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="852" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_dg_n5_t') }}</text><text x="852" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_dg_n5_s') }}</text></svg></div>
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

  <!-- 多 CA ACME 與憑證轉換派送 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_acme_eye') }}</span><h2>{{ $t('hsm_acme_h') }}</h2><p>{{ $t('hsm_acme_p') }}</p></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 962 138" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><path d="M144 54 H262" stroke="#D2DAD4" stroke-width="2.2"/><path d="M144 54 H262" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M330 54 H447" stroke="#D2DAD4" stroke-width="2.2"/><path d="M330 54 H447" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M515 54 H633" stroke="#D2DAD4" stroke-width="2.2"/><path d="M515 54 H633" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M701 54 H818" stroke="#D2DAD4" stroke-width="2.2"/><path d="M701 54 H818" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><circle cx="110" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-layers" x="96" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="110" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_acme_n1_t') }}</text><text x="110" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_acme_n1_s') }}</text><circle cx="296" cy="54" r="30" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-key" x="282" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="296" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_acme_n2_t') }}</text><text x="296" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_acme_n2_s') }}</text><circle cx="481" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-clip" x="467" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="481" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_acme_n3_t') }}</text><text x="481" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_acme_n3_s') }}</text><circle cx="667" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-server" x="653" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="667" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_acme_n4_t') }}</text><text x="667" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_acme_n4_s') }}</text><circle cx="852" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-clock" x="838" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="852" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('hsm_acme_n5_t') }}</text><text x="852" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('hsm_acme_n5_s') }}</text></svg></div>
      <div class="sp-grid3 reveal" style="margin-top:30px">
        <div class="sp-capcard">
          <h3>{{ $t('hsm_acme_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('hsm_acme_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('hsm_acme_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_acme_c3_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Agent／Agentless 派送模式 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('hsm_dep_eye') }}</span><h2>{{ $t('hsm_dep_h') }}</h2><p>{{ $t('hsm_dep_p') }}</p></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 900 250" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><path d="M124 108 C 210 84 300 64 402 64" stroke="#D2DAD4" stroke-width="1.9" fill="none"/><path d="M124 108 C 210 84 300 64 402 64" stroke="#AAB4AD" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-dasharray="0.1 11"><animate attributeName="stroke-dashoffset" values="11;0" dur="1.15s" repeatCount="indefinite"/></path><text x="250" y="52" text-anchor="middle" font-size="10" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_pull') }}</text><path d="M124 132 C 210 156 300 176 402 176" stroke="#D2DAD4" stroke-width="1.9" fill="none"/><path d="M124 132 C 210 156 300 176 402 176" stroke="#AAB4AD" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-dasharray="0.1 11"><animate attributeName="stroke-dashoffset" values="11;0" dur="1.15s" repeatCount="indefinite"/></path><text x="250" y="206" text-anchor="middle" font-size="10" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_push') }}</text><path d="M458 64 H624" stroke="#D2DAD4" stroke-width="2.2"/><path d="M458 64 H624" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><text x="541" y="52" text-anchor="middle" font-size="10" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_reload') }}</text><path d="M458 176 H624" stroke="#D2DAD4" stroke-width="2.2"/><path d="M458 176 H624" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><text x="541" y="164" text-anchor="middle" font-size="10" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_deploy') }}</text><circle cx="96" cy="120" r="32" fill="#fff" stroke="#2DA23F" stroke-width="2.4"/><use href="#sw-mark" x="79" y="103" width="34" height="34"/><circle cx="430" cy="64" r="28" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-server" x="417" y="51" width="26" height="26" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="430" y="109" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('hsm_dep_agent_t') }}</text><text x="430" y="123" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_agent_s') }}</text><circle cx="650" cy="64" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-check" x="637" y="51" width="26" height="26" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="650" y="107" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('hsm_dep_svc_t') }}</text><text x="650" y="121" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_svc_s') }}</text><circle cx="430" cy="176" r="28" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-bolt" x="417" y="163" width="26" height="26" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="430" y="221" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('hsm_dep_less_t') }}</text><text x="430" y="235" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_less_s') }}</text><circle cx="650" cy="176" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-scan" x="637" y="163" width="26" height="26" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="650" y="219" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('hsm_dep_dev_t') }}</text><text x="650" y="233" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('hsm_dep_dev_s') }}</text><text x="96" y="172" text-anchor="middle" font-size="11" font-weight="800" fill="#1B8F34">SanctSeal</text></svg></div>
      <div class="sp-grid2 reveal" style="margin-top:30px">
        <div class="sp-capcard">
          <h3>{{ $t('hsm_dep_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c1_b1') }}</span></div><div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c1_b2') }}</span></div><div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c1_b3') }}</span></div><div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c1_b4') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('hsm_dep_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c2_b1') }}</span></div><div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c2_b2') }}</span></div><div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c2_b3') }}</span></div><div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('hsm_dep_c2_b4') }}</span></div>
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
