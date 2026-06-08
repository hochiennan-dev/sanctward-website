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
            <h1>AI 時代的<br><span class="g">企業信任作業系統</span></h1>
            <p>傳統 IAM 只是門禁卡——管「對的人進對的門」。Sanctward 同時是門禁卡、監視器與智慧保全：看得見人在應用裡做什麼、AI Agent 在背後做什麼，以及資料正流向哪裡。</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#platform">探索平台</a>
              <a class="btn btn-ghost btn-lg" href="#contact">預約 Demo<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg>ZTA · TRUST SCORE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="score-row">
              <div class="ring" id="ring"><b id="scoreNum">92<small>/100</small></b></div>
              <div class="score-meta"><b>alice.chen · 連線中</b><span>srv-db-01 · 台北 · TLS 1.3</span><span class="tagk"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>放行 · 信任正常</span></div>
            </div>
            <div class="sigs">
              <div class="sig"><span>Geo-IP 連線地理位置</span><div class="bar"><i style="width:94%"></i></div></div>
              <div class="sig"><span>行為基線偏差</span><div class="bar"><i style="width:88%"></i></div></div>
              <div class="sig"><span>設備姿態 / EDR</span><div class="bar"><i style="width:96%"></i></div></div>
            </div>
            <div class="note"><svg class="ic" viewBox="0 0 24 24"><use href="#i-alert"/></svg><div><b>ANOMALY DETECTED</b> — 來自東京的 03:14 登入偏離 99% 基線 → 觸發 STEP-UP MFA，分數 −42。</div></div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye t-amber">Shadow AI 治理 · Roadmap 2026</span>
            <h1>看得見資料<br><span class="g">正流向哪個 LLM</span></h1>
            <p>工程師用 Copilot、業務用 ChatGPT——Sanctward 是阻擋敏感資料流向外部 LLM 的第一道防線：端點看得到 clipboard，Gateway 收斂 LLM 流量。</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#diff">了解 Shadow AI</a>
              <a class="btn btn-ghost btn-lg" href="#contact">預約 Demo<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clip"/></svg>CLIPBOARD DLP · LIVE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="mock">
              <div class="mrow block"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>已阻擋貼上 · 偵測到客戶個資<span class="who">→ chatgpt.com</span></div>
              <div class="mrow block"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>已阻擋貼上 · 信用卡號 (PCI)<span class="who">→ claude.ai</span></div>
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--amber)"><use href="#i-alert"/></svg>警示 · 大量貼上 4,200 字<span class="who">→ gemini</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>放行 · 內部知識庫查詢<span class="who">→ 企業 LLM</span></div>
            </div>
            <div class="note" style="border-color:var(--brand-soft2);background:var(--brand-soft);color:var(--brand-ink)"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-shield"/></svg><div><b>兩隻手兼具</b>：端點看得到、Gateway 管得住——目前市場唯一。</div></div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye t-blue">Zero Trust · ZTA</span>
            <h1>每一次連線都有<br><span class="g">0–100 信任分數</span></h1>
            <p>多維度訊號毫秒內加權，動態決定放行、要求 MFA 或直接拒絕——使用者全程無感，分數異常即時降分並強制斷線。</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#platform">探索零信任</a>
              <a class="btn btn-ghost btn-lg" href="#contact">預約 Demo<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg>BEHAVIORAL BASELINE</span><span class="dot3"><i></i><i></i><i></i></span></div>
            <div class="score-row">
              <div class="ring" style="--v:48;background:conic-gradient(var(--danger) 48%,rgba(13,22,17,.07) 0)"><b style="color:var(--danger)">48<small>/100</small></b></div>
              <div class="score-meta"><b>異常登入偵測</b><span>Tokyo/Shibuya · 03:14</span><span class="tagk" style="background:rgba(210,71,63,.1);color:#A23129"><svg class="ic" viewBox="0 0 24 24"><use href="#i-alert"/></svg>要求 Step-up MFA</span></div>
            </div>
            <div class="sigs">
              <div class="sig"><span>不可能移動 Impossible Travel</span><div class="bar"><i style="width:22%;background:var(--danger)"></i></div></div>
              <div class="sig"><span>非常規時段</span><div class="bar"><i style="width:30%;background:var(--amber)"></i></div></div>
              <div class="sig"><span>常用應用 / 地點</span><div class="bar"><i style="width:80%"></i></div></div>
            </div>
          </div>
        </div>

        <div class="hslide">
          <div>
            <span class="eyebrow hs-eye t-violet">Privileged Access · PAM</span>
            <h1>連得進去，更<br><span class="g">看得到在做什麼</span></h1>
            <p>Web RDP/SSH/VNC、完整會話錄影、OCR 全文搜尋、JIT 時限存取——維護人員不接觸密碼，到期權限零殘留。</p>
            <div class="hs-cta">
              <a class="btn btn-primary btn-lg" href="#platform">探索特權存取</a>
              <a class="btn btn-ghost btn-lg" href="#contact">預約 Demo<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></a>
            </div>
          </div>
          <div class="viz">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>SESSION · OCR 全文搜尋</span><span class="dot3"><i></i><i></i><i></i></span></div>
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
        <div><b>50+</b>多租戶客戶</div><div><b>1,500</b>端點實測上線</div><div><b>1/3</b>傳統組合 TCO</div>
      </div>
    </div>
  </div>
</section>

<!-- TRUST STRIP -->
<section class="trust">
  <div class="container trust-in">
    <span class="t-l">為合規而生</span>
    <div class="chips">
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>ISO 27001</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>SOC 2 Type II</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>金管會遠端維運稽核</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>台灣資通安全管理法</span>
      <span class="chip"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>On-Premises 資料主權</span>
    </div>
  </div>
</section>

<!-- THESIS stepper -->
<section class="band tight">
  <div class="container">
    <div class="shead reveal" style="max-width:760px;margin:0 auto 40px;text-align:center">
      <span class="eyebrow">Defense in Depth · 縱深防禦</span>
      <h2>AI驅動 - 安全再進化</h2>
    </div>
    <div class="layers reveal">
      <div class="layer l1">
        <div class="lic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></div>
        <div class="lbody">
          <div class="lt"><span class="lk">LAYER 01</span><h3>身份與存取</h3><span class="en">Identity &amp; Access</span></div>
          <p>確認「來者是誰、可否進入」——以統一身份治理與多因素認證，把每一道入口的鑰匙收歸控管，讓每一次登入都有據可循。</p>
        </div>
        <span class="lconn"><svg class="larrow" viewBox="0 0 28 84"><defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#62CE7B"/><stop offset="1" stop-color="#2DA23F"/></linearGradient></defs><rect x="2" y="4" width="24" height="76" rx="12" fill="url(#cg1)"/><g class="chev"><path d="M8 37l6 6 6-6M8 49l6 6 6-6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>
      </div>
      <div class="layer l2">
        <div class="lic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-eye"/></svg></div>
        <div class="lbody">
          <div class="lt"><span class="lk">LAYER 02</span><h3>行為可視性</h3><span class="en">Visibility &amp; Audit</span></div>
          <p>看見「進入之後做了什麼」——全程會話錄影與內容稽核，讓特權操作不再是盲區，事後可回溯、可舉證。</p>
        </div>
        <span class="lconn"><svg class="larrow" viewBox="0 0 28 84"><defs><linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2DA23F"/><stop offset="1" stop-color="#15692A"/></linearGradient></defs><rect x="2" y="4" width="24" height="76" rx="12" fill="url(#cg2)"/><g class="chev"><path d="M8 37l6 6 6-6M8 49l6 6 6-6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg></span>
      </div>
      <div class="layer l3">
        <div class="lic"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></div>
        <div class="lbody">
          <div class="lt"><span class="lk">LAYER 03</span><h3>即時主動防禦</h3><span class="en">Active Defense</span></div>
          <p>在「風險發生的當下」出手——以即時信任評分持續驗證，分數異常立即升級驗證、攔截或強制斷線。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PLATFORM tabbed explorer -->
<section class="band" id="platform">
  <div class="container">
    <div class="shead reveal" style="max-width:780px;margin:0 auto 44px;text-align:center">
      <h2>一個平台，五大能力同一條訊號鏈</h2>
      <p>不是五個產品拼裝——身份流入信任、設備影響分數、分數驅動存取、所有操作寫入稽核。自動輪播，亦可點選展開。</p>
    </div>
    <div class="plat reveal">
      <div class="tabs" id="ptabs">
        <button class="tab on" data-p="0"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></span><div><span class="k">IAM / SSO</span><h4>身份單一登入</h4><p>聯邦登入、目錄同步、離職即時失效</p></div></button>
        <button class="tab" data-p="1"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg></span><div><span class="k">PAM</span><h4>特權遠端存取</h4><p>Web RDP/SSH、會話錄影、JIT</p></div></button>
        <button class="tab" data-p="2"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg></span><div><span class="k">ZTA</span><h4>零信任架構</h4><p>0–100 信任評分、行為基線</p></div></button>
        <button class="tab" data-p="3"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></span><div><span class="k">Endpoint</span><h4>端點艦隊管理</h4><p>設備身份、姿態、生命週期</p></div></button>
        <button class="tab" data-p="4"><span class="ti"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></span><div><span class="k">Compliance</span><h4>合規與稽核</h4><p>WORM、Merkle、報表自動化</p></div></button>
      </div>
      <div class="panel" id="ppanel">
        <div class="pane on">
          <div class="pcopy">
            <h3>身份單一登入 IAM / SSO</h3>
            <p>一次登入存取所有系統，舊系統不用改造也能納管。Sanctward 本身就是完整的 OIDC IdP。</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>OIDC / SAML 聯邦 + 表單代填 + 反向代理，9 成認證模式皆可納管</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>AD / LDAP 雙向同步，離職帳號自動停用、零殘留</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>22+ 內建應用範本，選範本、套用、完成</div>
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
            <h3>特權遠端存取 PAM</h3>
            <p>讓「連得進去」的同時，確保「看得到在做什麼」。維護人員不需要、也不應該知道目標系統密碼。</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>Web RDP/SSH/VNC 零用戶端安裝，或原生客戶端 &lt;15ms 延遲</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>完整會話錄影 + OCR 全文搜尋，關鍵字秒級定位</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>JIT 時限存取、受控帳密注入，到期零殘留</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>OCR 搜尋</span></div>
            <div class="searchbar"><svg class="ic" viewBox="0 0 24 24"><use href="#i-search"/></svg>sudo rm<span class="cnt">2 results · 0.2s</span></div>
            <div class="reslist"><div class="res"><b>sess_01HK…7P</b> · srv-app-prod<span>ops.lee · 22:48</span></div><div class="res"><b>sess_01HM…2C</b> · srv-db-02<span>contractor.chen · 14:32</span></div></div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>零信任架構 ZTA</h3>
            <p>不信任任何預設安全環境，每一次存取都基於當下狀態動態評估，毫秒內完成、使用者無感。</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>0–100 即時信任評分：Geo-IP、不可能移動、威脅情報加權</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>行為基線自動學習，偏離即降分、Step-up 或斷線</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>Merkle 不可竄改證據鏈，稽核日誌防竄改</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg>TRUST SCORE</span></div>
            <div class="score-row"><div class="ring" style="--v:92"><b>92<small>/100</small></b></div><div class="score-meta"><b>動態存取決策</b><span>&gt;90 放行 · 60–90 加 MFA · &lt;60 拒絕</span></div></div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>端點艦隊管理 Endpoint</h3>
            <p>每一台設備都有可驗證的身份——從上線到離線全程受管，1,500 端點實測 99.9% 自動上線。</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>跨平台安裝包 .msi / .pkg / .deb，私有 CA 一次配置自動信任</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>設備姿態評估（OS、加密、EDR）即時餵入信任評分</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>指紋漂移偵測、憑證自動續期、遠端移除</div>
            </div>
          </div>
          <div class="viz" style="box-shadow:none">
            <div class="viz-head"><span class="lbl"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg>FLEET</span></div>
            <div class="mock">
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>acme-tpe-014 · Win11 22H2<span class="who">healthy</span></div>
              <div class="mrow ok"><svg class="ic" viewBox="0 0 24 24" style="color:var(--brand)"><use href="#i-check"/></svg>acme-mac-pdx · macOS 14.4<span class="who">healthy</span></div>
              <div class="mrow"><svg class="ic" viewBox="0 0 24 24" style="color:var(--amber)"><use href="#i-alert"/></svg>acme-tpe-221 · 指紋漂移<span class="who">review</span></div>
            </div>
          </div>
        </div>
        <div class="pane">
          <div class="pcopy">
            <h3>合規與稽核 Compliance</h3>
            <p>所有操作有跡可查，所有法規有據可報。稽核從「事後撈 log」變成「適配器自動對應、一鍵產出」。</p>
            <div class="flist">
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>100+ 事件類型、前後對比 delta、敏感欄位自動遮蔽</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>WORM 寫入不可改 + Merkle 證據鏈</div>
              <div><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>ISO 27001 / SOC 2 / 金管會 合規適配器自動對應條文</div>
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
      <h2 style="margin-top:16px">三件我們做得到、別人做不到的事</h2>
      <p>我們同時整合身份事件、會話影像、應用內內容與資料流向四種訊號，形成獨家且越用越完整的信任資料集——這正是三大差異化能力的共同根基。</p>
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
 <text x="19" y="200" font-size="12.5" font-weight="600" fill="#46554E">員工端點</text>

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
 <path d="M272 60 V120" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/><g transform="translate(272,40)"><rect x="-95" y="-20" width="190" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="17" font-weight="800" fill="#1B8F34">Sanctward 即時檢查</text></g>

 <!-- pass card -->
 <g filter="url(#sshad)"><rect x="406" y="118" width="146" height="62" rx="14" fill="#fff" stroke="#CBE8D2" stroke-width="1.6"/></g>
 <g transform="translate(426,149)"><circle r="13" fill="#EAF6EC"/><path d="M-5 0 l3.5 3.5 6.5-7.5" stroke="#1B8F34" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="450" y="144" font-size="13.5" font-weight="700" fill="#3B4540">正常放行</text>
 <text x="450" y="163" font-size="11.5" font-weight="600" fill="#1B8F34">核可 AI · 全程稽核</text>

 <!-- blocked bin -->
 <g filter="url(#sshad)"><rect x="206" y="236" width="134" height="52" rx="13" fill="#fff" stroke="#F0D2D0" stroke-width="1.6"/></g>
 <g transform="translate(228,262)"><circle r="13" fill="#FBEEEE"/><path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#D2473F" stroke-width="2.3" stroke-linecap="round"/></g>
 <text x="250" y="258" font-size="13.5" font-weight="700" fill="#3B4540">異常攔截</text>
 <text x="250" y="277" font-size="11.5" font-weight="600" fill="#C2362E">敏感資料 · 不外流</text>
</svg>
          </div>
          <div class="dcopy">
            <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
            <h3>Shadow AI 治理</h3>
            <p class="lead">「我們公司過去 7 天，有沒有人把客戶資料貼進 ChatGPT？」</p>
            <p class="body">69% 的組織懷疑員工正在使用未授權的 GenAI 工具，平均一家企業有 14 個 AI 工具在跑，IT 卻只掌握其中 4–5 個。要真正管住 Shadow AI 需要「兩隻手」缺一不可——第一隻手在員工端點，看得到 clipboard、看得到瀏覽器連去哪個 LLM；第二隻手在流量收斂點，強制只能透過企業 Gateway 連到核可的模型。純端點 DLP 能看不能管、純網路 DLP 能管不能看，Sanctward 是目前市場唯一兩隻手兼具的廠商。</p>
            <div class="metric"><b>94%</b><span>某金融客戶外洩行為<br>3 個月降幅（情境示意）</span></div>
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
 <text x="19" y="200" font-size="12.5" font-weight="600" fill="#46554E">AI Agent 進場</text>
 <path d="M272 60 V118" stroke="#2DA23F" stroke-width="1.5" stroke-dasharray="2 5" opacity=".5"/>
 <g transform="translate(272,40)"><rect x="-112" y="-20" width="224" height="40" rx="20" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><text x="0" y="6" text-anchor="middle" font-size="16" font-weight="800" fill="#1B8F34">Identity Broker · 核發護照</text></g>
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
 <text x="450" y="144" font-size="13.5" font-weight="700" fill="#3B4540">已納管 Agent</text>
 <text x="450" y="163" font-size="11.5" font-weight="600" fill="#1B8F34">有負責人 · 可稽核</text>
 <g filter="url(#sshad2)"><rect x="206" y="236" width="134" height="52" rx="13" fill="#fff" stroke="#F0D2D0" stroke-width="1.6"/></g>
 <g transform="translate(228,262)"><circle r="13" fill="#FBEEEE"/><path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#D2473F" stroke-width="2.3" stroke-linecap="round"/></g>
 <text x="250" y="258" font-size="13.5" font-weight="700" fill="#3B4540">幽靈 Agent</text>
 <text x="250" y="277" font-size="11.5" font-weight="600" fill="#C2362E">未納管 · 攔截</text>
</svg>
          </div>
          <div class="dcopy">
            <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
            <h3>AI Agent Passport</h3>
            <p class="lead">「我們公司到底有幾個 AI Agent？誰負責？出事找得到人嗎？」</p>
            <p class="body">MCP、function-calling、autonomous workflow，讓每家企業內部很快會有「比員工數還多的 AI Agent」。但這些非人類身份多半是幽靈——沒有負責人、沒有權限邊界、沒有稽核軌跡。Sanctward 把每個 AI Agent 當成可治理的「員工」：發給可驗證的身份護照（private_key_jwt / Client Credentials），綁定負責人、限定可存取的系統與資料、全程稽核，異常即時鎖定、可一鍵撤銷。我們搶先定義這個新類別的標準，後進者要追 2–3 年。</p>
            <div class="metric"><b>47→0</b><span>某科技公司幽靈 Agent<br>1 週納管（情境示意）</span></div>
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
 <text x="200" y="271" font-size="11.5" font-weight="600" fill="#1B8F34">0.18 秒定位連線片段 · contractor.chen</text>
</svg>
          </div>
          <div class="dcopy">
            <span class="badge road"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg>Roadmap 2026</span>
            <h3>Session Intelligence</h3>
            <p class="lead">「給我過去 90 天，所有對正式資料庫 schema change 的證據。」</p>
            <p class="body">傳統錄影是「事後翻數小時影片」的負債；Sanctward 把每一段會話錄影變成可搜尋的「Google for actions」。端側錄影、OCR 全文索引、WORM 不可竄改儲存，讓你用一句自然語言就定位到任何操作發生的精確時間點與連線片段。稽核員拿到的不再是一堆原始 log，而是對應條文、附帶證據片段的現成證據包——SOC 2 稽核證據準備從一週縮短到 30 分鐘。</p>
            <div class="metric"><b>1 週→30 分</b><span>SOC 2 稽核證據<br>準備時間（情境示意）</span></div>
          </div>
        </div>

      </div></div>
      <div class="dcar-foot">
        <div class="dcar-dots" id="ddots"><button class="on"></button><button></button><button></button></div>
        <div class="dcar-nav">
          <button id="dprev" aria-label="上一個"><svg class="ic" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button>
          <button id="dnext" aria-label="下一個"><svg class="ic" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- SOLUTIONS -->
<section class="band" id="solutions">
  <div class="container">
    <div class="shead reveal">
      <span class="eyebrow">Solutions · 解決方案</span>
      <h2>把舊架構的困境，換成零信任的解法</h2>
      <p>從 VPN、遠端存取到身份與合規——六個最常見的場景，Sanctward 一套平台一次補上。</p>
    </div>
    <div class="sols">
      <div class="soln"><div class="sol-copy reveal">
        <span class="sol-k">取代 SSL VPN</span>
        <h3>從「開放整個內網」到「只開放被授權的應用」</h3>
        <p class="intro">傳統 SSL VPN 連上後，等於把整座內網對使用者敞開，而且看不見加密隧道裡究竟發生什麼事——這正是橫向移動與資料外洩最常見的破口。</p>
        <div class="plist pain"><div class="ph">困境</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>過度信任：連上即可橫向移動到任意內網主機。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>看不見內容：加密隧道內的操作無法即時監控。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>缺端點控管：不檢查設備是否合規就放行，帳密被盜即長驅直入。</span></div></div>
        <div class="plist fix"><div class="ph">Sanctward 解法</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>零信任 per-app 授權，後端位置隱藏，沒有「內網」可供橫移。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>每次連線即時信任評分、持續再驗證，異常即降分或強制斷線。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>端點 Agent 檢查設備姿態（OS／加密／EDR）合規才放行。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>連線過程<b style="color:var(--brand-ink)">全程錄影存證</b>，並即時建立 OCR 全文索引——事後可用關鍵字秒級回放、定位任何畫面。</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shV" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pV" d="M92 165 H214 M214 165 C 300 165 330 118 388 100"/></defs>
 <g filter="url(#shV)"><rect x="22" y="138" width="70" height="56" rx="12" fill="#fff" stroke="#E4EAE6" stroke-width="1.5"/></g>
 <circle cx="44" cy="160" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><rect x="58" y="156" width="22" height="5" rx="2.5" fill="#9AA9A1"/><rect x="33" y="176" width="46" height="4" rx="2" fill="#D2DAD4"/>
 <text x="24" y="214" font-size="12" font-weight="600" fill="#46554E">使用者</text>
 <path d="M92 165 H190" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shV)"><rect x="190" y="116" width="96" height="98" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="238" cy="165" r="42" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="40;58" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <path d="M238 130 l16 6 v12 c0 11-7 17-16 21 -9-4-16-10-16-21 v-12 z" fill="#fff" stroke="#1B8F34" stroke-width="2"/><path d="M231 150 l5 5 10-11" stroke="#1B8F34" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="238" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1B8F34">信任閘道</text>
 <text x="238" y="232" text-anchor="middle" font-size="10.5" fill="#46554E">身份 · 設備姿態 · 信任評分</text><g transform="translate(238,278)"><rect x="-90" y="-15" width="180" height="30" rx="15" fill="#fff" stroke="#D2473F" stroke-width="1.4"/><circle cx="-72" cy="0" r="4.5" fill="#D2473F"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/></circle><text x="6" y="4" text-anchor="middle" font-size="10.5" font-weight="700" fill="#C2362E">全程錄影存證 · 可搜尋索引</text></g>
 <g filter="url(#shV)"><rect x="372" y="74" width="132" height="52" rx="12" fill="#fff" stroke="#CBE8D2" stroke-width="1.7"/></g>
 <g transform="translate(392,100)"><circle r="11" fill="#EAF6EC"/><path d="M-4 0 l3 3 5.5-6.5" stroke="#1B8F34" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
 <text x="412" y="97" font-size="12.5" font-weight="700" fill="#3B4540">已授權應用</text><text x="412" y="114" font-size="10.5" fill="#1B8F34" font-weight="600">放行 · 全程錄影存證</text>
 <g filter="url(#shV)"><rect x="372" y="150" width="132" height="46" rx="12" fill="#F8F9F9" stroke="#E6E0E0" stroke-width="1.4"/></g>
 <g transform="translate(390,173)"><rect x="-7" y="-4" width="14" height="11" rx="2.5" fill="#fff" stroke="#9AA0A0" stroke-width="1.4"/><path d="M-4 -4 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#9AA0A0" stroke-width="1.4"/></g>
 <text x="410" y="170" font-size="12" font-weight="600" fill="#7E8C85">未授權系統</text><text x="410" y="186" font-size="10.5" fill="#A23129" font-weight="600">無法橫向移動</text>
 <g filter="url(#shV)"><rect x="372" y="218" width="132" height="46" rx="12" fill="#F8F9F9" stroke="#E6E0E0" stroke-width="1.4"/></g>
 <g transform="translate(390,241)"><rect x="-7" y="-4" width="14" height="11" rx="2.5" fill="#fff" stroke="#9AA0A0" stroke-width="1.4"/><path d="M-4 -4 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#9AA0A0" stroke-width="1.4"/></g>
 <text x="410" y="238" font-size="12" font-weight="600" fill="#7E8C85">未授權系統</text><text x="410" y="254" font-size="10.5" fill="#A23129" font-weight="600">後端位置隱藏</text>
 <path d="M286 174 C 320 178 344 174 372 173" stroke="#D2473F" stroke-width="2" stroke-dasharray="2 6" opacity=".7"/>
 <g transform="translate(348,174)"><circle r="11" fill="#fff" stroke="#D2473F" stroke-width="2"/><path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#D2473F" stroke-width="2" stroke-linecap="round"/></g>
 <path d="M286 196 C 322 222 344 238 372 241" stroke="#D2473F" stroke-width="2" stroke-dasharray="2 6" opacity=".5"/>
 <g opacity="0"><rect x="-14" y="-10" width="28" height="20" rx="6" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><rect x="-8" y="-2" width="16" height="3" rx="1.5" fill="#2DA23F" opacity=".5"/><animateMotion dur="3s" repeatCount="indefinite"><mpath xlink:href="#pV"/></animateMotion><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.08;0.5;0.9;1"/></g>
</svg></div></div>
      <div class="soln rev"><div class="sol-copy reveal">
        <span class="sol-k">取代遠端存取軟體 · 強化遠端協定</span>
        <h3>RDP / VNC / SSH / Telnet，全走一道受控閘道</h3>
        <p class="intro">在端點安裝第三方遠端軟體，等於在公司內開了一條 IT 看不到的常駐通道；而直接對外開放遠端連接埠，則是把攻擊面攤在網路上。兩者都讓「誰連進來、做了什麼」變成黑洞。</p>
        <div class="plist pain"><div class="ph">困境</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>端點常駐通道繞過企業管控，誰連入、做了什麼，看不到也查不到。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>連線碼或帳密一旦外流即遭接管，無錄影、無稽核軌跡。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>對外暴露 RDP／VNC／SSH／Telnet 連接埠，成為直接攻擊入口。</span></div></div>
        <div class="plist fix"><div class="ph">Sanctward 解法</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>四種協定全走 Sanctward 閘道，端點免裝第三方軟體、後端埠不對外。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>全程會話錄影 + OCR 全文搜尋 + 指令稽核；受控帳密注入，維護人員不接觸明文密碼。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>JIT 時限存取、到期零殘留；剪貼簿 DLP 與檔案傳輸 SHA-256 完整性驗證。</span></div></div>
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
 <text x="266" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">Sanctward 閘道</text>
 <path d="M326 172 H408" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shR)"><rect x="414" y="104" width="86" height="34" rx="8" fill="#fff" stroke="#E4EAE6" stroke-width="1.4"/></g><circle cx="427" cy="121" r="3" fill="#2DA23F"/><rect x="437" y="115" width="50" height="5" rx="2.5" fill="#E1E8E3"/><rect x="437" y="124" width="36" height="4" rx="2" fill="#EDF1EE"/>
 <g filter="url(#shR)"><rect x="414" y="146" width="86" height="34" rx="8" fill="#fff" stroke="#E4EAE6" stroke-width="1.4"/></g><circle cx="427" cy="163" r="3" fill="#2DA23F"/><rect x="437" y="157" width="50" height="5" rx="2.5" fill="#E1E8E3"/><rect x="437" y="166" width="36" height="4" rx="2" fill="#EDF1EE"/>
 <g filter="url(#shR)"><rect x="414" y="188" width="86" height="34" rx="8" fill="#fff" stroke="#E4EAE6" stroke-width="1.4"/></g><circle cx="427" cy="205" r="3" fill="#2DA23F"/><rect x="437" y="199" width="50" height="5" rx="2.5" fill="#E1E8E3"/><rect x="437" y="208" width="36" height="4" rx="2" fill="#EDF1EE"/>
 <text x="457" y="240" text-anchor="middle" font-size="10.5" font-weight="600" fill="#7E8C85">後端多台主機 · 不對外</text>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pR1"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite"><mpath xlink:href="#pR2"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0.6s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"><mpath xlink:href="#pR3"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="1.2s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="6" fill="#2DA23F"/><animateMotion dur="2.4s" begin="1.8s" repeatCount="indefinite"><mpath xlink:href="#pR4"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="1.8s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><rect x="-7" y="-6" width="14" height="12" rx="3" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.4s" begin="0.3s" repeatCount="indefinite"><mpath xlink:href="#pRs"/></animateMotion><animate attributeName="opacity" dur="2.4s" begin="0.3s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div>
      <div class="soln"><div class="sol-copy reveal">
        <span class="sol-k">連線共享 · Session Shadow</span>
        <h3>同一個畫面，多人共視、即時接管、全程留痕</h3>
        <p class="intro">遠端協作、教育訓練、緊急處置與稽核監看，常常需要「看到同一個畫面」。Sanctward 讓管理者即時共享任何進行中的 RDP／VNC／SSH／Telnet 連線畫面，並能由「觀看」無縫切換為「接管」，過程全程錄影並即時產生可搜尋索引。</p>
        <div class="plist pain"><div class="ph">困境</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>遠端協助時各自連線、無法同畫面協作，出狀況難以即時介入。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>緊急時需資深人員接手，卻無法即時接管同一個連線。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>監看與教學過程沒有紀錄，事後無法回溯、缺乏稽核軌跡。</span></div></div>
        <div class="plist fix"><div class="ph">Sanctward 解法</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>Multi-Session Shadow：即時觀看任何進行中的連線，多人同時共視同一畫面。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>一鍵由「觀看」切換為「接管」，由授權人員直接操作緊急處置。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>全程錄影 + 即時 OCR 全文索引——誰觀看、誰接管、做了什麼，全部留痕可搜尋。</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pS1" d="M94 78 C 150 96 168 120 186 132"/><path id="pS2" d="M100 168 C 150 168 170 162 186 160"/><path id="pS3" d="M94 258 C 150 232 168 200 186 188"/></defs>
 <!-- shared session screen -->
 <g filter="url(#shS)"><rect x="186" y="92" width="150" height="118" rx="12" fill="#0E1714" stroke="#2DA23F" stroke-width="2"/></g>
 <rect x="186" y="92" width="150" height="22" rx="11" fill="#16241B"/>
 <circle cx="201" cy="103" r="4.6" fill="#D2473F"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/></circle>
 <text x="212" y="107" font-size="10" font-weight="700" fill="#7FE394">REC · RDP LIVE</text>
 <rect x="200" y="128" width="80" height="6" rx="3" fill="#3FA85A" opacity=".8"/><rect x="200" y="142" width="118" height="5" rx="2.5" fill="#2C6E40"/><rect x="200" y="154" width="96" height="5" rx="2.5" fill="#2C6E40"/><rect x="200" y="166" width="110" height="5" rx="2.5" fill="#2C6E40"/><rect x="200" y="184" width="64" height="14" rx="4" fill="#1C5230"/>
 <text x="261" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">共享連線畫面</text>
 <!-- viewers -->
 <g filter="url(#shS)"><rect x="18" y="56" width="74" height="44" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><circle cx="38" cy="78" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><text x="52" y="74" font-size="10.5" font-weight="700" fill="#3B4540">稽核</text><text x="52" y="88" font-size="9" fill="#7E8C85">監看</text>
 <g filter="url(#shS)"><rect x="14" y="146" width="84" height="46" rx="11" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2"/></g><circle cx="35" cy="169" r="9" fill="#fff" stroke="#1B8F34" stroke-width="1.5"/><path d="M31 169 l3 3 5-6" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="50" y="165" font-size="10.5" font-weight="800" fill="#1B8F34">接管</text><text x="50" y="179" font-size="9" fill="#1B8F34">Control</text>
 <circle cx="56" cy="169" r="34" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="28;42" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.45;0" dur="1.8s" repeatCount="indefinite"/></circle>
 <g filter="url(#shS)"><rect x="18" y="238" width="74" height="44" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><circle cx="38" cy="260" r="9" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><text x="52" y="256" font-size="10.5" font-weight="700" fill="#3B4540">訓練</text><text x="52" y="270" font-size="9" fill="#7E8C85">共視</text>
 <path d="M94 78 C 150 96 168 120 186 132" stroke="#DDE7E0" stroke-width="2"/><path d="M100 168 C 150 168 170 162 186 160" stroke="#2DA23F" stroke-width="2"/><path d="M94 258 C 150 232 168 200 186 188" stroke="#DDE7E0" stroke-width="2"/>
 <g opacity="0"><circle r="5" fill="#2DA23F"/><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pS1"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="5.5" fill="#1B8F34"/><animateMotion dur="2.2s" begin="0.5s" repeatCount="indefinite"><mpath xlink:href="#pS2"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0.5s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><circle r="5" fill="#2DA23F"/><animateMotion dur="2.2s" begin="1s" repeatCount="indefinite"><mpath xlink:href="#pS3"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <!-- live index panel -->
 <g filter="url(#shS)"><rect x="358" y="92" width="148" height="118" rx="12" fill="#fff" stroke="#D9E2DC" stroke-width="1.5"/></g>
 <circle cx="376" cy="112" r="7" stroke="#2DA23F" stroke-width="1.8"/><path d="M381 117 l6 6" stroke="#2DA23F" stroke-width="1.8" stroke-linecap="round"/>
 <text x="390" y="116" font-size="10.5" font-weight="700" fill="#1B8F34">即時 OCR 索引</text>
 <g><rect x="372" y="130" width="120" height="20" rx="5" fill="#F4FAF6" stroke="#E0EAE3" stroke-width="1"/><text x="380" y="144" font-size="9.5" fill="#46554E">00:12 開啟資料庫</text><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.15;0.3;1" dur="4s" repeatCount="indefinite"/></g>
 <g><rect x="372" y="156" width="120" height="20" rx="5" fill="#F4FAF6" stroke="#E0EAE3" stroke-width="1"/><text x="380" y="170" font-size="9.5" fill="#46554E">00:48 schema change</text><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.4;0.55;1" dur="4s" repeatCount="indefinite"/></g>
 <g><rect x="372" y="182" width="120" height="20" rx="5" fill="#F4FAF6" stroke="#E0EAE3" stroke-width="1"/><text x="380" y="196" font-size="9.5" fill="#46554E">01:20 匯出報表</text><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.65;0.8;1" dur="4s" repeatCount="indefinite"/></g>
 <text x="432" y="228" text-anchor="middle" font-size="10.5" font-weight="600" fill="#7E8C85">全程留痕 · 可搜尋</text>
</svg></div></div>
      <div class="soln rev"><div class="sol-copy reveal">
        <span class="sol-k">統一身份與 MFA</span>
        <h3>多帳號、多系統、多種 MFA，收斂成一次登入</h3>
        <p class="intro">每套系統各有帳號密碼、各自一套 MFA（甚至完全沒有），管理分散、稽核有盲區，員工離職時帳號更難以一次收回乾淨。</p>
        <div class="plist pain"><div class="ph">困境</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>帳號分散：員工每套系統各一組帳密，IT 重設與回收耗時又易遺漏。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>MFA 不一致：有的 TOTP、有的簡訊、有的全無，體驗差又留風險。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg><span>舊系統不支援 SSO／MFA，長期游離在統一管控之外。</span></div></div>
        <div class="plist fix"><div class="ph">Sanctward 解法</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>表單代填／反向代理／OIDC・SAML 聯邦，9 成以上認證模式皆可納管，舊系統不改造也能接。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>內建 IdP 提供一致 MFA（TOTP），對所有應用統一，並可依風險動態升級驗證。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>AD／LDAP 同步，離職一處停用、全系統即時失效，條件式存取一致套用。</span></div></div>
      </div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shM" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pm1" d="M120 70 C 175 96 200 140 224 158"/><path id="pm2" d="M116 140 C 165 146 198 158 224 162"/><path id="pm3" d="M122 212 C 175 198 198 178 224 168"/><path id="pm4" d="M134 274 C 185 236 202 186 226 172"/><path id="pmo" d="M286 165 H362"/></defs>
 <g font-size="10.5" font-weight="700">
  <g filter="url(#shM)"><rect x="14" y="53" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="27" y="74" fill="#A23129">帳號 A · TOTP</text>
  <g filter="url(#shM)"><rect x="10" y="123" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="23" y="144" fill="#A23129">帳號 B · 簡訊</text>
  <g filter="url(#shM)"><rect x="16" y="195" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="29" y="216" fill="#A23129">帳號 C · 無</text>
  <g filter="url(#shM)"><rect x="28" y="257" width="106" height="34" rx="9" fill="#fff" stroke="#E6E0E0" stroke-width="1.4"/></g><text x="41" y="278" fill="#A23129">帳號 D · ?</text></g>
 <path d="M120 70 C 175 96 200 140 224 158" stroke="#E7DCDC" stroke-width="2"/><path d="M116 140 C 165 146 198 158 224 162" stroke="#E7DCDC" stroke-width="2"/><path d="M122 212 C 175 198 198 178 224 168" stroke="#E7DCDC" stroke-width="2"/><path d="M134 274 C 185 236 202 186 226 172" stroke="#E7DCDC" stroke-width="2"/>
 <g filter="url(#shM)"><circle cx="256" cy="165" r="44" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="256" cy="165" r="44" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="44;58" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <path d="M256 150 l13 5 v9 c0 8-5 13-13 16 -8-3-13-8-13-16 v-9 z" fill="#fff" stroke="#1B8F34" stroke-width="1.8"/><path d="M250 165 l4 4 8-9" stroke="#1B8F34" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="256" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="#1B8F34">統一身份 · 一致 MFA</text>
 <path d="M300 165 H362" stroke="#2DA23F" stroke-width="2"/>
 <g font-size="11" font-weight="600">
  <g filter="url(#shM)"><rect x="362" y="92" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="378" y="121" fill="#3B4540">系統 1</text>
  <g filter="url(#shM)"><rect x="438" y="92" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="454" y="121" fill="#3B4540">系統 2</text>
  <g filter="url(#shM)"><rect x="362" y="150" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="378" y="179" fill="#3B4540">系統 3</text>
  <g filter="url(#shM)"><rect x="438" y="150" width="66" height="50" rx="11" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g><text x="454" y="179" fill="#3B4540">系統 4</text></g>
 <text x="433" y="226" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1B8F34">一次登入 · 全部存取</text>
 <g opacity="0"><rect x="-13" y="-9" width="26" height="18" rx="5" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.3"/><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pm1"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.55;0.62"/></g>
 <g opacity="0"><rect x="-13" y="-9" width="26" height="18" rx="5" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.3"/><animateMotion dur="2.6s" begin="0.5s" repeatCount="indefinite"><mpath xlink:href="#pm2"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="0.5s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.55;0.62"/></g>
 <g opacity="0"><rect x="-13" y="-9" width="26" height="18" rx="5" fill="#FBEEEE" stroke="#D2473F" stroke-width="1.3"/><animateMotion dur="2.6s" begin="1s" repeatCount="indefinite"><mpath xlink:href="#pm3"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.55;0.62"/></g>
 <g opacity="0"><rect x="-7" y="-6" width="14" height="12" rx="3" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.6s" begin="0.4s" repeatCount="indefinite"><mpath xlink:href="#pmo"/></animateMotion><animate attributeName="opacity" dur="2.6s" begin="0.4s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div>
      <div class="soln"><div class="sol-copy reveal"><span class="sol-k">台灣合規</span><h3>台灣資安法 · 個資法 · 金管會，一次對齊</h3><p class="intro">《資通安全管理法》及其分級辦法、《個人資料保護法》、金管會遠端維運要求，對日誌留存、存取控制與稽核軌跡都有明確規範。Sanctward 直接對映這些條文，並由合規適配器自動產出可審證據。</p><div class="plist fix"><div class="ph">符合條文 · 對應做法</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>《資通安全責任等級分級辦法》要求日誌至少保存 6 個月，並記錄帳號／權限變更、登入、IP 與資料存取 → 100+ 稽核事件＋WORM 不可竄改＋Merkle 證據鏈，保存期限可設定。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>高／中責任等級要求重要系統採多因素驗證與嚴格存取控制 → 內建 IdP 一致 MFA（TOTP）、RBAC 細粒度權限、條件式存取、離職即時失效。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>金管會遠端維運／委外稽核要求保留連線紀錄與錄影 → RDP／SSH／VNC／Telnet 全程錄影＋OCR 指令搜尋＋受控帳密注入＋JIT 時限存取。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>《個人資料保護法》第 27 條安全維護措施與存取軌跡 → 個資系統存取全程留痕、敏感欄位自動遮蔽、可回溯舉證。</span></div></div></div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shC1" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pC1" d="M92 160 H188"/></defs>
 <g font-size="10" font-weight="600">
  <g filter="url(#shC1)"><rect x="14" y="92" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="111" font-size="11" fill="#46554E">帳號停用</text>
  <g filter="url(#shC1)"><rect x="14" y="146" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="165" font-size="11" fill="#46554E">會話錄影</text>
  <g filter="url(#shC1)"><rect x="14" y="200" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="219" font-size="11" fill="#46554E">登入紀錄</text></g>
 <text x="20" y="252" font-size="10.5" font-weight="600" fill="#7E8C85">100+ 稽核事件 · WORM</text>
 <path d="M92 107 C 140 110 160 150 188 158" stroke="#DDE7E0" stroke-width="2"/><path d="M92 161 H188" stroke="#DDE7E0" stroke-width="2"/><path d="M92 215 C 140 212 160 172 188 164" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shC1)"><rect x="188" y="116" width="96" height="92" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="236" cy="162" r="40" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="38;54" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <g transform="translate(236,150)" stroke="#1B8F34" stroke-width="2" fill="none"><circle r="9"/><path d="M0 -15 V-11 M0 11 V15 M-15 0 H-11 M11 0 H15 M-10.6 -10.6 l2.8 2.8 M10.6 -10.6 l-2.8 2.8 M-10.6 10.6 l2.8 -2.8 M10.6 10.6 l-2.8 -2.8"/></g>
 <text x="236" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">合規適配器</text>
 <path d="M284 162 H352" stroke="#2DA23F" stroke-width="2"/>
 <g font-weight="600"><g filter="url(#shC1)"><rect x="352" y="78" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,91)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="95" font-size="10.5" fill="#3B4540">資通安全管理法</text><g filter="url(#shC1)"><rect x="352" y="116" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,129)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="133" font-size="10.5" fill="#3B4540">資安責任分級辦法</text><g filter="url(#shC1)"><rect x="352" y="154" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,167)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="171" font-size="10.5" fill="#3B4540">個人資料保護法</text><g filter="url(#shC1)"><rect x="352" y="192" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,205)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="209" font-size="10.5" fill="#3B4540">金管會遠端維運</text></g><rect x="350" y="74" width="158" height="32" rx="8" fill="#2DA23F" opacity="0.1"><animateTransform attributeName="transform" type="translate" values="0,0;0,114;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite"/></rect>
 <g filter="url(#shC1)"><rect x="392" y="232" width="74" height="58" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g>
 <path d="M404 244 h36 l8 8 v32 h-44 z" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><path d="M440 244 v8 h8" fill="none" stroke="#2DA23F" stroke-width="1.5"/><path d="M412 268 l5 5 9-10" stroke="#1B8F34" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="429" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#1B8F34">證據包</text>
 <g opacity="0"><rect x="-10" y="-7" width="20" height="14" rx="4" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath xlink:href="#pC1"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="0s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
 <g opacity="0"><rect x="-10" y="-7" width="20" height="14" rx="4" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.4"/><animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite"><mpath xlink:href="#pC1"/></animateMotion><animate attributeName="opacity" dur="2.2s" begin="1.1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></g>
</svg></div></div><div class="soln rev"><div class="sol-copy reveal"><span class="sol-k">國際合規</span><h3>ISO 27001 · SOC 2 · GDPR · NIS2 · HIPAA</h3><p class="intro">跨足海外須同時對應國際框架的存取控制、稽核記錄與事件應變要求。Sanctward 的控制項可直接對映到各框架的具體條款，一鍵產出證據包。</p><div class="plist fix"><div class="ph">符合條文 · 對應做法</div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>ISO/IEC 27001:2022 A.8.5 安全認證、A.8.15 記錄、A.8.16 監視、A.5.15 存取控制 → 統一 SSO／MFA、100+ 事件記錄、即時監控與信任評分。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>SOC 2 Trust Services CC6 存取控制、CC7 監控與事件回應 → RBAC＋MFA、WORM 稽核軌跡、行為基線異常偵測。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>EU GDPR 第 32 條處理安全、第 30 條處理紀錄、第 33 條 72 小時外洩通報 → 加密與存取控制、完整稽核軌跡、異常即時告警支援通報時限。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>EU NIS2 第 21 條（MFA、存取控制、日誌）與第 23 條事件通報 → 強制 MFA／持續驗證、不可竄改日誌、事件調查證據鏈。</span></div><div class="pi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg><span>US HIPAA §164.312 技術保全（存取控制、稽核控制、認證） → 唯一身份識別、會話錄影與稽核、強認證機制。</span></div></div></div><div class="sol-fig reveal"><svg viewBox="0 0 520 320" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="'Noto Sans TC','Inter',sans-serif">
 <defs><filter id="shC2" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#16782A" flood-opacity="0.12"/></filter>
  <path id="pC2" d="M92 160 H188"/></defs>
 <g font-size="10" font-weight="600">
  <g filter="url(#shC2)"><rect x="14" y="92" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="111" font-size="11" fill="#46554E">帳號停用</text>
  <g filter="url(#shC2)"><rect x="14" y="146" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="165" font-size="11" fill="#46554E">會話錄影</text>
  <g filter="url(#shC2)"><rect x="14" y="200" width="78" height="30" rx="7" fill="#fff" stroke="#E1E8E3" stroke-width="1.3"/></g><text x="30" y="219" font-size="11" fill="#46554E">登入紀錄</text></g>
 <text x="20" y="252" font-size="10.5" font-weight="600" fill="#7E8C85">100+ 稽核事件 · WORM</text>
 <path d="M92 107 C 140 110 160 150 188 158" stroke="#DDE7E0" stroke-width="2"/><path d="M92 161 H188" stroke="#DDE7E0" stroke-width="2"/><path d="M92 215 C 140 212 160 172 188 164" stroke="#DDE7E0" stroke-width="2"/>
 <g filter="url(#shC2)"><rect x="188" y="116" width="96" height="92" rx="16" fill="#EAF6EC" stroke="#2DA23F" stroke-width="2.4"/></g>
 <circle cx="236" cy="162" r="40" fill="none" stroke="#2DA23F" stroke-width="2" opacity="0"><animate attributeName="r" values="38;54" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite"/></circle>
 <g transform="translate(236,150)" stroke="#1B8F34" stroke-width="2" fill="none"><circle r="9"/><path d="M0 -15 V-11 M0 11 V15 M-15 0 H-11 M11 0 H15 M-10.6 -10.6 l2.8 2.8 M10.6 -10.6 l-2.8 2.8 M-10.6 10.6 l2.8 -2.8 M10.6 10.6 l-2.8 -2.8"/></g>
 <text x="236" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1B8F34">合規適配器</text>
 <path d="M284 162 H352" stroke="#2DA23F" stroke-width="2"/>
 <g font-weight="600"><g filter="url(#shC2)"><rect x="352" y="64" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,77)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="81" font-size="10.5" fill="#3B4540">ISO 27001:2022</text><g filter="url(#shC2)"><rect x="352" y="96" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,109)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="113" font-size="10.5" fill="#3B4540">SOC 2（TSC）</text><g filter="url(#shC2)"><rect x="352" y="128" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,141)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="145" font-size="10.5" fill="#3B4540">EU GDPR · 第32條</text><g filter="url(#shC2)"><rect x="352" y="160" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,173)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="177" font-size="10.5" fill="#3B4540">EU NIS2 · 第21條</text><g filter="url(#shC2)"><rect x="352" y="192" width="154" height="26" rx="7" fill="#fff" stroke="#CBE8D2" stroke-width="1.4"/></g><g transform="translate(366,205)"><circle r="8" fill="#EAF6EC"/><path d="M-3.5 0 l2.5 2.5 4.5-5" stroke="#1B8F34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="380" y="209" font-size="10.5" fill="#3B4540">US HIPAA</text></g><rect x="350" y="60" width="158" height="30" rx="8" fill="#2DA23F" opacity="0.1"><animateTransform attributeName="transform" type="translate" values="0,0;0,160;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite"/></rect>
 <g filter="url(#shC2)"><rect x="392" y="232" width="74" height="58" rx="9" fill="#fff" stroke="#CBE8D2" stroke-width="1.5"/></g>
 <path d="M404 244 h36 l8 8 v32 h-44 z" fill="#EAF6EC" stroke="#2DA23F" stroke-width="1.5"/><path d="M440 244 v8 h8" fill="none" stroke="#2DA23F" stroke-width="1.5"/><path d="M412 268 l5 5 9-10" stroke="#1B8F34" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="429" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#1B8F34">證據包</text>
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
      <div class="mi"><b>50+</b><span>原生多租戶 · MSP-Ready</span></div>
      <div class="mi"><b>99.9%</b><span>1,500 端點實測自動上線</span></div>
      <div class="mi"><b>100+</b><span>稽核事件 · WORM 不可竄改</span></div>
      <div class="mi"><b>1–2 週</b><span>快速導入上線</span></div>
    </div>
  </div>
</section>

<!-- CASES tabbed -->
<section class="band" id="cases">
  <div class="container">
    <div class="shead reveal">
      <span class="eyebrow">Real-world Scenarios</span>
      <h2>四個典型應用場景</h2>
      <p>從痛點到量化成效——選擇產業查看。</p>
    </div>
    <div class="casewrap reveal">
      <div class="ctabs" id="ctabs">
        <button class="ctab on" data-c="0"><span class="k">Manufacturing</span><h4>製造業</h4></button>
        <button class="ctab" data-c="1"><span class="k">Banking</span><h4>金融業</h4></button>
        <button class="ctab" data-c="2"><span class="k">Zero Trust</span><h4>科技業遠端</h4></button>
        <button class="ctab" data-c="3"><span class="k">MSP</span><h4>服務商</h4></button>
      </div>
      <div id="cpanes">
        <div class="cpane on">
          <div class="cbox">
            <span class="ctag">Manufacturing · 製造業</span>
            <h3>500 員工、5 個 IT、十幾套系統</h3>
            <div class="c2">
              <div class="pain"><div class="h">痛點</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>IT 每週 10+ 小時處理密碼重設</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>離職帳號 3 個月後才發現殘留</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>外包維護須給設備密碼</li>
              </ul></div>
              <div class="sol"><div class="h">Sanctward 解法</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>全系統整合統一登入、隱藏真實位置</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>AD 同步，離職當天停用、足跡永久保留</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>外包走 JIT 全程錄影，免第三方 VPN</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>−80%</b><span>IT 帳號管理工時</span></div><div><b>0</b><span>員工／廠商帳號殘留</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">Banking · 金融業</span>
            <h3>金管會遠端維運稽核</h3>
            <div class="c2">
              <div class="pain"><div class="h">痛點</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>VPN + RDP 無法強制錄影</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>廠商、IT 都知道密碼，外流風險高</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>翻錄影找指令耗時數天</li>
              </ul></div>
              <div class="sol"><div class="h">Sanctward 解法</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>遠端維運走閘道強制錄影</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>代登入維護人員不接觸密碼</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>OCR 全文搜尋秒速定位指令</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>天→小時</b><span>稽核調查時間</span></div><div><b>0</b><span>特權帳號外流</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">Zero Trust · 科技業</span>
            <h3>全員遠端、跨國分布、大量外包</h3>
            <div class="c2">
              <div class="pain"><div class="h">痛點</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>帳號共用 / 異常登入難偵測</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>外包權限授予與回收混亂</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>跨國登入真偽難辨</li>
              </ul></div>
              <div class="sol"><div class="h">Sanctward 解法</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>Agent 部署所有受管設備，狀態即時透明</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>Trust Policy 分群：研發 ≥85、外包限工時</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>Impossible Travel 自動降分</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>即時可見</b><span>CISO 信任儀表板</span></div><div><b>0</b><span>外包殘留帳號</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">MSP · 服務商</span>
            <h3>自建系統服務 30 個客戶</h3>
            <div class="c2">
              <div class="pain"><div class="h">痛點</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>為每客戶維護獨立帳號體系</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>各客戶環境獨立，無法統一管理</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>維運成本隨客戶數線性成長</li>
              </ul></div>
              <div class="sol"><div class="h">Sanctward 解法</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>Platform Admin 建立 30+ 租戶</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>五層完全隔離，互不干擾</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>一個介面管理所有客戶、品牌化入口</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>30+</b><span>租戶單平台管理</span></div><div><b>5 層</b><span>完整架構隔離</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VS LEGACY -->
<section class="band tight">
  <div class="container">
    <div class="shead reveal"><span class="eyebrow">Sanctward vs Legacy</span><h2>把分散的多套產品，換成一套原生整合平台</h2></div>
    <div class="cmp reveal">
      <div class="cmp-row cmp-head"><div>關鍵維度</div><div>傳統多套組合</div><div class="c-s">Sanctward</div></div>
      <div class="cmp-row"><div class="label">管理介面</div><div class="dim">5 個分散介面</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>一個統一介面</div></div>
      <div class="cmp-row"><div class="label">三年總成本 TCO</div><div class="dim">基準高，需整合多家</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>約 1/3 · 單一品牌</div></div>
      <div class="cmp-row"><div class="label">部署週期</div><div class="dim">3–6 個月</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>2 週–1 個月</div></div>
      <div class="cmp-row"><div class="label">資料主權</div><div class="dim">資料在 SaaS 雲端</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>完全 On-Premises</div></div>
      <div class="cmp-row"><div class="label">多租戶</div><div class="dim">需自行整合套裝</div><div class="c-s"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>原生多租戶平台</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta" id="contact">
  <div class="container">
    <div class="cta-in reveal">
      <h2>看 Sanctward 如何在你的環境落地</h2>
      <p>30 分鐘線上 Demo，依你的產業與系統環境，示範身份、零信任、特權存取的整合運作。</p>
      <div class="hs-cta">
        <a class="btn btn-primary btn-lg" href="#">預約 Demo</a>
        <a class="btn btn-ghost btn-lg" href="#">下載產品總覽</a>
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
