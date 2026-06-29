# 平台頁子頁規劃稿（審閱用）

> 用途：把「平台」頁拆成六個獨立路由子頁的完整規劃，供審閱。確認後才寫程式。
> 日期：2026-06-29 ・ 狀態：待審
> 內容來源：`KM/01_Projects/sanctward/`（products 全功能清單、product-intro、iae 策略、completed/reports、user-manual）
> 決策前提：六個獨立路由子頁 ・ 中英雙語同步 ・ IAE 對外全名統一為 **Intelligent Auth Engine**

---

## 0. 總體資訊架構（IA）

現有 `/platform` 為**單頁錨點版**：Hero → Signal Chain 圖 → 5 張能力卡（IAM/SSO、PAM、ZTA、Endpoint、Compliance）→ 三張 IAE IdP 流程圖。

**規劃後：**

- `/platform`（**保留為總覽頁，內容不變**）：維持現有 Hero、Signal Chain、能力卡與流程圖；差別只在每張卡 / 區塊加一個「了解更多 →」深連到對應子頁。
- 新增六個子頁路由：

| # | 子頁 | 路由 slug | 導覽標籤（zh / en） | 整併自現有卡 |
|---|------|----------|---------------------|--------------|
| 1 | SSO | `/platform/sso` | 單一登入 SSO / SSO | `cap-iam` |
| 2 | PAM / JIT | `/platform/pam` | 特權存取 PAM / PAM & JIT | `cap-pam` |
| 3 | ZTA / Endpoint | `/platform/zta` | 零信任與端點 / Zero Trust & Endpoint | `cap-zta` + `cap-endpoint` |
| 4 | IAE | `/platform/iae` | 身分驗證引擎 IAE / Intelligent Auth Engine | 現有三張 IdP 流程圖 |
| 5 | Compliance | `/platform/compliance` | 合規 / Compliance | `cap-compliance` |
| 6 | Reports | `/platform/reports` | 報表中心 / Reports | （新）|

**導覽列**：`平台` 主項下加 dropdown（或 mega-menu）列六個子頁；行動版收進手風琴。子頁之間頁尾互相串連（上一個 / 下一個 + 回總覽）。

---

## 1. 共用版型（六頁一致）

每個子頁沿用現有 `band / container / reveal` 樣式系統，固定骨架：

1. **Page Hero**：eyebrow（功能英文代號）+ H1 + 一句話定位 + 主 CTA（預約 Demo / 聯絡我們）。
2. **它解決什麼**：3–4 條痛點 → 解法（沿用現有 `example` / `plist` 卡片樣式）。
3. **運作原理**：1–2 張 SVG 流程圖（多數可從現有 Platform.vue 或 KM 流程圖移植 / 重繪）。
4. **核心功能**：分組功能清單（icon + 標題 + 短描述）。
5. **應用場景**：2–3 個情境短段。
6. **規格 / 成熟度**（選配）：技術規格表或完工狀態標示。
7. **頁尾導覽**：上一頁 / 下一頁 / 回平台總覽 + CTA。

**視覺資產**：線性 icon 沿用現有 `IconDefs.vue`（不足再補）；流程圖用內嵌 SVG（與現有風格一致，綠線 + 動畫虛線）。IAE 頁另有實機截圖可用。

---

## 2. i18n 規劃（中英雙語）

- 沿用現有 `src/i18n/zh-Hant.json` + `src/i18n/en.json` + `$t()`。
- 每個子頁用獨立 key 前綴，避免衝突：`sso_*`、`pam_*`、`zta_*`、`iae_*`、`cmp_*`、`rpt_*`。
- 流程圖內文字一律走 `$t()`（與現有 Platform.vue 一致）。
- 交付時每個 key 同時補 zh-Hant 與 en 兩份；英文以 `05-website-copy` 既有英文化用語為基準，其餘新譯。

---

## 3. 各子頁內容規劃

### 子頁 1 — SSO（含 IAM / Account Management）

- **路由**：`/platform/sso`
- **定位（H1）**：一次登入，安全打通你所有的應用程式
- **內容來源**：全功能清單 §1.1 / §1.2 / §1.5 / §1.6 / §1.7、§6.4
- **區塊**：
  1. Hero：一組身分登入所有應用，含 22 個內建範本、老舊系統也納管。
  2. 痛點→解法：記一堆帳密 / 老舊系統不支援現代登入 / 離職帳號收不乾淨 / 多系統權限分散。
  3. 七種代登入模式表：`proxy_vault`、`proxy_header`、`reverse_proxy`、`federated_gateway`、`iae_idp`、`custom`、`protocol_relay`（標示已上線 / 規劃中）。
  4. 22 個 App 範本目錄（圖示牆：WordPress、FortiGate、QNAP、OWA、GitLab、SAP…）+ 三層範本架構。
  5. **帳號管理（Account Management）**：使用者 / 群組（巢狀）/ 角色 RBAC / App 授權（含條件式 IP/時間/MFA）/ 密碼政策 / CSV 匯入匯出 / 儀表板統計。
  6. LDAP / AD 目錄同步：屬性對映、群組對映、JIT 佈建、同步狀態。
  7. 自訂腳本引擎：Layer 1 視覺化 + Layer 3 Lua（sso_helpers SDK、Monaco 編輯器）。
- **流程圖**：移植現有 `cap-iam` 的 SSO 圖（SAP/GitLab/QNAP → Sanctward IdP → 外部 IdP）。
- **場景**：員工單一登入、統一身分中樞、老舊系統納管、MSP 多租戶交付。

### 子頁 2 — PAM / JIT

- **路由**：`/platform/pam`
- **定位（H1）**：把每一次特權存取，錄下來、管起來、到點自動收回
- **內容來源**：全功能清單 §3、§5
- **區塊**：
  1. Hero：瀏覽器即可遠端、全程錄影、JIT 到期零殘留。
  2. 痛點→解法：外包/維運帳號權限收不回、看不到對方做了什麼、帳密外流。
  3. 遠端存取：Web RDP（免裝用戶端、Guacamole、多螢幕、音訊、磁碟/印表機重導向）、Native Client（H.264 + QUIC 雙通道、< 15ms、300–500 session/核）、VNC、Session 管理（即時監控 / 強制斷線 / Shadow 接管）。
  4. **JIT 即時授權**：申請 → 核可 → 倒數 → 自動撤離，零殘留權限。
  5. 會話稽核與 DLP：端側錄影 + WORM、OCR 全文搜尋、剪貼簿 DLP 四級、受控帳密注入（使用者看不到明文）、Posture Lock。
- **流程圖**：移植現有 `cap-pam` 的「維運人員 → JIT → 錄影/OCR 閘道 → 伺服器」圖。
- **場景**：外包維運稽核、緊急存取、金管會遠端維運錄影。

### 子頁 3 — ZTA / Endpoint

- **路由**：`/platform/zta`
- **定位（H1）**：每一次連線都重新證明可信，裝置不合規就當場降權
- **內容來源**：全功能清單 §2、§4、`user-manual/endpoint-agents-settings-manual.md`
- **區塊**：
  1. Hero：信任分數驅動的持續驗證 + 端點艦隊管理。
  2. ZTA 完整路徑：Z0–Z11 階段表（信任串流、行為基線、TPM 綁定、持續再驗證、Merkle 證據鏈、WORM、反竄改演練）。
  3. 信任推斷引擎：多維度評分（Geo-IP / 行為慣性 / 不可能移動 / 姿態 / 情報）→ 0–100 分級決策（>90 准 / 60–90 加 MFA / <60 拒）。
  4. 設備鑑別：硬體指紋、mTLS（Per-Tenant Agent CA）、姿態檢查（BitLocker/FileVault/EDR）、設備庫存。
  5. **端點艦隊管理**：Agent 安裝（MSI/deb/pkg）、Enrollment Token、自動審批、生命週期（憑證續期/撤銷/換機/復活/遠端移除）、OS 使用者綁定、Probe 健康檢測（1500 端點 99.4% 自動上線）。
- **流程圖**：移植現有 `cap-zta`（信號 → 引擎 → 分級）與 `cap-endpoint`（安裝 → 註冊 → 審批 → 姿態檢查 → 餵信任引擎）兩張圖。
- **場景**：零信任遠端辦公、設備合規閘門、異常自動踢線。

### 子頁 4 — IAE（Intelligent Auth Engine）★ 內容最完整

- **路由**：`/platform/iae`
- **定位（H1）**：你的身分中樞——OIDC、SAML、MFA、RADIUS 一套到位
- **內容來源**：`strategy/iae/`（01-feature-catalog、05-website-copy、04/10/12 計畫）、`products/iae-poc-playbook.md`、`products/picturies/iae-poc/*.png`、`battlecard/radius-battlecard.md`、`user-manual/radius-service-manual.md`
- **區塊**：
  1. Hero + 一句話定位：一個身分核心，三個角色（IdP / 聯邦 RP / 無密碼前門）。
  2. 角色總覽圖：外部 IdP → 身分核心 → 下游 App（移植 05-website-copy 的 mermaid，重繪為 SVG）。
  3. **OIDC**：完整端點、Grant Types、三種 client 認證、Token 設計、Relay 反向代理子模式、M2M 安全套件。
  4. **SAML**：當 SP（串外部）+ 當 IdP（發 assertion，AWS Console 聯邦錨點）、SLO、加密 assertion。
  5. **MFA**：Email OTP / TOTP / Passkey、聯邦 step-up、對外 MFA 驗證 API（Duo 式）。
  6. **RADIUS**：當下游認證伺服器（帳密 + MFA Access-Challenge + 回傳屬性）、CoA 零信任踢線、RadSec、每租戶自動配埠。
  7. 運作流程圖：移植現有平台頁三張 IdP 流程圖（OIDC IdP、SAML/MFA、M2M）+ 可選 RADIUS 流程。
  8. 實機截圖區（選配）：用 `iae-poc/` 截圖做產品實拍輪播（OIDC client 表單、SAML、MFA service、RADIUS 屬性…）。
  9. 差異化摘要：Relay 代理、M2M 套件、per-tenant 簽章、SAML↔OIDC 協定橋接、長尾覆蓋。
- **完工狀態（對客戶誠實，依 06-29 POC 手冊）**：OIDC / SAML（IdP+SP/SLO/加密）/ MFA / RADIUS R1–R7・R9 **皆已上線**；**唯一 roadmap = RADIUS R8 EAP-TLS**，網站不列為已上線。
- **場景**：員工 SSO、AWS 一鍵聯邦、老系統 RADIUS 登入、機器對機器 API。

### 子頁 5 — Compliance

- **路由**：`/platform/compliance`
- **定位（H1）**：把每天的稽核日誌，一鍵變成稽核員可採信的合規證據
- **內容來源**：`products/product-intro/compliance-reporting.md`、全功能清單 §5.8、Z9 合規適配器
- **區塊**：
  1. Hero + 一句話：自動對應法規控制項，產出雙語、租戶 CA 簽章、Merkle 防竄改的稽核級報告。
  2. 痛點→解法表（手動撈日誌 vs 數秒產出；自己說有做 vs 每筆證據可驗證）。
  3. 報告結構（v2 稽核級 13 章節）：封面 / 文件控制 / 執行摘要 / 適用聲明 / 範圍 / 控制總覽 / 例外與缺口 / 改善追蹤 / 證據明細 / 管理聲明 / CUEC / 證據完整性 Merkle root / 頁尾。
  4. 核心差異化：租戶 CA 簽章、Merkle 防竄改、框架即資料、雙語、PII 遮罩、自動缺口、成熟度模型。
  5. 支援框架：ISO 27001:2022、NIST 800-207/CSF 2.0、SOC 2、SSCA、金管會、台灣資安法、APPI 等（七大框架）。
- **流程圖**：移植現有 `cap-compliance`（事件 → 合規適配器 → 框架對應 → 簽章封裝）圖。
- **場景**：稽核季快速出證、跨國雙語稽核、金融/半導體產業合規。

### 子頁 6 — Reports（報表中心）

- **路由**：`/platform/reports`
- **定位（H1）**：平台唯一的報表中心——選框架、選期間、數秒產出
- **內容來源**：`strategy/completed/reports-subsystem/`（架構決策 + v1 計畫）、`reports-v2/`、`manuals/user/reports/reports-hub`
- **設計依據**：KM 架構決策已把報表抽成**平台級水平能力**（Report Engine + provider registry），Compliance 只是第一個 provider → 故 Reports 獨立成子頁，與 Compliance 區分但互相深連。
- **區塊**：
  1. Hero + 一句話：全平台單一報表入口，水平引擎 + 垂直 provider。
  2. 它是什麼：為什麼報表要抽成平台級能力（避免每個功能各長一個產報表的地方）。
  3. 報表能力：選框架 → 選期間 → 產出（PDF）、排程 + 投遞（email / SFTP / NFS）、租戶 CA 簽章、PII 遮罩、RBAC + License 控管。
  4. Provider 生態：Compliance（首個 provider，深連子頁 5）、未來使用者 / App / 稽核 / 授權報表。
  5. 與 Compliance 的關係圖：水平引擎 ←→ 各 provider。
- **場景**：集中產報、排程定期投遞、未來擴充各類營運報表。

---

## 4. 需要新增 / 修改的檔案（預估）

- `src/router/index.js`：加六條子路由。
- `src/views/platform/`：新增 `Sso.vue`、`Pam.vue`、`Zta.vue`、`Iae.vue`、`Compliance.vue`、`Reports.vue`（六檔）。
- `src/views/Platform.vue`：每張卡 / 區塊加「了解更多 →」深連（內容不動）。
- `src/components/SiteNav.vue`：平台 dropdown 加六子項。
- `src/i18n/zh-Hant.json` + `en.json`：六組新 key（中英各一份）。
- `src/components/IconDefs.vue`：補缺的線性 icon。
- （IAE 頁）`public/` 或 `src/assets/`：放 `iae-poc/` 精選實機截圖。

---

## 5. 待你決定 / 確認的小點

1. **導覽列形式**：平台用下拉選單即可，還是要做 mega-menu（六子頁附小圖示與一句話）？
2. **IAE 實機截圖**：要不要放實拍截圖到 IAE 頁？（會更有說服力，但需確認截圖無敏感資訊／可對外）
3. **總覽頁能力卡**：現有 5 張卡，新結構是 6 項（ZTA 與 Endpoint 合併、IAE 與 Reports 為新增）。總覽頁的卡片要不要同步調成 6 張對齊子頁？（你說「原本平台內容不變」——預設我**不動**總覽頁卡片內容，只加深連，請確認。）
4. **CTA 目的地**：各子頁 CTA 接 `/contact` 表單即可？

---

確認以上後，我建議從 **IAE 子頁**先做完整一頁當樣板（中英 + 流程圖 + 截圖），你滿意版型再套到其餘五頁。
