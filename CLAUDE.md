# CLAUDE.md — Sanctward Website

## KM Integration

- KM Vault Path: /Volumes/SSD_1T/DEV/KM
- KM Project Slug: sanctward-website
- KM Project Index: /Volumes/SSD_1T/DEV/KM/01_Projects/sanctward-website/index.md
- KM Project Roadmap: /Volumes/SSD_1T/DEV/KM/01_Projects/sanctward-website/roadmap.md

CC 啟動於此 repo 時應：
1. 讀 KM index.md 取得專案脈絡
2. 讀最近 3 份 log/ 取得進度
3. session 結束時主動詢問是否 `/km-log` 寫回 KM

## 專案慣例

- **直接在 `main` 作業並 push**，無 PR／merge 流程；Cloudflare 接 GitHub 自動部署（與 KM vault 的 branch 保護規則相反）
- 批次改動用**單一 node 腳本**一次改完；每個 regex／字串替換都要斷言「找到才替換、找不到就報錯 exit」，避免靜默失敗
- 改完跑一次 `npm run build` 驗證，再 `git add -A && commit && push origin main`
- commit 訊息用中文
- 文案一律走 i18n key（`src/i18n/{zh-Hant,en}.json`），**不在 template 寫死中文**；新 key 用語意化前綴（`abt_`、`msp_`…），`k###` 是早期編號式不再新增
- 兩份語系檔 key 必須完全對齊；預設語言為 `en`
- 樣式集中在 `src/assets/styles.css`，圖示走 `src/components/IconDefs.vue` 的 `<use href="#i-xxx">`
- 不編造未經確認的公司事實（成立年份、統編、客戶數、認證狀態）；合規敘述須誠實標示覆蓋範圍
