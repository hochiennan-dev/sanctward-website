# Sanctward 官方網站

森沃科技股份有限公司（SANCTWARD CO., LTD.）官方網站。

> AI 時代的企業信任作業系統 — 整合身份、零信任、特權存取、端點與合規的統一信任平台。

## 技術架構

- **Vue 3 + Vite**（建置輸出至 `dist/`）
- **vue-router**（history 模式，已含 SPA fallback `public/_redirects`）
- **Three.js**（npm 套件）— 首頁 3D 旋轉 Logo
- 部署：**Cloudflare Pages**（GitHub 自動部署）

## 專案結構

```
index.html            Vite 進入點
src/
  main.js             掛載 App、router、全域樣式
  router/index.js     路由（目前：/ → Home）
  assets/styles.css   全域樣式（設計 token、所有區塊樣式）
  App.vue             共用框架：IconDefs + NetworkBg + SiteNav + <router-view> + SiteFooter
  views/Home.vue      首頁所有區塊 + 互動 JS（跑馬燈、分頁、信任分數）
  components/
    SiteNav.vue       導覽列（含手機選單、捲動效果）
    SiteFooter.vue    頁尾
    Logo3D.vue        Three.js 3D Logo（可重用）
    NetworkBg.vue     動態綠點網狀背景
    IconDefs.vue      共用 SVG 圖示與 mark 定義
public/
  assets/             靜態資源（wordmark 等）
  _headers            Cloudflare 安全標頭 / 快取
  _redirects          SPA fallback（/* → /index.html 200）
prototype/            （舊版單檔靜態原型，保留備查，可日後刪除）
```

## 本機開發

```bash
npm install        # 安裝相依套件（第一次）
npm run dev        # 開發伺服器 http://localhost:5173
npm run build      # 產生正式版到 dist/
npm run preview    # 預覽 dist/
```

## 部署到 Cloudflare Pages

連到 GitHub repo 後，在 Pages 專案設定：

- **Framework preset**：`Vue`（或 `None`）
- **Build command**：`npm run build`
- **Build output directory**：`dist`

> 每次 `git push` 到主分支會自動重新建置與部署。
> 自訂網域 `sanctward.com` 已綁定；之後新增路由也會走 SPA fallback 正常運作。

## 推送到 GitHub

```bash
git add .
git commit -m "your message"
git push
```

## 注意事項

- `.gitignore` 已排除 `*.pptx` / `*.pdf`（機密簡報，請勿提交）、`node_modules/`、`dist/`。
- 本機建置已在隔離環境驗證可成功編譯（`vite build` 通過、`dist` 產出正確）。

## 後續路線圖

1. ✅ 首頁靜態原型 → Cloudflare Pages 上線
2. ✅ 轉為 Vue 3 + Vite 專案
3. ⬜ 補頁面：關於我們、聯絡 → 課程＋報名（Cloudflare Pages Functions + D1 資料庫）
