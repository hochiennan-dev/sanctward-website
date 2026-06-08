# Sanctward 官方網站

森沃科技股份有限公司（SANCTWARD CO., LTD.）官方網站。

> AI 時代的企業信任作業系統 — 整合身份、零信任、特權存取、端點與合規的統一信任平台。

## 目前狀態

- `prototype/index.html` — 首頁原型（單檔靜態 HTML，可直接部署）。
  - 內容：Hero 跑馬燈、3D 旋轉 Logo、動態節點背景、平台分頁、三大差異化動態圖、六大解決方案（含台灣／國際合規）、應用案例、合規對應、CTA。
  - 外部資源：Three.js（cdnjs）、Google Fonts，皆由 CDN 載入，無需建置。
- `prototype/assets/` — Logo 等靜態資源。
- `prototype/_headers` — Cloudflare Pages 安全標頭與快取設定。

## 部署到 Cloudflare Pages（GitHub 自動部署）

1. 將本專案推送到 GitHub（見下方）。
2. 登入 Cloudflare → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**。
3. 選擇本 repo，設定：
   - **Framework preset**：`None`
   - **Build command**：留空
   - **Build output directory**：`prototype`
4. **Save and Deploy**，完成後會得到 `https://<專案名>.pages.dev` 網址。
5. （之後）自訂網域：Pages → Custom domains → 加入網域，依指示設定 DNS。

> 每次 `git push` 到主分支，Cloudflare 會自動重新部署。

## 推送到 GitHub

```bash
# 在專案根目錄
git add .
git commit -m "your message"
# 在 GitHub 建立空 repo 後：
git remote add origin https://github.com/<帳號>/<repo>.git
git branch -M main
git push -u origin main
```

## 注意事項

- `.gitignore` 已排除 `*.pptx` / `*.pdf`（機密簡報，請勿提交）、建置產物與除錯素材。
- 本機預覽：因瀏覽器封鎖 `file://` 載入，請用本機伺服器，例如：
  ```bash
  cd prototype && python3 -m http.server 8080   # 開 http://localhost:8080
  ```

## 後續路線圖

1. ✅ 首頁靜態原型 → Cloudflare Pages 上線
2. ⬜ 轉為 Vue 3 + Vite 專案（同 repo，build output 改為 `dist`）
3. ⬜ 補頁面：關於我們、聯絡 → 課程＋報名（Cloudflare Pages Functions + D1 資料庫）
