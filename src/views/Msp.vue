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
      <div class="sp-flow reveal"><svg viewBox="0 0 840 296" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><defs><path id="mspP0" d="M420 104 C 300 122 210 146 150 162"/><path id="mspP1" d="M420 104 V162"/><path id="mspP2" d="M420 104 C 540 122 630 146 690 162"/></defs><rect x="42" y="150" width="216" height="112" rx="18" fill="#F6FBF7" stroke="#CBE8D2" stroke-width="1.4" stroke-dasharray="5 5"/><rect x="312" y="150" width="216" height="112" rx="18" fill="#F6FBF7" stroke="#CBE8D2" stroke-width="1.4" stroke-dasharray="5 5"/><rect x="582" y="150" width="216" height="112" rx="18" fill="#F6FBF7" stroke="#CBE8D2" stroke-width="1.4" stroke-dasharray="5 5"/><path d="M420 104 C 300 122 210 146 150 162" stroke="#D2DAD4" stroke-width="2" fill="none"/><path d="M420 104 C 300 122 210 146 150 162" stroke="#AAB4AD" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="0.1 11"><animate attributeName="stroke-dashoffset" values="11;0" dur="1.15s" repeatCount="indefinite"/></path><path d="M420 104 V162" stroke="#D2DAD4" stroke-width="2" fill="none"/><path d="M420 104 V162" stroke="#AAB4AD" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="0.1 11"><animate attributeName="stroke-dashoffset" values="11;0" dur="1.15s" repeatCount="indefinite"/></path><path d="M420 104 C 540 122 630 146 690 162" stroke="#D2DAD4" stroke-width="2" fill="none"/><path d="M420 104 C 540 122 630 146 690 162" stroke="#AAB4AD" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="0.1 11"><animate attributeName="stroke-dashoffset" values="11;0" dur="1.15s" repeatCount="indefinite"/></path><text x="420" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_cp_t') }}</text><text x="420" y="34" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('msp_arch_cp_s') }}</text><circle cx="420" cy="72" r="32" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="32;46" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle><circle cx="420" cy="72" r="32" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-layers" x="405" y="57" width="30" height="30" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="150" cy="190" r="28" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-shield" x="136.5" y="176.5" width="27" height="27" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="150" y="234" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_tnA') }}</text><text x="150" y="247" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('msp_arch_tn_s') }}</text><circle cx="420" cy="190" r="28" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-shield" x="406.5" y="176.5" width="27" height="27" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="420" y="234" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_tnB') }}</text><text x="420" y="247" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('msp_arch_tn_s') }}</text><circle cx="690" cy="190" r="28" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-shield" x="676.5" y="176.5" width="27" height="27" fill="none" stroke="#1B8F34" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><text x="690" y="234" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1B8F34">{{ $t('msp_arch_tnC') }}</text><text x="690" y="247" text-anchor="middle" font-size="9" font-weight="600" fill="#7E8C85">{{ $t('msp_arch_tn_s') }}</text><circle cx="285" cy="195" r="10" fill="#fff" stroke="#D2473F" stroke-width="1.8"/><path d="M279 201 L291 189" stroke="#D2473F" stroke-width="1.8" stroke-linecap="round"/><circle cx="555" cy="195" r="10" fill="#fff" stroke="#D2473F" stroke-width="1.8"/><path d="M549 201 L561 189" stroke="#D2473F" stroke-width="1.8" stroke-linecap="round"/><g opacity="0"><circle r="4.5" fill="#2DA23F"/><animateMotion dur="2.4s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#mspP0"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g><g opacity="0"><circle r="4.5" fill="#2DA23F"/><animateMotion dur="2.4s" begin="0.7s" repeatCount="indefinite"><mpath xlink:href="#mspP1"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0.7s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g><g opacity="0"><circle r="4.5" fill="#2DA23F"/><animateMotion dur="2.4s" begin="1.4s" repeatCount="indefinite"><mpath xlink:href="#mspP2"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="1.4s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g><text x="420" y="288" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">{{ $t('msp_arch_note') }}</text></svg></div>
      <p class="reveal" style="text-align:center;font-weight:800;color:var(--ink-1);font-size:18px;margin:38px 0 18px">{{ $t('msp_arch_feat_h') }}</p>
      <div class="feat-grid reveal"><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg><span>{{ $t('hp_f_sso') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg><span>{{ $t('hp_f_pam') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg><span>{{ $t('hp_f_zta') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clip"/></svg><span>{{ $t('hp_f_dlp') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg><span>{{ $t('hp_f_iae') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg><span>{{ $t('hp_f_seal') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg><span>{{ $t('hp_f_cmp') }}</span></div><div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg><span>{{ $t('hp_f_rpt') }}</span></div></div>
    </div>
  </section>

  <!-- 上線流程 (階段動畫) -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('msp_flow_eye') }}</span><h2>{{ $t('msp_flow_h') }}</h2><p>{{ $t('msp_flow_p') }}</p></div>
      <div class="stg-rail reveal">
        <div class="stg" style="--i:0">
          <div class="stg-top"><div class="stg-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg></div><span class="stg-n">1</span></div>
          <div class="stg-tx"><span class="stg-who">{{ $t('msp_lane_msp') }}</span><h4>{{ $t('msp_f1') }}</h4><p>{{ $t('msp_f1_d') }}</p></div>
        </div>
        <div class="stg" style="--i:1">
          <div class="stg-top"><div class="stg-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-bolt"/></svg></div><span class="stg-n">2</span></div>
          <div class="stg-tx"><span class="stg-who">{{ $t('msp_lane_msp') }}</span><h4>{{ $t('msp_f2') }}</h4><p>{{ $t('msp_f2_d') }}</p></div>
        </div>
        <div class="stg" style="--i:2">
          <div class="stg-top"><div class="stg-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></div><span class="stg-n">3</span></div>
          <div class="stg-tx"><span class="stg-who">{{ $t('msp_lane_sw') }}</span><h4>{{ $t('msp_f3') }}</h4><p>{{ $t('msp_f3_d') }}</p></div>
        </div>
        <div class="stg" style="--i:3">
          <div class="stg-top"><div class="stg-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg></div><span class="stg-n">4</span></div>
          <div class="stg-tx"><span class="stg-who">{{ $t('msp_lane_cust') }}</span><h4>{{ $t('msp_f4') }}</h4><p>{{ $t('msp_f4_d') }}</p></div>
        </div>
        <div class="stg" style="--i:4">
          <div class="stg-top"><div class="stg-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></div><span class="stg-n">5</span></div>
          <div class="stg-tx"><span class="stg-who">{{ $t('msp_lane_cust') }}</span><h4>{{ $t('msp_f5') }}</h4><p>{{ $t('msp_f5_d') }}</p></div>
        </div>
        <div class="stg" style="--i:5">
          <div class="stg-top"><div class="stg-ic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg></div><span class="stg-n">6</span></div>
          <div class="stg-tx"><span class="stg-who">{{ $t('msp_lane_msp') }}</span><h4>{{ $t('msp_f6') }}</h4><p>{{ $t('msp_f6_d') }}</p></div>
        </div>
      </div>
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
