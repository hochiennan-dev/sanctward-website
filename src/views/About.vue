<template>
  <section class="band page-hero">
    <div class="container reveal">
      <span class="eyebrow">{{ $t('k324') }}</span>
      <h1>{{ $t('k325') }}<br>{{ $t('k326') }}</h1>
      <p>{{ $t('k327') }}</p>
    </div>
  </section>

  <section class="band tight">
    <div class="container reveal">
      <p class="abt-facts">{{ $t('abt_fact1_v') }}<i>|</i>{{ $t('k351') }}<i>|</i>{{ $t('abt_fact3_v') }}</p>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">Mission &amp; Vision</span><h2>{{ $t('k328') }}</h2></div>
      <div class="val-grid reveal">
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></div><h3>{{ $t('k329') }}</h3><p>{{ $t('k330') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-bolt"/></svg></div><h3>{{ $t('k331') }}</h3><p>{{ $t('k332') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg></div><h3>{{ $t('k333') }}</h3><p>{{ $t('k334') }}</p></div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('abt_why_eye') }}</span><h2>{{ $t('abt_why_h') }}</h2><p>{{ $t('abt_why_p') }}</p></div>
      <div class="cmp reveal">
        <div class="cmp-row cmp-head"><div>{{ $t('abt_why_c0') }}</div><div>{{ $t('abt_why_c1') }}</div><div class="c-s">{{ $t('abt_why_c2') }}</div></div>
        <div class="cmp-row"><div class="label">{{ $t('abt_w1_a') }}</div><div class="dim">{{ $t('abt_w1_b') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_w1_c') }}</div></div>
        <div class="cmp-row"><div class="label">{{ $t('abt_w2_a') }}</div><div class="dim">{{ $t('abt_w2_b') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_w2_c') }}</div></div>
        <div class="cmp-row"><div class="label">{{ $t('abt_w3_a') }}</div><div class="dim">{{ $t('abt_w3_b') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_w3_c') }}</div></div>
        <div class="cmp-row"><div class="label">{{ $t('abt_w4_a') }}</div><div class="dim">{{ $t('abt_w4_b') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_w4_c') }}</div></div>
        <div class="cmp-row"><div class="label">{{ $t('abt_w5_a') }}</div><div class="dim">{{ $t('abt_w5_b') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_w5_c') }}</div></div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">Platform</span><h2>{{ $t('k335') }}</h2><p>{{ $t('k336') }}</p></div>
      <div class="val-grid reveal">
        <router-link class="val-card lnk" to="/platform/sso"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></div><span class="k">IAM / SSO</span><h3>{{ $t('hp_f_sso') }}</h3><p>{{ $t('k77') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/pam"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg></div><span class="k">PAM</span><h3>{{ $t('hp_f_pam') }}</h3><p>{{ $t('k79') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/zta"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg></div><span class="k">ZTA / Endpoint</span><h3>{{ $t('hp_f_zta') }}</h3><p>{{ $t('k81') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/dlp"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg></div><span class="k">DLP</span><h3>{{ $t('hp_f_dlp') }}</h3><p>{{ $t('abt_m_dlp_d') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/iae"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-users"/></svg></div><span class="k">IAE</span><h3>{{ $t('hp_f_iae') }}</h3><p>{{ $t('abt_m_iae_d') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/hsm"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></div><span class="k">SanctSeal</span><h3>{{ $t('hp_f_seal') }}</h3><p>{{ $t('abt_m_seal_d') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/compliance"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></div><span class="k">Compliance</span><h3>{{ $t('hp_f_cmp') }}</h3><p>{{ $t('k85') }}</p></router-link>
        <router-link class="val-card lnk" to="/platform/reports"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clip"/></svg></div><span class="k">Reports</span><h3>{{ $t('hp_f_rpt') }}</h3><p>{{ $t('abt_m_rpt_d') }}</p></router-link>
        <router-link class="val-card lnk" to="/msp"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg></div><span class="k">MSP</span><h3>{{ $t('hp_f_msp') }}</h3><p>{{ $t('abt_m_msp_d') }}</p></router-link>
      </div>
      <div class="reveal" style="text-align:center;margin-top:28px">
        <router-link class="btn btn-ghost btn-lg" to="/platform">{{ $t('k337') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></router-link>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">Core Values</span><h2>{{ $t('k338') }}</h2></div>
      <div class="val-grid reveal">
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></div><h3>{{ $t('k313') }}</h3><p>{{ $t('k339') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></div><h3>{{ $t('k340') }}</h3><p>{{ $t('k341') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg></div><h3>{{ $t('k342') }}</h3><p>{{ $t('k343') }}</p></div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('abt_cmp_eye') }}</span><h2>{{ $t('abt_cmp_h') }}</h2><p>{{ $t('abt_cmp_p') }}</p></div>
      <div class="chips reveal" style="justify-content:center">
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std1') }}</span>
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std2') }}</span>
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std3') }}</span>
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std4') }}</span>
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std5') }}</span>
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std6') }}</span>
        <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('abt_std7') }}</span>
      </div>
      <p class="abt-note reveal">{{ $t('abt_cmp_note') }}</p>
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <div class="cta-in reveal">
        <h2>{{ $t('k344') }}</h2>
        <p>{{ $t('k345') }}</p>
        <div class="hs-cta">
          <router-link class="btn btn-primary btn-lg" to="/contact">{{ $t('k6') }}</router-link>
          <router-link class="btn btn-ghost btn-lg" to="/platform">{{ $t('k25') }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
