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
 <text x="19" y="200" font-size="12.5" font-weight="600" fill="#46554E">{{ $t('k117') }}</text>

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
 <path d="M272 60 V120" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/><g transform="translate(272,40)"><rect x="-95" y="-20" width="190" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="17" font-weight="800" fill="#1B8F34">{{ $t('k118') }}</text></g>

 <!-- pass card -->
 <g filter="url(#sshad)"><rect x="406" y="118" width="146" height="62" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g>
 <g transform="translate(426,149)"><circle r="13" fill="#EAF6EC"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="450" y="144" font-size="13.5" font-weight="700" fill="#3B4540">{{ $t('k119') }}</text>
 <text x="450" y="163" font-size="11.5" font-weight="600" fill="#1B8F34">{{ $t('k120') }}</text>

 <!-- blocked bin -->
 <g filter="url(#sshad)"><rect x="206" y="236" width="134" height="52" rx="13" fill="#fff" stroke="#F0D2D0" stroke-width="1.6"/></g>
 <g transform="translate(228,262)"><circle r="13" fill="#FBEEEE"/><path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#D2473F" stroke-width="2.3" stroke-linecap="round"/></g>
 <text x="250" y="258" font-size="13.5" font-weight="700" fill="#3B4540">{{ $t('k121') }}</text>
 <text x="250" y="277" font-size="11.5" font-weight="600" fill="#C2362E">{{ $t('k122') }}</text>
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
 <text x="19" y="200" font-size="12.5" font-weight="600" fill="#46554E">{{ $t('k128') }}</text>
 <path d="M272 60 V118" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/>
 <g transform="translate(272,40)"><rect x="-112" y="-20" width="224" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="16" font-weight="800" fill="#1B8F34">{{ $t('k129') }}</text></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><circle cx="-8" cy="0" r="5" fill="#fff" stroke="#2DA23F" stroke-width="1.4"/><rect x="0" y="-4" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><rect x="0" y="3" width="9" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#passPath2"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="0s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><circle cx="-8" cy="0" r="5" fill="#fff" stroke="#2DA23F" stroke-width="1.4"/><rect x="0" y="-4" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><rect x="0" y="3" width="9" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="1.13s" repeatCount="indefinite"><mpath xlink:href="#passPath2"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="1.13s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.6"/><circle cx="-8" cy="0" r="5" fill="#fff" stroke="#2DA23F" stroke-width="1.4"/><rect x="0" y="-4" width="13" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><rect x="0" y="3" width="9" height="3" rx="1.5" fill="#2DA23F" opacity=".35"/><animateMotion dur="3.4s" begin="2.26s" repeatCount="indefinite"><mpath xlink:href="#passPath2"/></animateMotion><animate attributeName="opacity" dur="3.4s" begin="2.26s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.06;0.5;0.9;1"/></g>
 <g opacity="0"><rect x="-17" y="-12" width="34" height="24" rx="7" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.7"/><text x="-8" y="4" text-anchor="middle" font-size="12" font-weight="800" fill="#D2473F">?</text><rect x="0" y="-4" width="12" height="3" rx="1.5" fill="#D2473F" opacity=".4"/><rect x="0" y="3" width="8" height="3" rx="1.5" fill="#D2473F" opacity=".3"/><animateMotion dur="4s" begin="0.6s" repeatCount="indefinite" keyPoints="0;0.66;0.66;1" keyTimes="0;0.45;0.62;1" calcMode="linear"><mpath xlink:href="#blockPath2"/></animateMotion><animate attributeName="opacity" dur="4s" begin="0.6s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.05;0.62;0.93;1"/></g>
 <g class="hub">
   <rect x="244" y="122" width="56" height="56" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.6"/>
   <path d="M272 134 l16 6 v11 c0 10-6 16-16 20 -10-4-16-10-16-20 v-11 z" fill="#fff" stroke="#1B8F34" stroke-width="2"/>
   <path d="M265 152 l5 5 10-11" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 </g>
 <g filter="url(#sshad2)"><rect x="406" y="118" width="146" height="62" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g>
 <g transform="translate(426,149)"><circle r="13" fill="#EAF6EC"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="450" y="144" font-size="13.5" font-weight="700" fill="#3B4540">{{ $t('k130') }}</text>
 <text x="450" y="163" font-size="11.5" font-weight="600" fill="#1B8F34">{{ $t('k131') }}</text>
 <g filter="url(#sshad2)"><rect x="206" y="236" width="134" height="52" rx="13" fill="#fff" stroke="#F0D2D0" stroke-width="1.6"/></g>
 <g transform="translate(228,262)"><circle r="13" fill="#FBEEEE"/><path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#D2473F" stroke-width="2.3" stroke-linecap="round"/></g>
 <text x="250" y="258" font-size="13.5" font-weight="700" fill="#3B4540">{{ $t('k132') }}</text>
 <text x="250" y="277" font-size="11.5" font-weight="600" fill="#C2362E">{{ $t('k133') }}</text>
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
 <text x="116" y="65" font-size="14" fill="#46554E">DROP TABLE customers</text>
 <text x="404" y="64" font-size="11.5" font-weight="700" fill="#1B8F34">0.18s</text>
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
 <text x="200" y="253" font-size="13" font-weight="700" fill="#3B4540">sess_01HF…X9 · srv-db-01</text>
 <text x="200" y="271" font-size="11.5" font-weight="600" fill="#1B8F34">{{ $t('k138') }}</text>
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


<!-- SOLUTIONS -->
<section class="band" id="solutions">
  <div class="container">
    <div class="shead reveal">
      <span class="eyebrow">{{ $t('k144') }}</span>
      <h2>{{ $t('k145') }}</h2>
      <p>{{ $t('k146') }}</p>
    </div>
    <div class="sols">
      <div class="soln"><div class="sol-copy reveal">
        <span class="sol-k">{{ $t('k147') }}</span>
        <h3>{{ $t('k148') }}</h3>
        <p class="intro">{{ $t('k149') }}</p>
        <div class="plist pain"><div class="ph">{{ $t('k150') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k151') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k152') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k153') }}</span></div></div>
        <div class="plist fix"><div class="ph">{{ $t('k154') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k155') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k156') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k157') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k158') }}<b style="color:var(--brand-ink)">{{ $t('k159') }}</b>{{ $t('k160') }}</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shV" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pV" d="M92 165 H214 M214 165 C 300 165 330 118 388 100"/></defs>
 <g filter="url(#shV)"><rect x="22" y="138" width="70" height="56" rx="12" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g>
 <circle cx="44" cy="160" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><rect x="58" y="156" width="22" height="5" rx="2.5" fill="#9AA9A1"/><rect x="33" y="176" width="46" height="4" rx="2" fill="#D2DAD4"/>
 <text x="24" y="214" font-size="12" font-weight="600" fill="#46554E">{{ $t('k161') }}</text>
 <path d="M92 165 H190" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shV)"><rect x="190" y="116" width="96" height="98" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="238" cy="165" r="42" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="40;58" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <path d="M238 130 l16 6 v12 c0 11-7 17-16 21 -9-4-16-10-16-21 v-12 z" fill="#fff" stroke="#1B8F34" stroke-width="2"/><path d="M231 150 l5 5 10-11" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="238" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1B8F34">{{ $t('k162') }}</text>
 <text x="238" y="232" text-anchor="middle" font-size="10.5" fill="#46554E">{{ $t('k163') }}</text><g transform="translate(238,278)"><rect x="-90" y="-15" width="180" height="30" rx="15" fill="#fff" stroke="#D2473F" stroke-width="1.4"/><circle cx="-72" cy="0" r="4.5" fill="#D2473F"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/></circle><text x="6" y="4" text-anchor="middle" font-size="10.5" font-weight="700" fill="#C2362E">{{ $t('k164') }}</text></g>
 <g filter="url(#shV)"><rect x="372" y="74" width="132" height="52" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.7"/></g>
 <g transform="translate(392,100)"><circle r="11" fill="#EAF6EC"/><path d="M-4 0 l3 3 5.5-6.5" stroke="#1B8F34" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="412" y="97" font-size="12.5" font-weight="700" fill="#3B4540">{{ $t('k165') }}</text><text x="412" y="114" font-size="10.5" fill="#1B8F34" font-weight="600">{{ $t('k166') }}</text>
 <g filter="url(#shV)"><rect x="372" y="150" width="132" height="46" rx="12" fill="#F8F9F9" stroke="#E6E0E0" stroke-width="1.4"/></g>
 <g transform="translate(390,173)"><rect x="-7" y="-4" width="14" height="11" rx="2.5" fill="#fff" stroke="#9AA0A0" stroke-width="1.4"/><path d="M-4 -4 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#9AA0A0" stroke-width="1.4"/></g>
 <text x="410" y="170" font-size="12" font-weight="600" fill="#7E8C85">{{ $t('k167') }}</text><text x="410" y="186" font-size="10.5" fill="#A23129" font-weight="600">{{ $t('k168') }}</text>
 <g filter="url(#shV)"><rect x="372" y="218" width="132" height="46" rx="12" fill="#F8F9F9" stroke="#E6E0E0" stroke-width="1.4"/></g>
 <g transform="translate(390,241)"><rect x="-7" y="-4" width="14" height="11" rx="2.5" fill="#fff" stroke="#9AA0A0" stroke-width="1.4"/><path d="M-4 -4 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#9AA0A0" stroke-width="1.4"/></g>
 <text x="410" y="238" font-size="12" font-weight="600" fill="#7E8C85">{{ $t('k167') }}</text><text x="410" y="254" font-size="10.5" fill="#A23129" font-weight="600">{{ $t('k169') }}</text>
 <path d="M286 174 C 320 178 344 174 372 173" stroke="#D2473F" stroke-width="2" stroke-dasharray="2 6" opacity=".7"/>
 <g transform="translate(348,174)"><circle r="11" fill="#fff" stroke="#D2473F" stroke-width="2"/><path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#D2473F" stroke-width="2" stroke-linecap="round"/></g>
 <path d="M286 196 C 322 222 344 238 372 241" stroke="#D2473F" stroke-width="2" stroke-dasharray="2 6" opacity=".5"/>
 <g opacity="0"><rect x="-14" y="-10" width="28" height="20" rx="6" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><rect x="-8" y="-2" width="16" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><animateMotion dur="3s" repeatCount="indefinite"><mpath xlink:href="#pV"/></animateMotion><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.08;0.5;0.9;1"/></g>
</svg></div></div>
      <div class="soln rev"><div class="sol-copy reveal">
        <span class="sol-k">{{ $t('k170') }}</span>
        <h3>{{ $t('k171') }}</h3>
        <p class="intro">{{ $t('k172') }}</p>
        <div class="plist pain"><div class="ph">{{ $t('k150') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k173') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k174') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k175') }}</span></div></div>
        <div class="plist fix"><div class="ph">{{ $t('k154') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k176') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k177') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k178') }}</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shR" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pR1" d="M96 78 C 158 86 172 150 206 166"/><path id="pR2" d="M96 134 C 160 140 182 160 206 170"/><path id="pR3" d="M96 190 C 160 188 182 180 206 174"/><path id="pR4" d="M96 246 C 160 240 184 188 206 178"/><path id="pRs" d="M326 172 H408"/></defs>
 <g font-size="12.5" font-weight="700">
  <g filter="url(#shR)"><rect x="18" y="58" width="78" height="40" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="35" y="83" fill="#1B8F34">RDP</text>
  <g filter="url(#shR)"><rect x="18" y="114" width="78" height="40" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="35" y="139" fill="#1B8F34">VNC</text>
  <g filter="url(#shR)"><rect x="18" y="170" width="78" height="40" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="35" y="195" fill="#1B8F34">SSH</text>
  <g filter="url(#shR)"><rect x="18" y="226" width="78" height="40" rx="10" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="30" y="251" fill="#1B8F34">Telnet</text></g>
 <path d="M96 78 C 158 86 172 150 206 166" stroke="#DDE7E0" stroke-width="2"/><path d="M96 134 C 160 140 182 160 206 170" stroke="#DDE7E0" stroke-width="2"/><path d="M96 190 C 160 188 182 180 206 174" stroke="#DDE7E0" stroke-width="2"/><path d="M96 246 C 160 240 184 188 206 178" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shR)"><rect x="206" y="104" width="120" height="120" rx="18" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="224" cy="124" r="5" fill="#D2473F"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/></circle><text x="234" y="128" font-size="10.5" font-weight="700" fill="#C2362E">REC</text>
 <path d="M266 138 l18 7 v13 c0 12-8 19-18 23 -10-4-18-11-18-23 v-13 z" fill="#fff" stroke="#1B8F34" stroke-width="2"/><path d="M258 160 l6 6 11-12" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="266" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">{{ $t('k179') }}</text>
 <path d="M326 172 H408" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shR)"><rect x="414" y="104" width="86" height="34" rx="8" fill="#fff" stroke="#E4EAE6" stroke-width="1.4"/></g><circle cx="427" cy="121" r="3" fill="#2DA23F"/><rect x="437" y="115" width="50" height="5" rx="2.5" fill="#E1E8E3"/><rect x="437" y="124" width="36" height="4" rx="2" fill="#EDF1EE"/>
 <g filter="url(#shR)"><rect x="414" y="146" width="86" height="34" rx="8" fill="#fff" stroke="#E4EAE6" stroke-width="1.4"/></g><circle cx="427" cy="163" r="3" fill="#2DA23F"/><rect x="437" y="157" width="50" height="5" rx="2.5" fill="#E1E8E3"/><rect x="437" y="166" width="36" height="4" rx="2" fill="#EDF1EE"/>
 <g filter="url(#shR)"><rect x="414" y="188" width="86" height="34" rx="8" fill="#fff" stroke="#E4EAE6" stroke-width="1.4"/></g><circle cx="427" cy="205" r="3" fill="#2DA23F"/><rect x="437" y="199" width="50" height="5" rx="2.5" fill="#E1E8E3"/><rect x="437" y="208" width="36" height="4" rx="2" fill="#EDF1EE"/>
 <text x="457" y="240" text-anchor="middle" font-size="10.5" font-weight="600" fill="#7E8C85">{{ $t('k180') }}</text>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pR1"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite"><mpath xlink:href="#pR2"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0.6s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"><mpath xlink:href="#pR3"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="1.2s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="1.8s" repeatCount="indefinite"><mpath xlink:href="#pR4"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="1.8s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><rect x="-7" y="-6" width="14" height="12" rx="3" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.4s" begin="0.3s" repeatCount="indefinite"><mpath xlink:href="#pRs"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0.3s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div>
      <div class="soln"><div class="sol-copy reveal">
        <span class="sol-k">{{ $t('k181') }}</span>
        <h3>{{ $t('k182') }}</h3>
        <p class="intro">{{ $t('k183') }}</p>
        <div class="plist pain"><div class="ph">{{ $t('k150') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k184') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k185') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k186') }}</span></div></div>
        <div class="plist fix"><div class="ph">{{ $t('k154') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k187') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k188') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k189') }}</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pS1" d="M94 78 C 150 96 168 120 186 132"/><path id="pS2" d="M100 168 C 150 168 170 162 186 160"/><path id="pS3" d="M94 258 C 150 232 168 200 186 188"/></defs>
 <!-- shared session screen -->
 <g filter="url(#shS)"><rect x="186" y="92" width="150" height="118" rx="12" fill="#0E1714" stroke="#2DA23F" stroke-width="2"/></g>
 <rect x="186" y="92" width="150" height="22" rx="11" fill="#16241B"/>
 <circle cx="201" cy="103" r="4.6" fill="#D2473F"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/></circle>
 <text x="212" y="107" font-size="10" font-weight="700" fill="#7FE394">REC · RDP LIVE</text>
 <rect x="200" y="128" width="80" height="6" rx="3" fill="#3FA85A" opacity=".8"/><rect x="200" y="142" width="118" height="5" rx="2.5" fill="#2C6E40"/><rect x="200" y="154" width="96" height="5" rx="2.5" fill="#2C6E40"/><rect x="200" y="166" width="110" height="5" rx="2.5" fill="#2C6E40"/><rect x="200" y="184" width="64" height="14" rx="4" fill="#1C5230"/>
 <text x="261" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">{{ $t('k190') }}</text>
 <!-- viewers -->
 <g filter="url(#shS)"><rect x="18" y="56" width="74" height="44" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><circle cx="38" cy="78" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><text x="52" y="74" font-size="10.5" font-weight="700" fill="#3B4540">{{ $t('k191') }}</text><text x="52" y="88" font-size="9" fill="#7E8C85">{{ $t('k192') }}</text>
 <g filter="url(#shS)"><rect x="14" y="146" width="84" height="46" rx="11" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2"/></g><circle cx="35" cy="169" r="9" fill="#fff" stroke="#1B8F34" stroke-width="1.5"/><path d="M31 169 l3 3 5-6" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="50" y="165" font-size="10.5" font-weight="800" fill="#1B8F34">{{ $t('k193') }}</text><text x="50" y="179" font-size="9" fill="#1B8F34">Control</text>
 <circle cx="56" cy="169" r="34" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="28;42" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.45;0" dur="1.8s" repeatCount="indefinite"/></circle>
 <g filter="url(#shS)"><rect x="18" y="238" width="74" height="44" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><circle cx="38" cy="260" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><text x="52" y="256" font-size="10.5" font-weight="700" fill="#3B4540">{{ $t('k194') }}</text><text x="52" y="270" font-size="9" fill="#7E8C85">{{ $t('k195') }}</text>
 <path d="M94 78 C 150 96 168 120 186 132" stroke="#DDE7E0" stroke-width="2"/><path d="M100 168 C 150 168 170 162 186 160" stroke="#2DA23F" stroke-width="2"/><path d="M94 258 C 150 232 168 200 186 188" stroke="#DDE7E0" stroke-width="2"/>
 <g opacity="0"><circle r="5" fill="#2DA23F"/><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pS1"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="5.5" fill="#1B8F34"/><animateMotion dur="2.2s" begin="0.5s" repeatCount="indefinite"><mpath xlink:href="#pS2"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0.5s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="5" fill="#2DA23F"/><animateMotion dur="2.2s" begin="1s" repeatCount="indefinite"><mpath xlink:href="#pS3"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <!-- live index panel -->
 <g filter="url(#shS)"><rect x="358" y="92" width="148" height="118" rx="12" fill="#fff" stroke="#D9E2DC" stroke-width="1.5"/></g>
 <circle cx="376" cy="112" r="7" stroke="#2DA23F" stroke-width="1.8"/><path d="M381 117 l6 6" stroke="#2DA23F" stroke-width="1.8" stroke-linecap="round"/>
 <text x="390" y="116" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('k196') }}</text>
 <g><rect x="372" y="130" width="120" height="20" rx="5" fill="#F4FAF6" stroke="#E0EAE3" stroke-width="1"/><text x="380" y="144" font-size="9.5" fill="#46554E">{{ $t('k197') }}</text><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.15;0.3;1" dur="4s" repeatCount="indefinite"/></g>
 <g><rect x="372" y="156" width="120" height="20" rx="5" fill="#F4FAF6" stroke="#E0EAE3" stroke-width="1"/><text x="380" y="170" font-size="9.5" fill="#46554E">00:48 schema change</text><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.4;0.55;1" dur="4s" repeatCount="indefinite"/></g>
 <g><rect x="372" y="182" width="120" height="20" rx="5" fill="#F4FAF6" stroke="#E0EAE3" stroke-width="1"/><text x="380" y="196" font-size="9.5" fill="#46554E">{{ $t('k198') }}</text><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.65;0.8;1" dur="4s" repeatCount="indefinite"/></g>
 <text x="432" y="228" text-anchor="middle" font-size="10.5" font-weight="600" fill="#7E8C85">{{ $t('k199') }}</text>
</svg></div></div>
      <div class="soln rev"><div class="sol-copy reveal">
        <span class="sol-k">{{ $t('k200') }}</span>
        <h3>{{ $t('k201') }}</h3>
        <p class="intro">{{ $t('k202') }}</p>
        <div class="plist pain"><div class="ph">{{ $t('k150') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k203') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k204') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>{{ $t('k205') }}</span></div></div>
        <div class="plist fix"><div class="ph">{{ $t('k154') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k206') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k207') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k208') }}</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shM" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pm1" d="M120 70 C 175 96 200 140 224 158"/><path id="pm2" d="M116 140 C 165 146 198 158 224 162"/><path id="pm3" d="M122 212 C 175 198 198 178 224 168"/><path id="pm4" d="M134 274 C 185 236 202 186 226 172"/><path id="pmo" d="M286 165 H362"/></defs>
 <g font-size="10.5" font-weight="700">
  <g filter="url(#shM)"><rect x="14" y="53" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="27" y="74" fill="#A23129">{{ $t('k209') }}</text>
  <g filter="url(#shM)"><rect x="10" y="123" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="23" y="144" fill="#A23129">{{ $t('k210') }}</text>
  <g filter="url(#shM)"><rect x="16" y="195" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="29" y="216" fill="#A23129">{{ $t('k211') }}</text>
  <g filter="url(#shM)"><rect x="28" y="257" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="41" y="278" fill="#A23129">{{ $t('k212') }}</text></g>
 <path d="M120 70 C 175 96 200 140 224 158" stroke="#E7DCDC" stroke-width="2"/><path d="M116 140 C 165 146 198 158 224 162" stroke="#E7DCDC" stroke-width="2"/><path d="M122 212 C 175 198 198 178 224 168" stroke="#E7DCDC" stroke-width="2"/><path d="M134 274 C 185 236 202 186 226 172" stroke="#E7DCDC" stroke-width="2"/>
 <g filter="url(#shM)"><circle cx="256" cy="165" r="44" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="256" cy="165" r="44" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="44;58" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <path d="M256 150 l13 5 v9 c0 8-5 13-13 16 -8-3-13-8-13-16 v-9 z" fill="#fff" stroke="#1B8F34" stroke-width="1.8"/><path d="M250 165 l4 4 8-9" stroke="#1B8F34" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="256" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">{{ $t('k213') }}</text>
 <path d="M300 165 H362" stroke="#2DA23F" stroke-width="2"/>
 <g font-size="11" font-weight="600">
  <g filter="url(#shM)"><rect x="362" y="92" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="378" y="121" fill="#3B4540">{{ $t('k214') }}</text>
  <g filter="url(#shM)"><rect x="438" y="92" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="454" y="121" fill="#3B4540">{{ $t('k215') }}</text>
  <g filter="url(#shM)"><rect x="362" y="150" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="378" y="179" fill="#3B4540">{{ $t('k216') }}</text>
  <g filter="url(#shM)"><rect x="438" y="150" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="454" y="179" fill="#3B4540">{{ $t('k217') }}</text></g>
 <text x="433" y="226" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1B8F34">{{ $t('k218') }}</text>
 <g opacity="0"><rect x="-13" y="-9" width="26" height="18" rx="5" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.3"/><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pm1"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.55;0.62"/></g>
 <g opacity="0"><rect x="-13" y="-9" width="26" height="18" rx="5" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.3"/><animateMotion dur="2.6s" begin="0.5s" repeatCount="indefinite"><mpath xlink:href="#pm2"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="0.5s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.55;0.62"/></g>
 <g opacity="0"><rect x="-13" y="-9" width="26" height="18" rx="5" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.3"/><animateMotion dur="2.6s" begin="1s" repeatCount="indefinite"><mpath xlink:href="#pm3"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.55;0.62"/></g>
 <g opacity="0"><rect x="-7" y="-6" width="14" height="12" rx="3" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.6s" begin="0.4s" repeatCount="indefinite"><mpath xlink:href="#pmo"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="0.4s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div>
      <div class="soln"><div class="sol-copy reveal"><span class="sol-k">{{ $t('k219') }}</span><h3>{{ $t('k220') }}</h3><p class="intro">{{ $t('k221') }}</p><div class="plist fix"><div class="ph">{{ $t('k222') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k223') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k224') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k225') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k226') }}</span></div></div></div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shC1" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pC1" d="M92 160 H188"/></defs>
 <g font-size="10" font-weight="600">
  <g filter="url(#shC1)"><rect x="14" y="92" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="111" font-size="11" fill="#46554E">{{ $t('k227') }}</text>
  <g filter="url(#shC1)"><rect x="14" y="146" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="165" font-size="11" fill="#46554E">{{ $t('k228') }}</text>
  <g filter="url(#shC1)"><rect x="14" y="200" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="219" font-size="11" fill="#46554E">{{ $t('k229') }}</text></g>
 <text x="20" y="252" font-size="10.5" font-weight="600" fill="#7E8C85">{{ $t('k230') }}</text>
 <path d="M92 107 C 140 110 160 150 188 158" stroke="#DDE7E0" stroke-width="2"/><path d="M92 161 H188" stroke="#DDE7E0" stroke-width="2"/><path d="M92 215 C 140 212 160 172 188 164" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shC1)"><rect x="188" y="116" width="96" height="92" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="236" cy="162" r="40" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="38;54" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <g transform="translate(236,150)" stroke="#1B8F34" stroke-width="2" fill="none"><circle r="9"/><path d="M0 -15 V-11 M0 11 V15 M-15 0 H-11 M11 0 H15 M-10.6 -10.6 l2.8 2.8 M10.6 -10.6 l-2.8 2.8 M-10.6 10.6 l2.8 -2.8 M10.6 10.6 l-2.8 -2.8"/></g>
 <text x="236" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('k231') }}</text>
 <path d="M284 162 H352" stroke="#2DA23F" stroke-width="2"/>
 <g font-weight="600"><g filter="url(#shC1)"><rect x="352" y="78" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,91)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="95" font-size="10.5" fill="#3B4540">{{ $t('k232') }}</text><g filter="url(#shC1)"><rect x="352" y="116" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,129)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="133" font-size="10.5" fill="#3B4540">{{ $t('k233') }}</text><g filter="url(#shC1)"><rect x="352" y="154" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,167)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="171" font-size="10.5" fill="#3B4540">{{ $t('k234') }}</text><g filter="url(#shC1)"><rect x="352" y="192" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,205)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="209" font-size="10.5" fill="#3B4540">{{ $t('k235') }}</text></g><rect x="350" y="74" width="158" height="32" rx="8" fill="#2DA23F" opacity="0.1"><animateTransform attributeName="transform" type="translate" values="0,0;0,114;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite"/></rect>
 <g filter="url(#shC1)"><rect x="392" y="232" width="74" height="58" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g>
 <path d="M404 244 h36 l8 8 v32 h-44 z" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><path d="M440 244 v8 h8" fill="none" stroke="#2DA23F" stroke-width="1.5"/><path d="M412 268 l5 5 9-10" stroke="#1B8F34" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="429" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#1B8F34">{{ $t('k236') }}</text>
 <g opacity="0"><rect x="-10" y="-7" width="20" height="14" rx="4" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pC1"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><rect x="-10" y="-7" width="20" height="14" rx="4" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite"><mpath xlink:href="#pC1"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="1.1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div><div class="soln rev"><div class="sol-copy reveal"><span class="sol-k">{{ $t('k237') }}</span><h3>ISO 27001 · SOC 2 · GDPR · NIS2 · HIPAA</h3><p class="intro">{{ $t('k238') }}</p><div class="plist fix"><div class="ph">{{ $t('k222') }}</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k239') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k240') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k241') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k242') }}</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>{{ $t('k243') }}</span></div></div></div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shC2" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pC2" d="M92 160 H188"/></defs>
 <g font-size="10" font-weight="600">
  <g filter="url(#shC2)"><rect x="14" y="92" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="111" font-size="11" fill="#46554E">{{ $t('k227') }}</text>
  <g filter="url(#shC2)"><rect x="14" y="146" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="165" font-size="11" fill="#46554E">{{ $t('k228') }}</text>
  <g filter="url(#shC2)"><rect x="14" y="200" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="219" font-size="11" fill="#46554E">{{ $t('k229') }}</text></g>
 <text x="20" y="252" font-size="10.5" font-weight="600" fill="#7E8C85">{{ $t('k230') }}</text>
 <path d="M92 107 C 140 110 160 150 188 158" stroke="#DDE7E0" stroke-width="2"/><path d="M92 161 H188" stroke="#DDE7E0" stroke-width="2"/><path d="M92 215 C 140 212 160 172 188 164" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shC2)"><rect x="188" y="116" width="96" height="92" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="236" cy="162" r="40" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="38;54" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <g transform="translate(236,150)" stroke="#1B8F34" stroke-width="2" fill="none"><circle r="9"/><path d="M0 -15 V-11 M0 11 V15 M-15 0 H-11 M11 0 H15 M-10.6 -10.6 l2.8 2.8 M10.6 -10.6 l-2.8 2.8 M-10.6 10.6 l2.8 -2.8 M10.6 10.6 l-2.8 -2.8"/></g>
 <text x="236" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">{{ $t('k231') }}</text>
 <path d="M284 162 H352" stroke="#2DA23F" stroke-width="2"/>
 <g font-weight="600"><g filter="url(#shC2)"><rect x="352" y="64" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,77)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="81" font-size="10.5" fill="#3B4540">ISO 27001:2022</text><g filter="url(#shC2)"><rect x="352" y="96" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,109)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="113" font-size="10.5" fill="#3B4540">{{ $t('k244') }}</text><g filter="url(#shC2)"><rect x="352" y="128" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,141)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="145" font-size="10.5" fill="#3B4540">{{ $t('k245') }}</text><g filter="url(#shC2)"><rect x="352" y="160" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,173)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="177" font-size="10.5" fill="#3B4540">{{ $t('k246') }}</text><g filter="url(#shC2)"><rect x="352" y="192" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,205)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="209" font-size="10.5" fill="#3B4540">US HIPAA</text></g><rect x="350" y="60" width="158" height="30" rx="8" fill="#2DA23F" opacity="0.1"><animateTransform attributeName="transform" type="translate" values="0,0;0,160;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite"/></rect>
 <g filter="url(#shC2)"><rect x="392" y="232" width="74" height="58" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g>
 <path d="M404 244 h36 l8 8 v32 h-44 z" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><path d="M440 244 v8 h8" fill="none" stroke="#2DA23F" stroke-width="1.5"/><path d="M412 268 l5 5 9-10" stroke="#1B8F34" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="429" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#1B8F34">{{ $t('k236') }}</text>
 <g opacity="0"><rect x="-10" y="-7" width="20" height="14" rx="4" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pC2"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><rect x="-10" y="-7" width="20" height="14" rx="4" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite"><mpath xlink:href="#pC2"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="1.1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div>
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

<!-- CASES tabbed -->
<section class="band" id="cases">
  <div class="container">
    <div class="shead reveal">
      <span class="eyebrow">Real-world Scenarios</span>
      <h2>{{ $t('k252') }}</h2>
      <p>{{ $t('k253') }}</p>
    </div>
    <div class="casewrap reveal">
      <div class="ctabs" id="ctabs">
        <button class="ctab on" data-c="0"><span class="k">Manufacturing</span><h4>{{ $t('k254') }}</h4></button>
        <button class="ctab" data-c="1"><span class="k">Banking</span><h4>{{ $t('k255') }}</h4></button>
        <button class="ctab" data-c="2"><span class="k">Zero Trust</span><h4>{{ $t('k256') }}</h4></button>
        <button class="ctab" data-c="3"><span class="k">MSP</span><h4>{{ $t('k257') }}</h4></button>
      </div>
      <div id="cpanes">
        <div class="cpane on">
          <div class="cbox">
            <span class="ctag">{{ $t('k258') }}</span>
            <h3>{{ $t('k259') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k261') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k262') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k263') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k264') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k265') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k266') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>−80%</b><span>{{ $t('k267') }}</span></div><div><b>0</b><span>{{ $t('k268') }}</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">{{ $t('k269') }}</span>
            <h3>{{ $t('k63') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k270') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k271') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k272') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k273') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k274') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k275') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>{{ $t('k276') }}</b><span>{{ $t('k277') }}</span></div><div><b>0</b><span>{{ $t('k278') }}</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">{{ $t('k279') }}</span>
            <h3>{{ $t('k280') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k281') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k282') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k283') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k284') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k285') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k286') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>{{ $t('k287') }}</b><span>{{ $t('k288') }}</span></div><div><b>0</b><span>{{ $t('k289') }}</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">{{ $t('k290') }}</span>
            <h3>{{ $t('k291') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k292') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k293') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k294') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k295') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k296') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k297') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>30+</b><span>{{ $t('k298') }}</span></div><div><b>{{ $t('k299') }}</b><span>{{ $t('k300') }}</span></div></div>
          </div>
        </div>
      </div>
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

  // cases tabs
  const ctabs = [...document.querySelectorAll('#ctabs .ctab')]
  const cpanes = [...document.querySelectorAll('#cpanes .cpane')]
  ctabs.forEach((t) => t.addEventListener('click', () => { const i = +t.dataset.c; ctabs.forEach((x) => x.classList.remove('on')); cpanes.forEach((x) => x.classList.remove('on')); t.classList.add('on'); cpanes[i].classList.add('on') }))

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
