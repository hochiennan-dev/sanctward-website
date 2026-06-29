# 平台頁改版 — 交接說明（給 Claude Code CLI 接手）

> 用途：讓新的 Claude Code session 不靠聊天記憶、只靠本檔 + repo 現況即可接續。
> 日期：2026-06-29 ・ 分支：`main`（改動已在工作樹，**尚未 commit**）
> 搭配閱讀：[`docs/platform-subpages-plan.md`](./platform-subpages-plan.md)（六子頁完整規劃與內容來源）

---

## 0. 一句話現況

平台頁改版「第一階段」已完成並通過編譯驗證：`/platform` 總覽頁維持不變，新增六個能力子頁、平台 mega-menu 導覽、總覽頁 Reports 卡與各卡深連，全部中英雙語。**改動尚未 commit/push**（在 Cowork 沙箱無法操作 git，詳見 §6）。

---

## 1. 任務目標（使用者原始需求）

把網站「平台」頁拆成六個獨立路由子頁，原本平台總覽內容不變：

| 子頁 | 路由 | 導覽標籤（zh / en） |
|---|---|---|
| SSO（含 IAM / 帳號管理） | `/platform/sso` | 單一登入 SSO / Single Sign-On |
| PAM / JIT | `/platform/pam` | 特權存取 PAM / JIT |
| ZTA / Endpoint | `/platform/zta` | 零信任與端點 |
| IAE | `/platform/iae` | 身分驗證引擎 IAE |
| Compliance | `/platform/compliance` | 合規 |
| Reports | `/platform/reports` | 報表中心 |

**已拍板決策**：六個獨立路由子頁 ・ 中英雙語同步 ・ IAE 全名 = **Intelligent Auth Engine** ・ 導覽用 **mega-menu** ・ 總覽頁**補一張 Reports 卡** ・ 五頁**要 SVG 流程圖**。

---

## 2. 已完成（檔案清單）

**新增**
- `src/views/platform/Sso.vue` `Pam.vue` `Zta.vue` `Iae.vue` `Compliance.vue` `Reports.vue` — 六個子頁
- `docs/platform-subpages-plan.md`、`docs/platform-revamp-handoff.md`（本檔）

**修改**
- `src/router/index.js` — 加六條子路由（`platform-sso` … `platform-reports`）
- `src/components/SiteNav.vue` — 「平台」改為 mega-menu 下拉（桌機 hover 六項卡片）+ 行動版縮排子選單
- `src/views/Platform.vue` — 總覽頁**內容不動**，只在五張能力卡加「了解更多 →」深連、IAE 區塊加深連、並**新增第六張 `cap-reports` 卡**（含自有 SVG）
- `src/assets/styles.css` — 新增共用 `.sp-*` class（子頁卡片/格線/流程圖）+ `.nav-drop/.mega/.mm-sub` mega-menu 樣式
- `src/i18n/zh-Hant.json` / `src/i18n/en.json` — 新增大量 key（見 §4）

---

## 3. 頁面結構（六頁一致骨架）

每個子頁固定段落（沿用站台既有 `band / container / reveal / shead / eyebrow` 樣式）：

1. Page Hero（eyebrow + h1 + 一句話定位）
2. 三支柱（`.sp-grid3` + `.sp-card`）
3. **運作原理：SVG 流程圖**（`.sp-flow`，綠線動畫，節點走 `$t` key）
4. 核心能力（`.sp-grid2` + `.sp-capcard`，每卡標題 + 數條 `.sp-pi` 勾選項）
5. 應用場景（`.sp-grid3` + `.sp-card`）
6. CTA（沿用 `cta` / `cta-in`）

IAE 頁較完整，額外有：三角色卡、四協定卡（OIDC/SAML/MFA/RADIUS）、重用自總覽頁的三張 IdP 流程圖、差異化、**完工狀態表**（OIDC/SAML/MFA/RADIUS 已上線；唯 RADIUS EAP-TLS 標 Roadmap）。

---

## 4. i18n key 命名

- 子頁內容：前綴 `sso_ / pam_ / zta_ / iae_ / cmp_(compliance) / rpt_(reports)`
- 流程圖：`{prefix}_dg_eye / _dg_h / _dg_n{i}_t / _dg_n{i}_s`
- mega-menu：`mm_head / mm_{sso,pam,zta,iae,cmp,rpt}_t / _d`
- 總覽 Reports 卡：`pf_rpt_h / _p / _1.._3 / _eg`
- 深連文字：`learn_more`
- **規則**：每個 key 必須 zh-Hant + en 兩邊都有。驗證指令見 §5。

---

## 5. 驗證（已通過，可重跑）

本機可用 Vite 直接編譯；若只要快速檢查 SFC + key 完整性：

```bash
node -e '
const fs=require("fs");const {parse,compileTemplate}=require("@vue/compiler-sfc");
const zh=JSON.parse(fs.readFileSync("src/i18n/zh-Hant.json","utf8"));
const en=JSON.parse(fs.readFileSync("src/i18n/en.json","utf8"));
for(const f of ["views/Platform","views/platform/Sso","views/platform/Pam","views/platform/Zta","views/platform/Iae","views/platform/Compliance","views/platform/Reports","components/SiteNav"]){
  const src=fs.readFileSync("src/"+f+".vue","utf8");
  const {descriptor,errors}=parse(src);
  const c=compileTemplate({source:descriptor.template.content,filename:f,id:f});
  const keys=[...new Set([...src.matchAll(/\$t\(.(\w+)./g)].map(m=>m[1]))];
  const mz=keys.filter(k=>!(k in zh)),me=keys.filter(k=>!(k in en));
  console.log(f.split("/").pop(),(errors.length||(c.errors&&c.errors.length))?"ERR":"OK",mz.length?("MISSzh:"+mz):"",me.length?("MISSen:"+me):"");
}'
```

上次結果：八個檔全 OK、無缺 key。

---

## 6. 上線步驟（Claude Code 在本機可直接做）

> Cowork 沙箱用同步掛載（virtiofs），**只能新增/修改、不能刪除**，所以 git（需刪暫存檔與 lock）在沙箱失敗，並留下一個空的 `.git/index.lock`。CLI 在本機有完整權限，照下面做即可。

```bash
cd /Volumes/SSD_1T/DEV/Sanctward-website
rm -f .git/index.lock          # 移除沙箱留下的空鎖檔
npm run build                  # 本機建置確認（沙箱因 rollup 原生檔不相容無法跑）
git add -A
git commit -m "feat(platform): 新增六個能力子頁、mega-menu 導覽與 Reports 總覽卡"
git push origin main
```

**部署**（`wrangler.jsonc` = Worker 服務 `dist/` 靜態資產）：
- 若 Cloudflare 接 GitHub 自動部署 → push 即上線。
- 若手動 → `npx wrangler deploy`（需 Cloudflare 登入）。
- 先確認是哪一種。

---

## 7. 待決 / 後續（可選）

- 流程圖節點文字精修（字數/斷行），ZTA 第 4 節「准許/加驗/拒絕」可考慮拆成三個結果框。
- 英文版逐頁人工校對（目前 en 已可用，但建議行銷語氣再潤）。
- 規劃稿 §5 其餘細項：CTA 目的地是否全接 `/contact`（目前是）。
- 視需要在 IAE 頁加實機截圖（素材在 KM `01_Projects/sanctward/products/picturies/iae-poc/*.png`，需確認可對外）。
- 其他頁（首頁/解決方案）是否要呼應新的六分類。

---

## 8. 內容來源（KM，勿杜撰）

所有文案取自 KM vault `/Volumes/SSD_1T/DEV/KM/01_Projects/sanctward/`：
- `products/feature-list/sanctward-full-feature-list.md`（全功能清單，主來源）
- `products/product-intro/compliance-reporting.md`（合規）
- `products/iae-poc-playbook.md`（IAE 四功能完工狀態）
- `strategy/iae/`（IAE 策略、05-website-copy 交付文案）
- `strategy/completed/reports-subsystem/`、`reports-v2/`（報表子系統架構）
