<template>
  <section class="page-banner">
    <div class="page-banner-inner reveal">
      <span class="pb-eye">{{ $t('zta_eyebrow') }}</span>
      <h1>{{ $t('zta_h1') }}</h1>
      <p>{{ $t('zta_intro') }}</p>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('zta_pil_eye') }}</span><h2>{{ $t('zta_pil_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('zta_p1_t') }}</h3><p>{{ $t('zta_p1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('zta_p2_t') }}</h3><p>{{ $t('zta_p2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('zta_p3_t') }}</h3><p>{{ $t('zta_p3_d') }}</p></div>
      </div>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('zta_dg_eye') }}</span><h2>{{ $t('zta_dg_h') }}</h2></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 762 138" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><path d="M134 54 H253" stroke="#D2DAD4" stroke-width="2.2"/><path d="M134 54 H253" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M321 54 H441" stroke="#D2DAD4" stroke-width="2.2"/><path d="M321 54 H441" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M509 54 H628" stroke="#D2DAD4" stroke-width="2.2"/><path d="M509 54 H628" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><circle cx="100" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-search" x="86" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="100" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_dg_n1_t') }}</text><text x="100" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('zta_dg_n1_s') }}</text><circle cx="287" cy="54" r="30" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-scan" x="273" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="287" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_dg_n2_t') }}</text><text x="287" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('zta_dg_n2_s') }}</text><circle cx="475" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-bolt" x="461" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="475" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_dg_n3_t') }}</text><text x="475" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('zta_dg_n3_s') }}</text><circle cx="662" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-shield" x="648" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="662" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_dg_n4_t') }}</text><text x="662" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('zta_dg_n4_s') }}</text></svg></div>
    </div>
  </section>

  <!-- 零信任決策流程(概念圖,動畫) -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('zta_zt_eye') }}</span><h2>{{ $t('zta_zt_h') }}</h2><p>{{ $t('zta_zt_p') }}</p></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 760 480" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><line x1="380" y1="58" x2="380" y2="92" stroke="#D2DAD4" stroke-width="2.2"/><line x1="380" y1="58" x2="380" y2="92" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="146" x2="380" y2="180" stroke="#D2DAD4" stroke-width="2.2"/><line x1="380" y1="146" x2="380" y2="180" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="234" x2="140" y2="300" stroke="#D2DAD4" stroke-width="2.2"/><line x1="380" y1="234" x2="140" y2="300" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="234" x2="380" y2="300" stroke="#D2DAD4" stroke-width="2.2"/><line x1="380" y1="234" x2="380" y2="300" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="234" x2="620" y2="300" stroke="#D2DAD4" stroke-width="2.2"/><line x1="380" y1="234" x2="620" y2="300" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="360" x2="380" y2="410" stroke="#D2DAD4" stroke-width="2.2"/><line x1="380" y1="360" x2="380" y2="410" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="620" y1="360" x2="470" y2="410" stroke="#D2DAD4" stroke-width="2.2"/><line x1="620" y1="360" x2="470" y2="410" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M240 435 C 24 440 24 114 240 119" stroke="#D2DAD4" stroke-width="2.2" fill="none"/><path d="M240 435 C 24 440 24 114 240 119" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.3s" repeatCount="indefinite"/></path><rect x="226" y="248" width="48" height="20" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.2"/><text x="250" y="262" text-anchor="middle" font-size="10.5" font-weight="700" fill="#B5740F">&lt; 60</text><rect x="388" y="262" width="54" height="20" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.2"/><text x="415" y="276" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">60–90</text><rect x="486" y="248" width="48" height="20" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.2"/><text x="510" y="262" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">&gt; 90</text><rect x="305" y="14" width="150" height="44" rx="13" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/><text x="380" y="41" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_zt_n1') }}</text><rect x="240" y="92" width="280" height="54" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/><text x="380" y="114" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_zt_n2_t') }}</text><text x="380" y="132" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('zta_zt_n2_s') }}</text><rect x="270" y="180" width="220" height="54" rx="14" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/><text x="380" y="202" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_zt_n3_t') }}</text><text x="380" y="220" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('zta_zt_n3_s') }}</text><rect x="40" y="300" width="200" height="60" rx="14" fill="#FDF6E9" stroke="#E4B765" stroke-width="1.8"/><text x="140" y="326" text-anchor="middle" font-size="13" font-weight="800" fill="#B5740F">{{ $t('zta_zt_deny_t') }}</text><text x="140" y="344" text-anchor="middle" font-size="9.5" font-weight="600" fill="#B5740F">{{ $t('zta_zt_deny_s') }}</text><rect x="280" y="300" width="200" height="60" rx="14" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/><text x="380" y="324" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('zta_zt_mfa_t') }}</text><text x="380" y="342" text-anchor="middle" font-size="9" font-weight="600" fill="#46554E">{{ $t('zta_zt_mfa_s') }}</text><rect x="520" y="300" width="200" height="60" rx="14" fill="#F4FAF6" stroke="#2DA23F" stroke-width="1.8"/><text x="620" y="326" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_zt_allow_t') }}</text><text x="620" y="344" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('zta_zt_allow_s') }}</text><rect x="240" y="410" width="280" height="50" rx="14" fill="#F4FAF6" stroke="#2DA23F" stroke-width="1.8"/><text x="380" y="431" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('zta_zt_loop_t') }}</text><text x="380" y="448" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('zta_zt_loop_s') }}</text></svg></div>
    </div>
  </section>

  <!-- MFA 加驗機制 + 動畫 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('zta_mfa_eye') }}</span><h2>{{ $t('zta_mfa_h') }}</h2><p>{{ $t('zta_mfa_p') }}</p></div>
      <div class="sp-grid2 reveal">
        <div class="sp-capcard">
          <h3>{{ $t('zta_mfa_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('zta_mfa_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('zta_mfa_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c3_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('zta_mfa_c4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_mfa_c4_b3') }}</span></div>
        </div>
      </div>
      <div class="sp-flow reveal" style="margin-top:30px"><svg viewBox="0 0 720 374" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><line x1="120" y1="70" x2="120" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="50" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="120" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('zta_mfa_lane_user') }}</text><line x1="360" y1="70" x2="360" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="290" y="30" width="140" height="40" rx="12" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.2"/><text x="360" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('zta_mfa_lane_eng') }}</text><line x1="600" y1="70" x2="600" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="530" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="600" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('zta_mfa_lane_app') }}</text><line x1="120" y1="104" x2="360" y2="104" stroke="#D2DAD4" stroke-width="2"/><line x1="120" y1="104" x2="360" y2="104" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><text x="240" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('zta_mfa_s1') }}</text><circle cx="120" cy="104" r="8.5" fill="#2DA23F"/><text x="120" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">1</text><rect x="272" y="138" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="360" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('zta_mfa_s2') }}</text><circle cx="272" cy="150" r="8.5" fill="#2DA23F"/><text x="272" y="153" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">2</text><line x1="360" y1="196" x2="120" y2="196" stroke="#D2DAD4" stroke-width="2"/><line x1="360" y1="196" x2="120" y2="196" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><text x="240" y="188" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('zta_mfa_s3') }}</text><circle cx="360" cy="196" r="8.5" fill="#2DA23F"/><text x="360" y="199" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">3</text><line x1="120" y1="242" x2="360" y2="242" stroke="#D2DAD4" stroke-width="2"/><line x1="120" y1="242" x2="360" y2="242" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><text x="240" y="234" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('zta_mfa_s4') }}</text><circle cx="120" cy="242" r="8.5" fill="#2DA23F"/><text x="120" y="245" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">4</text><line x1="360" y1="288" x2="600" y2="288" stroke="#D2DAD4" stroke-width="2"/><line x1="360" y1="288" x2="600" y2="288" stroke="#AAB4AD" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><text x="480" y="280" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('zta_mfa_s5') }}</text><circle cx="360" cy="288" r="8.5" fill="#2DA23F"/><text x="360" y="291" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">5</text><rect x="272" y="322" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="360" y="338" text-anchor="middle" font-size="10" font-weight="700" fill="#1B8F34">{{ $t('zta_mfa_s6') }}</text><circle cx="272" cy="334" r="8.5" fill="#2DA23F"/><text x="272" y="337" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">6</text></svg></div>
    </div>
  </section>

  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('zta_cap_eye') }}</span><h2>{{ $t('zta_cap_h') }}</h2><p>{{ $t('zta_cap_p') }}</p></div>
      <div class="sp-grid2">
        <div class="sp-capcard reveal">
          <h3>{{ $t('zta_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('zta_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('zta_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c3_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('zta_c4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('zta_c4_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('zta_uc_eye') }}</span><h2>{{ $t('zta_uc_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('zta_u1_t') }}</h3><p>{{ $t('zta_u1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('zta_u2_t') }}</h3><p>{{ $t('zta_u2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('zta_u3_t') }}</h3><p>{{ $t('zta_u3_d') }}</p></div>
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
