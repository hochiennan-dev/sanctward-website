<template>
  <section class="page-banner">
    <div class="page-banner-inner reveal">
      <span class="pb-eye">{{ $t('msp_eyebrow') }}</span>
      <h1>{{ $t('msp_h1') }}</h1>
      <p>{{ $t('msp_intro') }}</p>
    </div>
  </section>

  <!-- 什麼是 MSP -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_what_eye') }}</span><h2>{{ $t('msp_what_h') }}</h2><p>{{ $t('msp_what_p') }}</p></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('msp_w1_t') }}</h3><p>{{ $t('msp_w1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_w2_t') }}</h3><p>{{ $t('msp_w2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_w3_t') }}</h3><p>{{ $t('msp_w3_d') }}</p></div>
      </div>
    </div>
  </section>

  <!-- MSP 提供哪些服務 -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_svc_eye') }}</span><h2>{{ $t('msp_svc_h') }}</h2><p>{{ $t('msp_svc_p') }}</p></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('msp_s1_t') }}</h3><p>{{ $t('msp_s1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_s2_t') }}</h3><p>{{ $t('msp_s2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_s3_t') }}</h3><p>{{ $t('msp_s3_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_s4_t') }}</h3><p>{{ $t('msp_s4_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_s5_t') }}</h3><p>{{ $t('msp_s5_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_s6_t') }}</h3><p>{{ $t('msp_s6_d') }}</p></div>
      </div>
    </div>
  </section>

  <!-- 已上線的 MSP 底座 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_cap_eye') }}</span><h2>{{ $t('msp_cap_h') }}</h2><p>{{ $t('msp_cap_p') }}</p></div>
      <div class="sp-grid2">
        <div class="sp-capcard reveal">
          <h3>{{ $t('msp_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('msp_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('msp_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c3_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('msp_c4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c4_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('msp_c5_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c5_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c5_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_c5_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 架構總覽 (動畫) -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_arch_eye') }}</span><h2>{{ $t('msp_arch_h') }}</h2><p>{{ $t('msp_arch_p') }}</p></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 760 330" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><line x1="380" y1="68" x2="130" y2="128" stroke="#2DA23F" stroke-width="2"/><line x1="380" y1="68" x2="130" y2="128" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="68" x2="380" y2="128" stroke="#2DA23F" stroke-width="2"/><line x1="380" y1="68" x2="380" y2="128" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="68" x2="620" y2="128" stroke="#2DA23F" stroke-width="2"/><line x1="380" y1="68" x2="620" y2="128" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="130" y1="194" x2="130" y2="240" stroke="#2DA23F" stroke-width="2"/><line x1="130" y1="194" x2="130" y2="240" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="380" y1="194" x2="380" y2="240" stroke="#2DA23F" stroke-width="2"/><line x1="380" y1="194" x2="380" y2="240" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><line x1="620" y1="194" x2="620" y2="240" stroke="#2DA23F" stroke-width="2"/><line x1="620" y1="194" x2="620" y2="240" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><rect x="280" y="18" width="200" height="50" rx="14" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/><text x="380" y="40" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_cp_t') }}</text><text x="380" y="57" text-anchor="middle" font-size="9.5" font-weight="600" fill="#46554E">{{ $t('msp_arch_cp_s') }}</text><rect x="40" y="128" width="180" height="66" rx="14" fill="#F4FAF6" stroke="#2DA23F" stroke-width="1.8"/><text x="130" y="155" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_tnA') }}</text><text x="130" y="173" text-anchor="middle" font-size="9" font-weight="600" fill="#46554E">{{ $t('msp_arch_tn_s') }}</text><rect x="290" y="128" width="180" height="66" rx="14" fill="#F4FAF6" stroke="#2DA23F" stroke-width="1.8"/><text x="380" y="155" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_tnB') }}</text><text x="380" y="173" text-anchor="middle" font-size="9" font-weight="600" fill="#46554E">{{ $t('msp_arch_tn_s') }}</text><rect x="540" y="128" width="180" height="66" rx="14" fill="#F4FAF6" stroke="#2DA23F" stroke-width="1.8"/><text x="620" y="155" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_tnC') }}</text><text x="620" y="173" text-anchor="middle" font-size="9" font-weight="600" fill="#46554E">{{ $t('msp_arch_tn_s') }}</text><rect x="55" y="240" width="150" height="44" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="130" y="267" text-anchor="middle" font-size="10.5" font-weight="600" fill="#46554E">{{ $t('msp_arch_usr') }}</text><rect x="305" y="240" width="150" height="44" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="380" y="267" text-anchor="middle" font-size="10.5" font-weight="600" fill="#46554E">{{ $t('msp_arch_usr') }}</text><rect x="555" y="240" width="150" height="44" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="620" y="267" text-anchor="middle" font-size="10.5" font-weight="600" fill="#46554E">{{ $t('msp_arch_usr') }}</text><text x="380" y="312" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">{{ $t('msp_arch_note') }}</text></svg></div>
    </div>
  </section>

  <!-- 上線流程 (動畫泳道) -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_flow_eye') }}</span><h2>{{ $t('msp_flow_h') }}</h2><p>{{ $t('msp_flow_p') }}</p></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 720 374" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><line x1="120" y1="70" x2="120" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="50" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="120" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('msp_lane_msp') }}</text><line x1="360" y1="70" x2="360" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="290" y="30" width="140" height="40" rx="12" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.2"/><text x="360" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('msp_lane_sw') }}</text><line x1="600" y1="70" x2="600" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="530" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="600" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('msp_lane_cust') }}</text><line x1="120" y1="104" x2="360" y2="104" stroke="#2DA23F" stroke-width="2"/><line x1="120" y1="104" x2="360" y2="104" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 104 l-10 -6 M360 104 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('msp_f1') }}</text><circle cx="120" cy="104" r="8.5" fill="#2DA23F"/><text x="120" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">1</text><line x1="120" y1="150" x2="360" y2="150" stroke="#2DA23F" stroke-width="2"/><line x1="120" y1="150" x2="360" y2="150" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 150 l-10 -6 M360 150 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="142" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('msp_f2') }}</text><circle cx="120" cy="150" r="8.5" fill="#2DA23F"/><text x="120" y="153" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">2</text><line x1="360" y1="196" x2="600" y2="196" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="196" x2="600" y2="196" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M600 196 l-10 -6 M600 196 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="188" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('msp_f3') }}</text><circle cx="360" cy="196" r="8.5" fill="#2DA23F"/><text x="360" y="199" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">3</text><rect x="512" y="230" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="600" y="246" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('msp_f4') }}</text><circle cx="512" cy="242" r="8.5" fill="#2DA23F"/><text x="512" y="245" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">4</text><line x1="600" y1="288" x2="360" y2="288" stroke="#2DA23F" stroke-width="2"/><line x1="600" y1="288" x2="360" y2="288" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 288 l10 -6 M360 288 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="280" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('msp_f5') }}</text><circle cx="600" cy="288" r="8.5" fill="#2DA23F"/><text x="600" y="291" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">5</text><rect x="272" y="322" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="360" y="338" text-anchor="middle" font-size="10" font-weight="700" fill="#1B8F34">{{ $t('msp_f6') }}</text><circle cx="272" cy="334" r="8.5" fill="#2DA23F"/><text x="272" y="337" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">6</text></svg></div>
    </div>
  </section>

  <!-- 平台地基（四根柱子） -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_pf_eye') }}</span><h2>{{ $t('msp_pf_h') }}</h2><p>{{ $t('msp_pf_p') }}</p></div>
      <div class="sp-grid2 reveal">
        <div class="sp-capcard">
          <h3>{{ $t('msp_pf1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf1_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('msp_pf3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf3_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('msp_pf4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf4_b3') }}</span></div>
        </div>
        <div class="sp-capcard">
          <h3>{{ $t('msp_pf2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('msp_pf2_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 應用場景 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_uc_eye') }}</span><h2>{{ $t('msp_uc_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('msp_u1_t') }}</h3><p>{{ $t('msp_u1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_u2_t') }}</h3><p>{{ $t('msp_u2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('msp_u3_t') }}</h3><p>{{ $t('msp_u3_d') }}</p></div>
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
