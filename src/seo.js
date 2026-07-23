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

/** 語言切換時呼叫：更新 <html lang> 與 og:locale */
export function applyLocaleMeta(locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
  const other = LOCALES.find(l => l !== locale) || 'en'
  set('meta[property="og:locale"]', 'content', OG_LOCALE[locale] || 'en_US')
  set('meta[property="og:locale:alternate"]', 'content', OG_LOCALE[other] || 'zh_TW')
}
