<template>
  <section class="band page-hero">
    <div class="container reveal">
      <span class="eyebrow">{{ $t('iae_eyebrow') }}</span>
      <h1>{{ $t('iae_h1') }}</h1>
      <p>{{ $t('iae_intro') }}</p>
    </div>
  </section>

  <!-- 三個角色 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('iae_roles_eye') }}</span><h2>{{ $t('iae_roles_h') }}</h2></div>
      <div class="iae-roles reveal">
        <div class="iae-card"><span class="rk">A</span><h3>{{ $t('iae_roleA_t') }}</h3><p>{{ $t('iae_roleA_d') }}</p></div>
        <div class="iae-card"><span class="rk">B</span><h3>{{ $t('iae_roleB_t') }}</h3><p>{{ $t('iae_roleB_d') }}</p></div>
        <div class="iae-card"><span class="rk">C</span><h3>{{ $t('iae_roleC_t') }}</h3><p>{{ $t('iae_roleC_d') }}</p></div>
      </div>
    </div>
  </section>

  <!-- 四大協定 -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('iae_proto_eye') }}</span><h2>{{ $t('iae_proto_h') }}</h2><p>{{ $t('iae_proto_p') }}</p></div>
      <div class="proto-grid">
        <div class="proto-card reveal"><div class="proto-tag">OIDC</div><h3>{{ $t('iae_oidc_t') }}</h3><p class="intro">{{ $t('iae_oidc_d') }}</p>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_oidc_1') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_oidc_2') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_oidc_3') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_oidc_4') }}</span></div>
        </div>
        <div class="proto-card reveal"><div class="proto-tag">SAML</div><h3>{{ $t('iae_saml_t') }}</h3><p class="intro">{{ $t('iae_saml_d') }}</p>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_saml_1') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_saml_2') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_saml_3') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_saml_4') }}</span></div>
        </div>
        <div class="proto-card reveal"><div class="proto-tag">MFA</div><h3>{{ $t('iae_mfa_t') }}</h3><p class="intro">{{ $t('iae_mfa_d') }}</p>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_mfa_1') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_mfa_2') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_mfa_3') }}</span></div>
        </div>
        <div class="proto-card reveal"><div class="proto-tag">RADIUS</div><h3>{{ $t('iae_radius_t') }}</h3><p class="intro">{{ $t('iae_radius_d') }}</p>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_radius_1') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_radius_2') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_radius_3') }}</span></div>
          <div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('iae_radius_4') }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 運作原理:三張流程圖(重用平台頁) -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('idpSecEye') }}</span><h2>{{ $t('idpSecH') }}</h2><p>{{ $t('idpSecP') }}</p></div>
      <div class="idp-mode reveal"><h3>{{ $t('idpA_h') }}</h3><p class="idp-d">{{ $t('pf_idp_how') }}</p><svg viewBox="0 0 720 420" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.7rem"><line x1="120" y1="70" x2="120" y2="404" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="50" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="120" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_user') }}</text><line x1="360" y1="70" x2="360" y2="404" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="290" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="360" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_app') }}</text><line x1="600" y1="70" x2="600" y2="404" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="530" y="30" width="140" height="40" rx="12" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.2"/><text x="600" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_idp') }}</text><line x1="120" y1="104" x2="360" y2="104" stroke="#2DA23F" stroke-width="2"/><line x1="120" y1="104" x2="360" y2="104" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 104 l-10 -6 M360 104 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('A1') }}</text><circle cx="120" cy="104" r="8.5" fill="#2DA23F"/><text x="120" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">1</text><line x1="360" y1="150" x2="600" y2="150" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="150" x2="600" y2="150" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M600 150 l-10 -6 M600 150 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="142" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('A2') }}</text><circle cx="360" cy="150" r="8.5" fill="#2DA23F"/><text x="360" y="153" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">2</text><rect x="512" y="184" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="600" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('A3') }}</text><circle cx="512" cy="196" r="8.5" fill="#2DA23F"/><text x="512" y="199" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">3</text><line x1="600" y1="242" x2="360" y2="242" stroke="#2DA23F" stroke-width="2"/><line x1="600" y1="242" x2="360" y2="242" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 242 l10 -6 M360 242 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="234" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('A4') }}</text><circle cx="600" cy="242" r="8.5" fill="#2DA23F"/><text x="600" y="245" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">4</text><line x1="360" y1="288" x2="600" y2="288" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="288" x2="600" y2="288" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M600 288 l-10 -6 M600 288 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="280" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('A5') }}</text><circle cx="360" cy="288" r="8.5" fill="#2DA23F"/><text x="360" y="291" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">5</text><line x1="600" y1="334" x2="360" y2="334" stroke="#2DA23F" stroke-width="2"/><line x1="600" y1="334" x2="360" y2="334" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 334 l10 -6 M360 334 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="326" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('A6') }}</text><circle cx="600" cy="334" r="8.5" fill="#2DA23F"/><text x="600" y="337" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">6</text><line x1="360" y1="380" x2="120" y2="380" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="380" x2="120" y2="380" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M120 380 l10 -6 M120 380 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="372" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('A7') }}</text><circle cx="360" cy="380" r="8.5" fill="#2DA23F"/><text x="360" y="383" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">7</text></svg></div>
      <div class="idp-mode reveal"><h3>{{ $t('idpB_h') }}</h3><p class="idp-d">{{ $t('pf_mfa_oidc') }}</p><svg viewBox="0 0 720 374" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.7rem"><line x1="120" y1="70" x2="120" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="50" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="120" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_user') }}</text><line x1="360" y1="70" x2="360" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="290" y="30" width="140" height="40" rx="12" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.2"/><text x="360" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_sp') }}</text><line x1="600" y1="70" x2="600" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="530" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="600" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_ext') }}</text><line x1="120" y1="104" x2="360" y2="104" stroke="#2DA23F" stroke-width="2"/><line x1="120" y1="104" x2="360" y2="104" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 104 l-10 -6 M360 104 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('B1') }}</text><circle cx="120" cy="104" r="8.5" fill="#2DA23F"/><text x="120" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">1</text><line x1="360" y1="150" x2="600" y2="150" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="150" x2="600" y2="150" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M600 150 l-10 -6 M600 150 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="142" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('B2') }}</text><circle cx="360" cy="150" r="8.5" fill="#2DA23F"/><text x="360" y="153" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">2</text><rect x="512" y="184" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="600" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('B3') }}</text><circle cx="512" cy="196" r="8.5" fill="#2DA23F"/><text x="512" y="199" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">3</text><line x1="600" y1="242" x2="360" y2="242" stroke="#2DA23F" stroke-width="2"/><line x1="600" y1="242" x2="360" y2="242" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 242 l10 -6 M360 242 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="480" y="234" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('B4') }}</text><circle cx="600" cy="242" r="8.5" fill="#2DA23F"/><text x="600" y="245" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">4</text><rect x="272" y="276" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="360" y="292" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('B5') }}</text><circle cx="272" cy="288" r="8.5" fill="#2DA23F"/><text x="272" y="291" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">5</text><line x1="360" y1="334" x2="120" y2="334" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="334" x2="120" y2="334" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M120 334 l10 -6 M120 334 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="326" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('B6') }}</text><circle cx="360" cy="334" r="8.5" fill="#2DA23F"/><text x="360" y="337" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">6</text></svg></div>
      <div class="idp-mode reveal"><h3>{{ $t('idpC_h') }}</h3><p class="idp-d">{{ $t('pf_m2m') }}</p><svg viewBox="0 0 720 374" fill="none" font-family="'Noto Sans TC','Inter',sans-serif" style="display:block;width:100%;height:auto;margin-top:.7rem"><line x1="120" y1="70" x2="120" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="50" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="120" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_svc') }}</text><line x1="360" y1="70" x2="360" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="290" y="30" width="140" height="40" rx="12" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.2"/><text x="360" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_idp') }}</text><line x1="600" y1="70" x2="600" y2="358" stroke="#D7E3DB" stroke-width="1.5" stroke-dasharray="3 4"/><rect x="530" y="30" width="140" height="40" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/><text x="600" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1B8F34">{{ $t('role_api') }}</text><line x1="120" y1="104" x2="360" y2="104" stroke="#2DA23F" stroke-width="2"/><line x1="120" y1="104" x2="360" y2="104" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M360 104 l-10 -6 M360 104 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('C1') }}</text><circle cx="120" cy="104" r="8.5" fill="#2DA23F"/><text x="120" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">1</text><rect x="272" y="138" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="360" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('C2') }}</text><circle cx="272" cy="150" r="8.5" fill="#2DA23F"/><text x="272" y="153" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">2</text><line x1="360" y1="196" x2="120" y2="196" stroke="#2DA23F" stroke-width="2"/><line x1="360" y1="196" x2="120" y2="196" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M120 196 l10 -6 M120 196 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="240" y="188" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('C3') }}</text><circle cx="360" cy="196" r="8.5" fill="#2DA23F"/><text x="360" y="199" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">3</text><line x1="120" y1="242" x2="600" y2="242" stroke="#2DA23F" stroke-width="2"/><line x1="120" y1="242" x2="600" y2="242" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M600 242 l-10 -6 M600 242 l-10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="360" y="234" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('C4') }}</text><circle cx="120" cy="242" r="8.5" fill="#2DA23F"/><text x="120" y="245" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">4</text><rect x="512" y="276" width="176" height="24" rx="10" fill="#F4FAF6" stroke="#CBE8D2" stroke-width="1.4"/><text x="600" y="292" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('C5') }}</text><circle cx="512" cy="288" r="8.5" fill="#2DA23F"/><text x="512" y="291" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">5</text><line x1="600" y1="334" x2="120" y2="334" stroke="#2DA23F" stroke-width="2"/><line x1="600" y1="334" x2="120" y2="334" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line><path d="M120 334 l10 -6 M120 334 l10 6" stroke="#2DA23F" stroke-width="2" fill="none" stroke-linecap="round"/><text x="360" y="326" text-anchor="middle" font-size="11" font-weight="600" fill="#46554E">{{ $t('C6') }}</text><circle cx="600" cy="334" r="8.5" fill="#2DA23F"/><text x="600" y="337" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">6</text></svg></div>
    </div>
  </section>

  <!-- 差異化 -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('iae_diff_eye') }}</span><h2>{{ $t('iae_diff_h') }}</h2></div>
      <div class="iae-diff reveal">
        <div class="diff-card"><h3>{{ $t('iae_diff_1t') }}</h3><p>{{ $t('iae_diff_1d') }}</p></div>
        <div class="diff-card"><h3>{{ $t('iae_diff_2t') }}</h3><p>{{ $t('iae_diff_2d') }}</p></div>
        <div class="diff-card"><h3>{{ $t('iae_diff_3t') }}</h3><p>{{ $t('iae_diff_3d') }}</p></div>
        <div class="diff-card"><h3>{{ $t('iae_diff_4t') }}</h3><p>{{ $t('iae_diff_4d') }}</p></div>
      </div>
    </div>
  </section>

  <!-- 應用場景 -->
  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('iae_uc_eye') }}</span><h2>{{ $t('iae_uc_h') }}</h2></div>
      <div class="iae-uc reveal">
        <div class="uc-card"><h3>{{ $t('iae_uc_1t') }}</h3><p>{{ $t('iae_uc_1d') }}</p></div>
        <div class="uc-card"><h3>{{ $t('iae_uc_2t') }}</h3><p>{{ $t('iae_uc_2d') }}</p></div>
        <div class="uc-card"><h3>{{ $t('iae_uc_3t') }}</h3><p>{{ $t('iae_uc_3d') }}</p></div>
        <div class="uc-card"><h3>{{ $t('iae_uc_4t') }}</h3><p>{{ $t('iae_uc_4d') }}</p></div>
      </div>
    </div>
  </section>

  <!-- 完工狀態 -->
  <section class="band">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">{{ $t('iae_mat_eye') }}</span><h2>{{ $t('iae_mat_h') }}</h2><p>{{ $t('iae_mat_p') }}</p></div>
      <div class="mat-list reveal">
        <div class="mat-row"><span>{{ $t('iae_mat_1') }}</span><span class="badge done">{{ $t('iae_mat_done') }}</span></div>
        <div class="mat-row"><span>{{ $t('iae_mat_2') }}</span><span class="badge done">{{ $t('iae_mat_done') }}</span></div>
        <div class="mat-row"><span>{{ $t('iae_mat_3') }}</span><span class="badge done">{{ $t('iae_mat_done') }}</span></div>
        <div class="mat-row"><span>{{ $t('iae_mat_4') }}</span><span class="badge done">{{ $t('iae_mat_done') }}</span></div>
        <div class="mat-row"><span>{{ $t('iae_mat_5') }}</span><span class="badge done">{{ $t('iae_mat_done') }}</span></div>
        <div class="mat-row"><span>{{ $t('iae_mat_roadmap_t') }}</span><span class="badge road">{{ $t('iae_mat_roadmap_b') }}</span></div>
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
.iae-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.iae-card{background:var(--surface-2);border:1px solid var(--line);border-radius:16px;padding:24px}
.iae-card .rk{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;background:var(--brand-soft);color:var(--brand-ink);font-family:'Inter';font-weight:800;font-size:14px;margin-bottom:12px}
.iae-card h3{font-size:17px;color:var(--brand-ink);margin:0 0 8px}
.iae-card p{font-size:14px;color:var(--ink-2);line-height:1.7;margin:0}

.proto-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.proto-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px}
.proto-tag{display:inline-block;font-family:'Inter';font-weight:800;font-size:12px;letter-spacing:.06em;color:var(--brand-ink);background:var(--brand-soft);border-radius:7px;padding:4px 11px;margin-bottom:12px}
.proto-card h3{font-size:19px;margin:0 0 6px}
.proto-card .intro{font-size:14.5px;color:var(--ink-2);margin:0 0 14px}
.proto-card .pi{display:flex;gap:9px;align-items:flex-start;font-size:13.5px;color:var(--ink-1);line-height:1.6;margin:7px 0}
.proto-card .pi .ic{flex:0 0 auto;width:18px;height:18px;margin-top:1px;color:var(--brand)}

.iae-diff,.iae-uc{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.diff-card,.uc-card{background:var(--surface-2);border:1px solid var(--line);border-radius:14px;padding:22px}
.diff-card h3,.uc-card h3{font-size:16px;color:var(--brand-ink);margin:0 0 7px}
.diff-card p,.uc-card p{font-size:14px;color:var(--ink-2);line-height:1.7;margin:0}

.mat-list{max-width:720px;margin:0 auto;display:flex;flex-direction:column;gap:10px}
.mat-row{display:flex;justify-content:space-between;align-items:center;gap:14px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 18px;font-size:14.5px}
.badge{font-size:12px;font-weight:700;border-radius:20px;padding:4px 13px;white-space:nowrap}
.badge.done{background:var(--brand-soft);color:var(--brand-ink)}
.badge.road{background:#FDF6E9;color:#B5740F}

@media(max-width:860px){
  .iae-roles,.proto-grid,.iae-diff,.iae-uc{grid-template-columns:1fr}
}
</style>
