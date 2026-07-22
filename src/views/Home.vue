<template>
<span id="top"></span>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-vp">
      <div class="hero-track" id="track">

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye">UTP-Ai · Unified Trust Platform driven by AI</span>
            <h1>{{ $t('k22') }}<br><span class="g">{{ $t('k23') }}</span></h1>
            <p>{{ $t('k24') }}</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#platform">{{ $t('k25') }}</a>
              <a class="btn btn-ghost btn-lg" href="#contact">{{ $t('k6') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg>ZTA · TRUST SCORE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="score-row">
              <div class="ring" id="ring"><b id="scoreNum">92<small>/100</small></b></div>
              <div class="score-meta"><b>{{ $t('k26') }}</b><span>{{ $t('k27') }}</span><span class="tagk"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k28') }}</span></div>
            </div>
            <div class="sigs">
              <div class="sig"><span>{{ $t('k29') }}</span><div class="bar"><i style="width:94%"></i></div></div>
              <div class="sig"><span>{{ $t('k30') }}</span><div class="bar"><i style="width:88%"></i></div></div>
              <div class="sig"><span>{{ $t('k31') }}</span><div class="bar"><i style="width:96%"></i></div></div>
            </div>
            <div class="note"><svg class="ic" viewBox="0 0 24 24"><use href="#i-alert"/></svg><div><b>ANOMALY DETECTED</b> {{ $t('k32') }}</div></div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye t-amber">{{ $t('hp_msp_eye') }}</span>
            <h1>{{ $t('hp_msp_h1a') }}<br><span class="g">{{ $t('hp_msp_h1b') }}</span></h1>
            <p>{{ $t('hp_msp_p') }}</p>
            <div class="hs-cta">
              <router-link class="btn btn-primary btn-lg" to="/msp">{{ $t('hp_msp_cta') }}</router-link>
              <a class="btn btn-ghost btn-lg" href="#contact">{{ $t('k6') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-users"/></svg>MSP · MULTI-TENANT</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="mock">
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>Tenant · ACME Corp<span class="who">{{ $t('hp_msp_v1') }}</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>Tenant · Globex<span class="who">{{ $t('hp_msp_v2') }}</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>Tenant · Initech<span class="who">{{ $t('hp_msp_v3') }}</span></div>
            </div>
            <div class="note" style="border-color:var(--brand-soft2);background:var(--brand-soft);color:var(--brand-ink)"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-shield"/></svg><div><b>{{ $t('hp_msp_note_b') }}</b>{{ $t('hp_msp_note') }}</div></div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye">{{ $t('k33') }}</span>
            <h1>{{ $t('k34') }}<br><span class="g">{{ $t('k35') }}</span></h1>
            <p>{{ $t('k36') }}</p>
            <div class="hs-cta">
              <router-link class="btn btn-primary btn-lg" to="/platform/iae">{{ $t('k37') }}</router-link>
              <a class="btn btn-ghost btn-lg" href="#contact">{{ $t('k6') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg>IAE · IDENTITY CORE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="mock">
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>{{ $t('k38') }}<span class="who">IdP · Relay · M2M</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>{{ $t('k39') }}<span class="who">IdP · SP · SLO</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>{{ $t('k40') }}<span class="who">Passkey · TOTP · OTP</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>{{ $t('k41') }}<span class="who">CoA · RadSec</span></div>
            </div>
            <div class="note" style="border-color:var(--brand-soft2);background:var(--brand-soft);color:var(--brand-ink)"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-shield"/></svg><div><b>{{ $t('k43') }}</b>{{ $t('k44') }}</div></div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye t-blue">Zero Trust · ZTA</span>
            <h1>{{ $t('k45') }}<br><span class="g">{{ $t('k46') }}</span></h1>
            <p>{{ $t('k47') }}</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#platform">{{ $t('k48') }}</a>
              <a class="btn btn-ghost btn-lg" href="#contact">{{ $t('k6') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg>BEHAVIORAL BASELINE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="score-row">
              <div class="ring" style="--v:48;background:conic-gradient(var(--danger) 48%,rgba(13,22,17,.07) 0)"><b style="color:var(--danger)">48<small>/100</small></b></div>
              <div class="score-meta"><b>{{ $t('k49') }}</b><span>Tokyo/Shibuya · 03:14</span><span class="tagk" style="background:rgba(210,71,63,.1);color:#A23129"><svg class="ic" viewBox="0 0 24 24"><use href="#i-alert"/></svg>{{ $t('k50') }}</span></div>
            </div>
            <div class="sigs">
              <div class="sig"><span>{{ $t('k51') }}</span><div class="bar"><i style="width:22%;background:var(--danger)"></i></div></div>
              <div class="sig"><span>{{ $t('k52') }}</span><div class="bar"><i style="width:30%;background:var(--amber)"></i></div></div>
              <div class="sig"><span>{{ $t('k53') }}</span><div class="bar"><i style="width:80%"></i></div></div>
            </div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye t-violet">Privileged Access · PAM</span>
            <h1>{{ $t('k54') }}<br><span class="g">{{ $t('k55') }}</span></h1>
            <p>{{ $t('k56') }}</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#platform">{{ $t('k57') }}</a>
              <a class="btn btn-ghost btn-lg" href="#contact">{{ $t('k6') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>{{ $t('k58') }}</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="searchbar"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>DROP TABLE customers<span class="cnt">3 results · 0.18s</span></div>
            <div class="reslist">
              <div class="res"><b>sess_01HF…X9</b> · srv-db-01 · contractor.chen<span>2026-04-15 14:32 · psql</span></div>
              <div class="res"><b>sess_01HG…AA</b> · srv-db-02 · alice.chen<span>2026-05-02 09:11 · psql</span></div>
              <div class="res"><b>sess_01HJ…QM</b> · srv-app-prod · ops.lee<span>2026-05-19 22:48 · runbook</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="hero-foot">
      <div class="hero-dots" id="heroDots"><button class="on"></button><button></button><button></button><button></button><button></button></div>
      <div class="hero-meta">
        <div><b>50+</b>{{ $t('k59') }}</div><div><b>1,500</b>{{ $t('k60') }}</div><div><b>1/3</b>{{ $t('k61') }}</div>
      </div>
    </div>
  </div>
</section>

<!-- UTP-Ai -->
<section class="utp">
  <div class="utp-inner reveal">
    <span class="utp-label">UTP-Ai</span>
    <p class="utp-expand">Unified Trust Platform driven by AI</p>
    <h2 class="utp-h">{{ $t('utpHeading') }}</h2>
    <p class="utp-intro">{{ $t('utpIntro') }}</p>
    <div class="utp-grid">
      <div class="utp-col"><span class="utp-c-k">Unified</span><h3>{{ $t('utpU_h') }}</h3><p>{{ $t('utpU_p') }}</p></div>
      <div class="utp-col"><span class="utp-c-k">Trust</span><h3>{{ $t('utpT_h') }}</h3><p>{{ $t('utpT_p') }}</p></div>
      <div class="utp-col accent"><span class="utp-c-k">driven by AI</span><h3>{{ $t('utpAi_h') }}</h3><p>{{ $t('utpAi_p') }}</p></div>
    </div>
    <p class="utp-spirit"><b>Driven by AI</b>{{ $t('utpSpirit') }}</p>
  </div>
</section>

<!-- TRUST STRIP -->
<section class="trust">
  <div class="container trust-in">
    <span class="t-l">{{ $t('k62') }}</span>
    <div class="chips">
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>ISO 27001</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>SOC 2 Type II</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k63') }}</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k64') }}</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k65') }}</span>
    </div>
  </div>
</section>

<!-- THESIS stepper -->
<section class="band tight">
  <div class="container">
    <div class="shead reveal" style="max-width:760px;margin:0 auto 40px;text-align:center">
      <span class="eyebrow">{{ $t('k66') }}</span>
      <h2>{{ $t('k67') }}</h2>
    </div>
    <div class="layers reveal">
      <div class="layer l1">
        <div class="lic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></div>
        <div class="lbody">
          <div class="lt"><span class="lk">LAYER 01</span><h3>{{ $t('k68') }}</h3><span class="en">Identity &amp; Access</span></div>
          <p>{{ $t('k69') }}</p>
        </div>
        <span class="lconn"><svg class="larrow" viewBox="0 0 28 84"><defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#62CE7B"/><stop offset="1" stop-color="#2DA23F"/></linearGradient></defs><rect x="2" y="4" width="24" height="76" rx="12" fill="url(#cg1)"/><g class="chev"><path d="M8 37l6 6 6-6M8 49l6 6 6-6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>
      </div>
      <div class="layer l2">
        <div class="lic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg></div>
        <div class="lbody">
          <div class="lt"><span class="lk">LAYER 02</span><h3>{{ $t('k70') }}</h3><span class="en">Visibility &amp; Audit</span></div>
          <p>{{ $t('k71') }}</p>
        </div>
        <span class="lconn"><svg class="larrow" viewBox="0 0 28 84"><defs><linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2DA23F"/><stop offset="1" stop-color="#15692A"/></linearGradient></defs><rect x="2" y="4" width="24" height="76" rx="12" fill="url(#cg2)"/><g class="chev"><path d="M8 37l6 6 6-6M8 49l6 6 6-6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>
      </div>
      <div class="layer l3">
        <div class="lic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></div>
        <div class="lbody">
          <div class="lt"><span class="lk">LAYER 03</span><h3>{{ $t('k72') }}</h3><span class="en">Active Defense</span></div>
          <p>{{ $t('k73') }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PLATFORM tabbed explorer -->
<section class="band" id="platform">
  <div class="container">
    <div class="shead reveal" style="max-width:780px;margin:0 auto 44px;text-align:center">
      <h2>{{ $t('k74') }}</h2>
      <p>{{ $t('k75') }}</p>
    </div>
    <div class="plat reveal">
      <div class="tabs" id="ptabs">
        <button class="tab on" data-p="0"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></span><div><span class="k">IAM / SSO</span><h4>{{ $t('k76') }}</h4><p>{{ $t('k77') }}</p></div></button>
        <button class="tab" data-p="1"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg></span><div><span class="k">PAM</span><h4>{{ $t('k78') }}</h4><p>{{ $t('k79') }}</p></div></button>
        <button class="tab" data-p="2"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg></span><div><span class="k">ZTA</span><h4>{{ $t('k80') }}</h4><p>{{ $t('k81') }}</p></div></button>
        <button class="tab" data-p="3"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></span><div><span class="k">Endpoint</span><h4>{{ $t('k82') }}</h4><p>{{ $t('k83') }}</p></div></button>
        <button class="tab" data-p="4"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></span><div><span class="k">Compliance</span><h4>{{ $t('k84') }}</h4><p>{{ $t('k85') }}</p></div></button>
        <button class="tab" data-p="5"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></span><div><span class="k">SanctSeal</span><h4>{{ $t('hp_ss_h4') }}</h4><p>{{ $t('hp_ss_p') }}</p></div></button>
      </div>
      <div class="panel" id="ppanel">
        <div class="pane on">
          <div class="pcopy">
            <h3>{{ $t('k86') }}</h3>
            <p>{{ $t('k87') }}</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k88') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k89') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k90') }}</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg>LAUNCHPAD</span></div>
            <div class="applist">
              <div class="app">SAP</div><div class="app">Git</div><div class="app">QNAP</div><div class="app">OWA</div>
              <div class="app muted">Zabbix</div><div class="app muted">pfSense</div><div class="app muted">DSM</div><div class="app muted">+18</div>
            </div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>{{ $t('k91') }}</h3>
            <p>{{ $t('k92') }}</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k93') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k94') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k95') }}</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>{{ $t('k96') }}</span></div>
            <div class="searchbar"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>sudo rm<span class="cnt">2 results · 0.2s</span></div>
            <div class="reslist"><div class="res"><b>sess_01HK…7P</b> · srv-app-prod<span>ops.lee · 22:48</span></div><div class="res"><b>sess_01HM…2C</b> · srv-db-02<span>contractor.chen · 14:32</span></div></div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>{{ $t('k97') }}</h3>
            <p>{{ $t('k98') }}</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k99') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k100') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k101') }}</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg>TRUST SCORE</span></div>
            <div class="score-row"><div class="ring" style="--v:92"><b>92<small>/100</small></b></div><div class="score-meta"><b>{{ $t('k102') }}</b><span>{{ $t('k103') }}</span></div></div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>{{ $t('k104') }}</h3>
            <p>{{ $t('k105') }}</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k106') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k107') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k108') }}</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg>FLEET</span></div>
            <div class="mock">
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>acme-tpe-014 · Win11 22H2<span class="who">healthy</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>acme-mac-pdx · macOS 14.4<span class="who">healthy</span></div>
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--amber)"><use href="#i-alert"/></svg>{{ $t('k109') }}<span class="who">review</span></div>
            </div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>{{ $t('k110') }}</h3>
            <p>{{ $t('k111') }}</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k112') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k113') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k114') }}</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg>AUDIT LOG</span></div>
            <div class="mock">
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--ink-3)"><use href="#i-doc"/></svg>USER_DISABLED · admin.lin<span class="who">delta ✓</span></div>
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--ink-3)"><use href="#i-doc"/></svg>SESSION_RECORDED · srv-db-01<span class="who">WORM</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-shield"/></svg>Merkle root verified<span class="who">#1045</span></div>
            </div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>{{ $t('hp_ss_h3') }}</h3>
            <p>{{ $t('hp_ss_pp') }}</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('hp_ss_1') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('hp_ss_2') }}</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('hp_ss_3') }}</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg>SANCTSEAL · CERT CENTER</span></div>
            <div class="mock">
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>Tenant Root CA · RSA-4096<span class="who">valid · 20y</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>Agent mTLS · 1,482 certs<span class="who">auto-renew</span></div>
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--amber)"><use href="#i-alert"/></svg>*.app.acme · Let's Encrypt<span class="who">renews 12d</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- DIFFERENTIATORS / 特色 bento -->
<section class="band" id="diff">
  <div class="container">
    <div class="shead reveal" style="max-width:820px;margin:0 auto 40px;text-align:center">
      <h2>{{ $t('k115') }}</h2>
      <p>{{ $t('k116') }}</p>
    </div>
    <div class="sp-grid3 reveal" style="margin-bottom:34px">
      <div class="sp-card"><h3>{{ $t('hp_pf1_t') }}</h3><p>{{ $t('hp_pf1_d') }}</p><p style="margin-top:13px"><router-link class="btn btn-ghost" to="/platform/hsm">{{ $t('learn_more') }} →</router-link></p></div>
      <div class="sp-card"><h3>{{ $t('hp_pf2_t') }}</h3><p>{{ $t('hp_pf2_d') }}</p><p style="margin-top:13px"><router-link class="btn btn-ghost" to="/msp">{{ $t('learn_more') }} →</router-link></p></div>
      <div class="sp-card"><h3>{{ $t('hp_pf3_t') }}</h3><p>{{ $t('hp_pf3_d') }}</p><p style="margin-top:13px"><router-link class="btn btn-ghost" to="/msp">{{ $t('learn_more') }} →</router-link></p></div>
    </div>
    <div class="dstack reveal">

        <!-- Slide 1: IAE -->
        <div class="dslide">
          <div class="dillu-wrap">
            <svg class="dillu" viewBox="0 0 560 320" fill="none" aria-hidden="true" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="iaeShad" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter></defs>
 <circle cx="92" cy="56" r="86" fill="#2DA23F" opacity=".045"/>
 <circle cx="474" cy="276" r="110" fill="#2DA23F" opacity=".05"/>

 <!-- connectors: clients -> core -->
 <line x1="98" y1="86" x2="236" y2="150" stroke="#2DA23F" stroke-width="2"/><line x1="98" y1="86" x2="236" y2="150" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>
 <line x1="98" y1="160" x2="236" y2="160" stroke="#2DA23F" stroke-width="2"/><line x1="98" y1="160" x2="236" y2="160" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>
 <line x1="98" y1="234" x2="236" y2="170" stroke="#2DA23F" stroke-width="2"/><line x1="98" y1="234" x2="236" y2="170" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>

 <!-- connectors: core -> protocols -->
 <line x1="316" y1="150" x2="410" y2="87" stroke="#2DA23F" stroke-width="2"/><line x1="316" y1="150" x2="410" y2="87" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>
 <line x1="316" y1="158" x2="410" y2="133" stroke="#2DA23F" stroke-width="2"/><line x1="316" y1="158" x2="410" y2="133" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>
 <line x1="316" y1="166" x2="410" y2="179" stroke="#2DA23F" stroke-width="2"/><line x1="316" y1="166" x2="410" y2="179" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>
 <line x1="316" y1="174" x2="410" y2="225" stroke="#2DA23F" stroke-width="2"/><line x1="316" y1="174" x2="410" y2="225" stroke="#7FE8A6" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 12"><animate attributeName="stroke-dashoffset" values="12;0" dur="1.1s" repeatCount="indefinite"/></line>

 <!-- client sources -->
 <g filter="url(#iaeShad)"><rect x="14" y="66" width="84" height="40" rx="11" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g><rect x="28" y="80" width="40" height="5" rx="2.5" fill="#9AA9A1"/><rect x="28" y="91" width="30" height="4" rx="2" fill="#D2DAD4"/>
 <g filter="url(#iaeShad)"><rect x="14" y="140" width="84" height="40" rx="11" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g><rect x="28" y="154" width="40" height="5" rx="2.5" fill="#9AA9A1"/><rect x="28" y="165" width="30" height="4" rx="2" fill="#D2DAD4"/>
 <g filter="url(#iaeShad)"><rect x="14" y="214" width="84" height="40" rx="11" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g><rect x="28" y="228" width="40" height="5" rx="2.5" fill="#9AA9A1"/><rect x="28" y="239" width="30" height="4" rx="2" fill="#D2DAD4"/>
 <text x="16" y="278" font-size="10.5" font-weight="600" fill="#46554E">{{ $t('k117') }}</text>

 <!-- top badge -->
 <path d="M276 64 V120" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/>
 <g transform="translate(276,40)"><rect x="-104" y="-20" width="208" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="14" font-weight="800" fill="#1B8F34">{{ $t('k119') }}</text></g>

 <!-- identity core -->
 <g filter="url(#iaeShad)"><rect x="236" y="120" width="80" height="80" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/></g>
 <circle cx="276" cy="160" r="44" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="44;58" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <path d="M276 134 l16 6 v11 c0 10-6 16-16 20 -10-4-16-10-16-20 v-11 z" fill="#fff" stroke="#1B8F34" stroke-width="2"/>
 <path d="M269 158 l5 5 10-11" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="276" y="222" text-anchor="middle" font-size="11" font-weight="800" fill="#1B8F34">{{ $t('k118') }}</text>

 <!-- protocol outputs -->
 <g filter="url(#iaeShad)"><rect x="410" y="70" width="130" height="34" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(426,87)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="444" y="91" font-size="11.5" font-weight="700" fill="#3B4540">OIDC</text>
 <g filter="url(#iaeShad)"><rect x="410" y="116" width="130" height="34" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(426,133)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="444" y="137" font-size="11.5" font-weight="700" fill="#3B4540">SAML</text>
 <g filter="url(#iaeShad)"><rect x="410" y="162" width="130" height="34" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(426,179)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="444" y="183" font-size="11.5" font-weight="700" fill="#3B4540">MFA</text>
 <g filter="url(#iaeShad)"><rect x="410" y="208" width="130" height="34" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(426,225)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="444" y="229" font-size="11.5" font-weight="700" fill="#3B4540">RADIUS</text>
</svg>
          </div>
          <div class="dcopy">
            <h3>{{ $t('k123') }}</h3>
            <p class="lead">{{ $t('k124') }}</p>
            <p class="body">{{ $t('k125') }}</p><div class="edu"><div class="edu-item"><span class="edu-h">{{ $t('eduWhy') }}</span><p>{{ $t('d1why') }}</p></div><div class="edu-item"><span class="edu-h">{{ $t('eduHow') }}</span><p>{{ $t('d1how') }}</p></div></div>
          </div>
        </div>

        <!-- Slide 2: Agent Passport -->
        <div class="dslide rev">
          <div class="dillu-wrap">
            <svg class="dillu" viewBox="0 0 560 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs>
   <filter id="sshad2" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
   <path id="passPath2" d="M104 150 H472"/>
   <path id="blockPath2" d="M104 150 H272 V236"/>
 </defs>
 <circle cx="92" cy="56" r="86" fill="#2DA23F" opacity=".045"/>
 <circle cx="474" cy="276" r="110" fill="#2DA23F" opacity=".05"/>
 <path d="M104 150 H472" stroke="#E3EAE5" stroke-width="11" stroke-linecap="round"/>
 <path d="M272 150 V232" stroke="#F1D7D5" stroke-width="8" stroke-linecap="round" stroke-dasharray="1 11"/>
 <g filter="url(#sshad2)"><rect x="18" y="120" width="76" height="60" rx="12" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g>
 <circle cx="40" cy="143" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/>
 <rect x="55" y="139" width="28" height="5" rx="2.5" fill="#9AA9A1"/>
 <rect x="33" y="160" width="48" height="4" rx="2" fill="#D2DAD4"/>
 <text x="19" y="200" font-size="11" font-weight="600" fill="#46554E">{{ $t('k128') }}</text>
 <path d="M272 60 V118" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/>
 <g transform="translate(272,40)"><rect x="-112" y="-20" width="224" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="14.5" font-weight="800" fill="#1B8F34">{{ $t('k129') }}</text></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><circle cx="-8" cy="0" r="5" fill="#fff" stroke="#2DA23F" stroke-width="1.4"/><rect x="0" y="-4" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><rect x="0" y="3" width="9" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#passPath2"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="0s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><circle cx="-8" cy="0" r="5" fill="#fff" stroke="#2DA23F" stroke-width="1.4"/><rect x="0" y="-4" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><rect x="0" y="3" width="9" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="1.13s" repeatCount="indefinite"><mpath xlink:href="#passPath2"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="1.13s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><circle cx="-8" cy="0" r="5" fill="#fff" stroke="#2DA23F" stroke-width="1.4"/><rect x="0" y="-4" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><rect x="0" y="3" width="9" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="2.26s" repeatCount="indefinite"><mpath xlink:href="#passPath2"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="2.26s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.7"/><text x="-8" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#D2473F">?</text><rect x="0" y="-4" width="12" height="3" rx="1.5" fill="#D2473F" opacity=".4"/><rect x="0" y="3" width="8" height="3" rx="1.5" fill="#D2473F" opacity=".3"/><animateMotion dur="4s" begin="0.6s" repeatCount="indefinite" keyPoints="0;0.66;0.66;1" keyTimes="0;0.45;0.62;1" calcMode="linear"><mpath xlink:href="#blockPath2"/></animateMotion><animate attributeName="opacity" dur="4s" begin="0.6s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.05;0.62;0.93;1"/></g>
 <g class="hub">
   <rect x="244" y="122" width="56" height="56" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/>
   <path d="M272 134 l16 6 v11 c0 10-6 16-16 20 -10-4-16-10-16-20 v-11 z" fill="#fff" stroke="#1B8F34" stroke-width="2"/>
   <path d="M265 152 l5 5 10-11" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 </g>
 <g filter="url(#sshad2)"><rect x="406" y="118" width="146" height="62" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g>
 <g transform="translate(426,149)"><circle r="13" fill="#EAF6EC"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="450" y="144" font-size="12" font-weight="700" fill="#3B4540">{{ $t('k130') }}</text>
 <text x="450" y="163" font-size="10" font-weight="600" fill="#1B8F34">{{ $t('k131') }}</text>
 <g filter="url(#sshad2)"><rect x="206" y="236" width="134" height="52" rx="13" fill="#fff" stroke="#F0D2D0" stroke-width="1.6"/></g>
 <g transform="translate(228,262)"><circle r="13" fill="#FBEEEE"/><path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#D2473F" stroke-width="2.3" stroke-linecap="round"/></g>
 <text x="250" y="258" font-size="12" font-weight="700" fill="#3B4540">{{ $t('k132') }}</text>
 <text x="250" y="277" font-size="10" font-weight="600" fill="#C2362E">{{ $t('k133') }}</text>
</svg>
          </div>
          <div class="dcopy">
            <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
            <h3>AI Agent Passport</h3>
            <p class="lead">{{ $t('k134') }}</p>
            <p class="body">{{ $t('k135') }}</p><div class="edu"><div class="edu-item"><span class="edu-h">{{ $t('eduWhy') }}</span><p>{{ $t('d2why') }}</p></div><div class="edu-item"><span class="edu-h">{{ $t('eduHow') }}</span><p>{{ $t('d2how') }}</p></div></div>
            <div class="metric"><b>47→0</b><span>{{ $t('k136') }}<br>{{ $t('k137') }}</span></div>
          </div>
        </div>

        <!-- Slide 3: Session Intelligence -->
        <div class="dslide">
          <div class="dillu-wrap">
            <svg class="dillu" viewBox="0 0 560 320" fill="none" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="sshad3" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter></defs>
 <circle cx="92" cy="58" r="86" fill="#2DA23F" opacity=".045"/>
 <circle cx="470" cy="278" r="110" fill="#2DA23F" opacity=".05"/>
 <g filter="url(#sshad3)"><rect x="60" y="36" width="440" height="48" rx="13" fill="#fff" stroke="#D9E2DC" stroke-width="1.5"/></g>
 <circle cx="88" cy="60" r="8.5" stroke="#2DA23F" stroke-width="2"/><path d="M94.5 66.5 L102 74" stroke="#2DA23F" stroke-width="2" stroke-linecap="round"/>
 <text x="116" y="65" font-size="12.5" fill="#46554E">DROP TABLE customers</text>
 <text x="404" y="64" font-size="10" font-weight="700" fill="#1B8F34">0.18s</text>
 <g transform="translate(76,118)"><rect width="60" height="78" rx="9" fill="#F7FAF8" stroke="#DCE5DF" stroke-width="1.4"/><rect x="12" y="16" width="36" height="5" rx="2.5" fill="#C8D2CC"/><rect x="12" y="28" width="26" height="4" rx="2" fill="#D7DFD9"/><rect x="12" y="50" width="36" height="14" rx="4" fill="#EEF3F0"/></g>
 <g transform="translate(144,118)"><rect width="60" height="78" rx="9" fill="#F7FAF8" stroke="#DCE5DF" stroke-width="1.4"/><rect x="12" y="16" width="36" height="5" rx="2.5" fill="#C8D2CC"/><rect x="12" y="28" width="26" height="4" rx="2" fill="#D7DFD9"/><rect x="12" y="50" width="36" height="14" rx="4" fill="#EEF3F0"/></g>
 <g transform="translate(212,118)"><rect width="60" height="78" rx="9" fill="#F7FAF8" stroke="#DCE5DF" stroke-width="1.4"/><rect x="12" y="16" width="36" height="5" rx="2.5" fill="#C8D2CC"/><rect x="12" y="28" width="26" height="4" rx="2" fill="#D7DFD9"/><rect x="12" y="50" width="36" height="14" rx="4" fill="#EEF3F0"/></g>
 <g transform="translate(348,118)"><rect width="60" height="78" rx="9" fill="#F7FAF8" stroke="#DCE5DF" stroke-width="1.4"/><rect x="12" y="16" width="36" height="5" rx="2.5" fill="#C8D2CC"/><rect x="12" y="28" width="26" height="4" rx="2" fill="#D7DFD9"/><rect x="12" y="50" width="36" height="14" rx="4" fill="#EEF3F0"/></g>
 <g transform="translate(416,118)"><rect width="60" height="78" rx="9" fill="#F7FAF8" stroke="#DCE5DF" stroke-width="1.4"/><rect x="12" y="16" width="36" height="5" rx="2.5" fill="#C8D2CC"/><rect x="12" y="28" width="26" height="4" rx="2" fill="#D7DFD9"/><rect x="12" y="50" width="36" height="14" rx="4" fill="#EEF3F0"/></g>
 <g transform="translate(280,112)"><rect width="60" height="86" rx="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.5"/><rect x="12" y="18" width="36" height="5" rx="2.5" fill="#2DA23F" opacity=".6"/><rect x="12" y="30" width="26" height="4" rx="2" fill="#2DA23F" opacity=".4"/><g transform="translate(30,62)"><circle r="12" fill="#fff" stroke="#2DA23F" stroke-width="1.6"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><animate attributeName="opacity" values="1;0.82;1" dur="1.6s" repeatCount="indefinite"/></g>
 <rect x="56" y="112" width="40" height="88" rx="11" fill="#2DA23F" opacity="0.12"><animateTransform attributeName="transform" type="translate" values="0,0;392,0;0,0" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite"/></rect>
 <path d="M310 198 V230" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/>
 <g filter="url(#sshad3)"><rect x="150" y="230" width="262" height="56" rx="13" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g>
 <g transform="translate(176,258)"><circle r="13" fill="#EAF6EC"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="200" y="253" font-size="11.5" font-weight="700" fill="#3B4540">sess_01HF…X9 · srv-db-01</text>
 <text x="200" y="271" font-size="10" font-weight="600" fill="#1B8F34">{{ $t('k138') }}</text>
</svg>
          </div>
          <div class="dcopy">
            <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
            <h3>Session Intelligence</h3>
            <p class="lead">{{ $t('k139') }}</p>
            <p class="body">{{ $t('k140') }}</p><div class="edu"><div class="edu-item"><span class="edu-h">{{ $t('eduWhy') }}</span><p>{{ $t('d3why') }}</p></div><div class="edu-item"><span class="edu-h">{{ $t('eduHow') }}</span><p>{{ $t('d3how') }}</p></div></div>
            <div class="metric"><b>{{ $t('k141') }}</b><span>{{ $t('k142') }}<br>{{ $t('k143') }}</span></div>
          </div>
        </div>

    </div>
  </div>
</section>



<!-- METRICS band -->
<section class="band tight">
  <div class="container reveal">
    <div class="mband">
      <div class="mi"><b>100+</b><span>{{ $t('k249') }}</span></div>
      <div class="mi"><b>22</b><span>{{ $t('hp_mt_tpl') }}</span></div>
      <div class="mi"><b>33</b><span>{{ $t('hp_mt_dlp') }}</span></div>
      <div class="mi"><b>{{ $t('k250') }}</b><span>{{ $t('k251') }}</span></div>
    </div>
  </div>
</section>


<!-- CAPABILITY BREADTH -->
<section class="band tight">
  <div class="container">
    <div class="shead reveal" style="max-width:780px;margin:0 auto 40px;text-align:center"><span class="eyebrow">{{ $t('hp_adv_eye') }}</span><h2>{{ $t('hp_adv_h') }}</h2><p>{{ $t('hp_adv_p') }}</p></div>
    <div class="feat-grid reveal">
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg><span>{{ $t('hp_f_sso') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg><span>{{ $t('hp_f_pam') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg><span>{{ $t('hp_f_zta') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clip"/></svg><span>{{ $t('hp_f_dlp') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg><span>{{ $t('hp_f_iae') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg><span>{{ $t('hp_f_seal') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg><span>{{ $t('hp_f_cmp') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg><span>{{ $t('hp_f_rpt') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-users"/></svg><span>{{ $t('hp_f_msp') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg><span>{{ $t('hp_f_link') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg><span>{{ $t('hp_f_pact') }}</span></div>
      <div class="feat"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg><span>{{ $t('hp_f_ai') }}</span></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta" id="contact">
  <div class="container">
    <div class="cta-in reveal">
      <h2>{{ $t('k319') }}</h2>
      <p>{{ $t('k320') }}</p>
      <div class="hs-cta">
        <router-link class="btn btn-primary btn-lg" to="/contact">{{ $t('k6') }}</router-link>
        <a class="btn btn-ghost btn-lg" href="#">{{ $t('k321') }}</a>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
let htimer = 0, dtimer = 0
const cleanups = []
onMounted(() => {
  // hero carousel
  const track = document.getElementById('track')
  const hdots = [...document.querySelectorAll('#heroDots button')]
  let hi = 0; const HN = hdots.length
  const hgo = (i) => { hi = (i + HN) % HN; track.style.transform = 'translateX(-' + (hi * 100) + '%)'; hdots.forEach((d, k) => d.classList.toggle('on', k === hi)) }
  const hauto = () => { htimer = setInterval(() => hgo(hi + 1), 6000) }
  hdots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(htimer); hgo(i); hauto() }))
  hauto()
  const heroEl = document.querySelector('.hero')
  heroEl.addEventListener('mouseenter', () => clearInterval(htimer))
  heroEl.addEventListener('mouseleave', hauto)

  // platform tabs (auto-rotate)
  const ptabs = [...document.querySelectorAll('#ptabs .tab')]
  const panes = [...document.querySelectorAll('#ppanel .pane')]
  let pi = 0, ptimer = 0
  const setP = (i) => { pi = (i + ptabs.length) % ptabs.length; ptabs.forEach((x, k) => x.classList.toggle('on', k === pi)); panes.forEach((x, k) => x.classList.toggle('on', k === pi)) }
  const pauto = () => { ptimer = setInterval(() => setP(pi + 1), 3800) }
  ptabs.forEach((t) => t.addEventListener('click', () => { clearInterval(ptimer); setP(+t.dataset.p); pauto() }))
  pauto()
  const platEl = document.getElementById('platform')
  platEl.addEventListener('mouseenter', () => clearInterval(ptimer))
  platEl.addEventListener('mouseleave', pauto)
  cleanups.push(() => clearInterval(ptimer))


  // trust ring count-up
  const ring = document.getElementById('ring'), num = document.getElementById('scoreNum')
  let st = false
  new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && !st) { st = true; let v = 0; const t = setInterval(() => { v += 2; if (v >= 92) { v = 92; clearInterval(t) } ring.style.setProperty('--v', v); num.innerHTML = v + '<small>/100</small>' }, 18) }
  }), { threshold: 0.5 }).observe(ring)
})
onBeforeUnmount(() => { clearInterval(htimer); clearInterval(dtimer); cleanups.forEach((f) => f()) })
</script>
