<template>
  <section class="page-banner">
    <div class="page-banner-inner reveal">
      <span class="pb-eye">{{ $t('compliance_eyebrow') }}</span>
      <h1>{{ $t('compliance_h1') }}</h1>
      <p>{{ $t('compliance_intro') }}</p>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('compliance_pil_eye') }}</span><h2>{{ $t('compliance_pil_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('compliance_p1_t') }}</h3><p>{{ $t('compliance_p1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('compliance_p2_t') }}</h3><p>{{ $t('compliance_p2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('compliance_p3_t') }}</h3><p>{{ $t('compliance_p3_d') }}</p></div>
      </div>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('compliance_dg_eye') }}</span><h2>{{ $t('compliance_dg_h') }}</h2></div>
      <div class="sp-flow reveal"><svg viewBox="0 0 962 138" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.6rem"><path d="M144 54 H262" stroke="#D2DAD4" stroke-width="2.2"/><path d="M144 54 H262" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M330 54 H447" stroke="#D2DAD4" stroke-width="2.2"/><path d="M330 54 H447" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M515 54 H633" stroke="#D2DAD4" stroke-width="2.2"/><path d="M515 54 H633" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><path d="M701 54 H818" stroke="#D2DAD4" stroke-width="2.2"/><path d="M701 54 H818" stroke="#AAB4AD" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></path><circle cx="110" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-doc" x="96" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="110" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('compliance_dg_n1_t') }}</text><text x="110" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('compliance_dg_n1_s') }}</text><circle cx="296" cy="54" r="30" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/><use href="#i-scan" x="282" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="296" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('compliance_dg_n2_t') }}</text><text x="296" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('compliance_dg_n2_s') }}</text><circle cx="481" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-check" x="467" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="481" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('compliance_dg_n3_t') }}</text><text x="481" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('compliance_dg_n3_s') }}</text><circle cx="667" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-shield" x="653" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="667" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('compliance_dg_n4_t') }}</text><text x="667" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('compliance_dg_n4_s') }}</text><circle cx="852" cy="54" r="26" fill="#EAF6EC" stroke="#CBE8D2" stroke-width="1.6"/><use href="#i-doc" x="838" y="40" width="28" height="28" fill="none" stroke="#1B8F34" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/><text x="852" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="#1B8F34">{{ $t('compliance_dg_n5_t') }}</text><text x="852" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="#7E8C85">{{ $t('compliance_dg_n5_s') }}</text></svg></div>
    </div>
  </section>

  <!-- 內建合規框架(完整清單) -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('cmp_fw_eye') }}</span><h2>{{ $t('cmp_fw_h') }}</h2><p>{{ $t('cmp_fw_p') }}</p></div>
      <div class="cmp-stat reveal">
        <span class="num">{{ $t('cmp_fw_stat_n') }}</span>
        <span class="meta"><span class="l">{{ $t('cmp_fw_stat_l') }}</span><span class="s">{{ $t('cmp_fw_stat_s') }}</span></span>
      </div>
      <div class="cmp-fw-groups reveal">
        <div class="cmp-fw-grp"><h4>{{ $t('cmp_fw_g1_t') }}<span class="cnt">10</span></h4><div class="cmp-chips"><span>ISO/IEC 27001:2022</span><span>ISO/IEC 27017:2015</span><span>ISO/IEC 27018:2019</span><span>ISO/IEC 27011:2022</span><span>NIST SP 800-207</span><span>NIST SP 800-53 Rev.5</span><span>CIS Controls v8</span><span>SOC 2 Type II</span><span>PCI DSS v4.0</span><span>IEC 62443</span></div></div>
        <div class="cmp-fw-grp"><h4>{{ $t('cmp_fw_g2_t') }}<span class="cnt">6</span></h4><div class="cmp-chips"><span>{{ $t('cmp_fw_g2_1') }}</span><span>{{ $t('cmp_fw_g2_2') }}</span><span>{{ $t('cmp_fw_g2_3') }}</span><span>{{ $t('cmp_fw_g2_4') }}</span><span>{{ $t('cmp_fw_g2_5') }}</span><span>{{ $t('cmp_fw_g2_6') }}</span></div></div>
        <div class="cmp-fw-grp"><h4>{{ $t('cmp_fw_g3_t') }}<span class="cnt">6</span></h4><div class="cmp-chips"><span>HIPAA §164.312</span><span>HITRUST CSF</span><span>NY DFS 23 NYCRR 500</span><span>NAIC MDL-668</span><span>CMMC v2.0</span><span>{{ $t('cmp_fw_g3_6') }}</span></div></div>
        <div class="cmp-fw-grp"><h4>{{ $t('cmp_fw_g4_t') }}<span class="cnt">3</span></h4><div class="cmp-chips"><span>{{ $t('cmp_fw_g4_1') }}</span><span>{{ $t('cmp_fw_g4_2') }}</span><span>{{ $t('cmp_fw_g4_3') }}</span></div></div>
        <div class="cmp-fw-grp"><h4>{{ $t('cmp_fw_g5_t') }}<span class="cnt">3</span></h4><div class="cmp-chips"><span>GDPR Art.32</span><span>{{ $t('cmp_fw_g5_2') }}</span><span>EASA Part-IS</span></div></div>
        <div class="cmp-fw-grp"><h4>{{ $t('cmp_fw_g6_t') }}<span class="cnt">3</span></h4><div class="cmp-chips"><span>{{ $t('cmp_fw_g6_1') }}</span><span>{{ $t('cmp_fw_g6_2') }}</span><span>{{ $t('cmp_fw_g6_3') }}</span></div></div>
      </div>
      <p class="cmp-fw-note reveal">{{ $t('cmp_fw_note') }}</p>
    </div>
  </section>

  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('compliance_cap_eye') }}</span><h2>{{ $t('compliance_cap_h') }}</h2><p>{{ $t('compliance_cap_p') }}</p></div>
      <div class="sp-grid2">
        <div class="sp-capcard reveal">
          <h3>{{ $t('compliance_c1_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c1_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c1_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c1_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('compliance_c2_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c2_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c2_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c2_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('compliance_c3_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c3_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c3_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c3_b3') }}</span></div>
        </div>
        <div class="sp-capcard reveal">
          <h3>{{ $t('compliance_c4_t') }}</h3>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c4_b1') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c4_b2') }}</span></div>
          <div class="sp-pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('compliance_c4_b3') }}</span></div>
        </div>
      </div>
    </div>
  </section>
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('compliance_uc_eye') }}</span><h2>{{ $t('compliance_uc_h') }}</h2></div>
      <div class="sp-grid3 reveal">
        <div class="sp-card"><h3>{{ $t('compliance_u1_t') }}</h3><p>{{ $t('compliance_u1_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('compliance_u2_t') }}</h3><p>{{ $t('compliance_u2_d') }}</p></div>
        <div class="sp-card"><h3>{{ $t('compliance_u3_t') }}</h3><p>{{ $t('compliance_u3_d') }}</p></div>
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

<style scoped>
.cmp-stat{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;background:var(--surface-2);border:1px solid var(--line);border-radius:18px;padding:24px 30px;max-width:760px;margin:0 auto 30px}
.cmp-stat .num{font-family:'Inter';font-weight:800;font-size:56px;line-height:1;letter-spacing:-.02em;color:var(--brand)}
.cmp-stat .meta{display:flex;flex-direction:column;gap:5px}
.cmp-stat .meta .l{font-size:18px;font-weight:800;color:var(--brand-ink)}
.cmp-stat .meta .s{font-size:13.5px;color:var(--ink-2);line-height:1.6;max-width:420px}

.cmp-fw-groups{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.cmp-fw-grp{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px}
.cmp-fw-grp h4{margin:0 0 12px;font-size:14px;color:var(--brand-ink);display:flex;align-items:center;gap:9px}
.cmp-fw-grp h4 .cnt{font-size:11px;font-weight:700;color:var(--brand);background:var(--brand-soft);border-radius:20px;padding:2px 9px}
.cmp-chips{display:flex;flex-wrap:wrap;gap:8px}
.cmp-chips span{font-size:12px;color:var(--ink-1);background:var(--surface-2);border:1px solid var(--line);border-radius:8px;padding:5px 10px;transition:border-color .2s,color .2s}
.cmp-chips span:hover{border-color:var(--brand);color:var(--brand-ink)}
.cmp-fw-note{text-align:center;font-size:13px;color:var(--ink-2);margin:24px auto 0;max-width:760px;line-height:1.7}

@media(max-width:860px){.cmp-fw-groups{grid-template-columns:1fr}.cmp-stat .num{font-size:46px}}
</style>
