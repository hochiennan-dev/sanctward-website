// 站台層級的 SEO meta：canonical / og:url / hreflang 隨路由更新，og:locale 隨語言更新
export const SITE_URL = 'https://www.sanctward.com'
export const LOCALES = ['en', 'zh-Hant']

const OG_LOCALE = { en: 'en_US', 'zh-Hant': 'zh_TW' }

const set = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** 路由切換時呼叫：把 canonical、og:url 與 hreflang 指到目前這一頁 */
export function applyRouteMeta(path) {
  if (typeof document === 'undefined') return
  const url = SITE_URL + (path === '/' ? '/' : path)
  set('link[rel="canonical"]', 'href', url)
  set('meta[property="og:url"]', 'content', url)
  for (const l of LOCALES) set(`link[hreflang="${l}"]`, 'href', `${url}?lang=${l}`)
  set('link[hreflang="x-default"]', 'href', url)
}

/* 路由 -> [標題 key, 說明 key]；文案直接沿用各頁既有的 h1 與 intro */
export const PAGE_META = {
  '/': ['seo_home_t', 'k24'],
  '/platform': ['pf_h1', 'pf_intro'],
  '/platform/sso': ['sso_h1', 'sso_intro'],
  '/platform/pam': ['pam_h1', 'pam_intro'],
  '/platform/zta': ['zta_h1', 'zta_intro'],
  '/platform/dlp': ['dlp_h1', 'dlp_intro'],
  '/platform/iae': ['iae_h1', 'iae_intro'],
  '/platform/hsm': ['hsm_h1', 'hsm_intro'],
  '/platform/compliance': ['compliance_h1', 'compliance_intro'],
  '/platform/reports': ['reports_h1', 'reports_intro'],
  '/solutions': ['k145', 'k146'],
  '/msp': ['msp_h1', 'msp_intro'],
  '/cases': ['k252', 'k253'],
  '/about': ['seo_about_t', 'k327'],
  '/contact': ['k347', 'k348'],
  '/privacy': ['pp_title', 'pp_intro'],
}

const clamp = (s, n = 160) => {
  const one = String(s).replace(/\s+/g, ' ').trim()
  if (one.length <= n) return one
  const cut = one.slice(0, n - 1)
  const sp = cut.lastIndexOf(' ') // 英文切在字界，中文沒有空白則直接截斷
  return (sp > n * 0.6 ? cut.slice(0, sp) : cut).trimEnd() + '…'
}

/** 路由或語言變動時呼叫：套用該頁的 title 與 description（含 OG／Twitter） */
export function applyPageMeta(path, t) {
  if (typeof document === 'undefined') return
  const entry = PAGE_META[path]
  if (!entry) return // 未列名的路由沿用 index.html 的預設值
  const title = `${clamp(t(entry[0]), 62)} — Sanctward`
  const desc = clamp(t(entry[1]))
  document.title = title
  set('meta[name="description"]', 'content', desc)
  set('meta[property="og:title"]', 'content', title)
  set('meta[property="og:description"]', 'content', desc)
  set('meta[name="twitter:title"]', 'content', title)
  set('meta[name="twitter:description"]', 'content', desc)
}

/** 語言切換時呼叫：更新 <html lang> 與 og:locale */
export function applyLocaleMeta(locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
  const other = LOCALES.find(l => l !== locale) || 'en'
  set('meta[property="og:locale"]', 'content', OG_LOCALE[locale] || 'en_US')
  set('meta[property="og:locale:alternate"]', 'content', OG_LOCALE[other] || 'zh_TW')
}
