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
            <span class="eyebrow hs-eye t-amber">{{ $t('k33') }}</span>
            <h1>{{ $t('k34') }}<br><span class="g">{{ $t('k35') }}</span></h1>
            <p>{{ $t('k36') }}</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#diff">{{ $t('k37') }}</a>
              <a class="btn btn-ghost btn-lg" href="#contact">{{ $t('k6') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clip"/></svg>CLIPBOARD DLP · LIVE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="mock">
              <div class="mrow block"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k38') }}<span class="who">→ chatgpt.com</span></div>
              <div class="mrow block"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k39') }}<span class="who">→ claude.ai</span></div>
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--amber)"><use href="#i-alert"/></svg>{{ $t('k40') }}<span class="who">→ gemini</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>{{ $t('k41') }}<span class="who">{{ $t('k42') }}</span></div>
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
      <div class="hero-dots" id="heroDots"><button class="on"></button><button></button><button></button><button></button></div>
      <div class="hero-meta">
        <div><b>50+</b>{{ $t('k59') }}</div><div><b>1,500</b>{{ $t('k60') }}</div><div><b>1/3</b>{{ $t('k61') }}</div>
      </div>
    </div>
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
      </div>
    </div>
  </div>
</section>

<!-- DIFFERENTIATORS bento -->
<section class="band" id="diff">
  <div class="container">
    <div class="shead reveal" style="max-width:820px;margin:0 auto 44px;text-align:center">
      <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
      <h2 style="margin-top:16px">{{ $t('k115') }}</h2>
      <p>{{ $t('k116') }}</p>
    </div>
    <div class="dcar reveal">
      <div class="dcar-vp"><div class="dcar-track" id="dtrack">

        <!-- Slide 1: Shadow AI -->
        <div class="dslide">
          <div class="dillu-wrap">
            <svg class="dillu" viewBox="0 0 560 320" fill="none" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs>
   <filter id="sshad" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
   <path id="passPath" d="M104 150 H472"/>
   <path id="blockPath" d="M104 150 H272 V236"/>
 </defs>
 <circle cx="92" cy="56" r="86" fill="#2DA23F" opacity=".045"/>
 <circle cx="474" cy="276" r="110" fill="#2DA23F" opacity=".05"/>

 <!-- channels -->
 <path d="M104 150 H472" stroke="#E3EAE5" stroke-width="11" stroke-linecap="round"/>
 <path d="M272 150 V232" stroke="#F1D7D5" stroke-width="8" stroke-linecap="round" stroke-dasharray="1 11"/>

 <!-- source endpoint -->
 <g filter="url(#sshad)"><rect x="18" y="120" width="76" height="60" rx="12" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g>
 <rect x="33" y="135" width="42" height="6" rx="3" fill="#9AA9A1"/>
 <rect x="33" y="148" width="48" height="4" rx="2" fill="#D2DAD4"/>
 <rect x="33" y="158" width="32" height="4" rx="2" fill="#D2DAD4"/>
 <text x="19" y="200" font-size="11" font-weight="600" fill="#46554E">{{ $t('k117') }}</text>

 <!-- green packets (pass) -->
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="6" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><rect x="-10" y="-5" width="20" height="3" rx="1.5" fill="#2DA23F" opacity=".55"/><rect x="-10" y="2" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#passPath"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="0s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="6" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><rect x="-10" y="-5" width="20" height="3" rx="1.5" fill="#2DA23F" opacity=".55"/><rect x="-10" y="2" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="1.13s" repeatCount="indefinite"><mpath xlink:href="#passPath"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="1.13s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="6" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><rect x="-10" y="-5" width="20" height="3" rx="1.5" fill="#2DA23F" opacity=".55"/><rect x="-10" y="2" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="2.26s" repeatCount="indefinite"><mpath xlink:href="#passPath"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="2.26s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>

 <!-- red packet (sensitive -> blocked) -->
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="6" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.7"/><path d="M0 -6 V1" stroke="#D2473F" stroke-width="2.4" stroke-linecap="round"/><circle cx="0" cy="5.5" r="1.5" fill="#D2473F"/><animateMotion dur="4s" begin="0.6s" repeatCount="indefinite" keyPoints="0;0.66;0.66;1" keyTimes="0;0.45;0.62;1" calcMode="linear"><mpath xlink:href="#blockPath"/></animateMotion><animate attributeName="opacity" dur="4s" begin="0.6s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.05;0.62;0.93;1"/></g>

 <!-- magnifier -->
 <g transform="translate(272,150)">
   <circle r="28" fill="#ffffff" fill-opacity="0.5" stroke="#1B8F34" stroke-width="3.2"/>
   <line x1="20" y1="20" x2="40" y2="40" stroke="#1B8F34" stroke-width="5.5" stroke-linecap="round"/>
   <circle r="16" fill="none" stroke="#2DA23F" stroke-width="2"><animate attributeName="r" values="13;30" dur="1.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.55;0" dur="1.9s" repeatCount="indefinite"/></circle>
 </g>
 <path d="M272 60 V120" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/><g transform="translate(272,40)"><rect x="-95" y="-20" width="190" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="15.5" font-weight="800" fill="#1B8F34">{{ $t('k118') }}</text></g>

 <!-- pass card -->
 <g filter="url(#sshad)"><rect x="406" y="118" width="146" height="62" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g>
 <g transform="translate(426,149)"><circle r="13" fill="#EAF6EC"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="450" y="144" font-size="12" font-weight="700" fill="#3B4540">{{ $t('k119') }}</text>
 <text x="450" y="163" font-size="10" font-weight="600" fill="#1B8F34">{{ $t('k120') }}</text>

 <!-- blocked bin -->
 <g filter="url(#sshad)"><rect x="206" y="236" width="134" height="52" rx="13" fill="#fff" stroke="#F0D2D0" stroke-width="1.6"/></g>
 <g transform="translate(228,262)"><circle r="13" fill="#FBEEEE"/><path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#D2473F" stroke-width="2.3" stroke-linecap="round"/></g>
 <text x="250" y="258" font-size="12" font-weight="700" fill="#3B4540">{{ $t('k121') }}</text>
 <text x="250" y="277" font-size="10" font-weight="600" fill="#C2362E">{{ $t('k122') }}</text>
</svg>
          </div>
          <div class="dcopy">
            <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
            <h3>{{ $t('k123') }}</h3>
            <p class="lead">{{ $t('k124') }}</p>
            <p class="body">{{ $t('k125') }}</p>
            <div class="metric"><b>94%</b><span>{{ $t('k126') }}<br>{{ $t('k127') }}</span></div>
          </div>
        </div>

        <!-- Slide 2: Agent Passport -->
        <div class="dslide">
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
            <p class="body">{{ $t('k135') }}</p>
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
            <p class="body">{{ $t('k140') }}</p>
            <div class="metric"><b>{{ $t('k141') }}</b><span>{{ $t('k142') }}<br>{{ $t('k143') }}</span></div>
          </div>
        </div>

      </div></div>
      <div class="dcar-foot">
        <div class="dcar-dots" id="ddots"><button class="on"></button><button></button><button></button></div>
        <div class="dcar-nav">
          <button id="dprev" :aria-label="$t('k322')"><svg class="ic" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button>
          <button id="dnext" :aria-label="$t('k323')"><svg class="ic" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- METRICS band -->
<section class="band tight">
  <div class="container reveal">
    <div class="mband">
      <div class="mi"><b>50+</b><span>{{ $t('k247') }}</span></div>
      <div class="mi"><b>99.9%</b><span>{{ $t('k248') }}</span></div>
      <div class="mi"><b>100+</b><span>{{ $t('k249') }}</span></div>
      <div class="mi"><b>{{ $t('k250') }}</b><span>{{ $t('k251') }}</span></div>
    </div>
  </div>
</section>


<!-- VS LEGACY -->
<section class="band tight">
  <div class="container">
    <div class="shead reveal"><span class="eyebrow">Sanctward vs Legacy</span><h2>{{ $t('k301') }}</h2></div>
    <div class="cmp reveal">
      <div class="cmp-row cmp-head"><div>{{ $t('k302') }}</div><div>{{ $t('k303') }}</div><div class="c-s">Sanctward</div></div>
      <div class="cmp-row"><div class="label">{{ $t('k304') }}</div><div class="dim">{{ $t('k305') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k306') }}</div></div>
      <div class="cmp-row"><div class="label">{{ $t('k307') }}</div><div class="dim">{{ $t('k308') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k309') }}</div></div>
      <div class="cmp-row"><div class="label">{{ $t('k310') }}</div><div class="dim">{{ $t('k311') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k312') }}</div></div>
      <div class="cmp-row"><div class="label">{{ $t('k313') }}</div><div class="dim">{{ $t('k314') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k315') }}</div></div>
      <div class="cmp-row"><div class="label">{{ $t('k316') }}</div><div class="dim">{{ $t('k317') }}</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k318') }}</div></div>
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


  // differentiators carousel
  const dtrack = document.getElementById('dtrack')
  const ddots = [...document.querySelectorAll('#ddots button')]
  let di = 0; const DN = ddots.length
  const dgo = (i) => { di = (i + DN) % DN; dtrack.style.transform = 'translateX(-' + (di * 100) + '%)'; ddots.forEach((d, k) => d.classList.toggle('on', k === di)) }
  const dauto = () => { dtimer = setInterval(() => dgo(di + 1), 7000) }
  ddots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(dtimer); dgo(i); dauto() }))
  document.getElementById('dprev').addEventListener('click', () => { clearInterval(dtimer); dgo(di - 1); dauto() })
  document.getElementById('dnext').addEventListener('click', () => { clearInterval(dtimer); dgo(di + 1); dauto() })
  dauto()
  const diffEl = document.getElementById('diff')
  diffEl.addEventListener('mouseenter', () => clearInterval(dtimer))
  diffEl.addEventListener('mouseleave', dauto)

  // trust ring count-up
  const ring = document.getElementById('ring'), num = document.getElementById('scoreNum')
  let st = false
  new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && !st) { st = true; let v = 0; const t = setInterval(() => { v += 2; if (v >= 92) { v = 92; clearInterval(t) } ring.style.setProperty('--v', v); num.innerHTML = v + '<small>/100</small>' }, 18) }
  }), { threshold: 0.5 }).observe(ring)
})
onBeforeUnmount(() => { clearInterval(htimer); clearInterval(dtimer); cleanups.forEach((f) => f()) })
</script>
