import { createI18n } from 'vue-i18n'
import zhHant from './zh-Hant.json'
import en from './en.json'

import { applyLocaleMeta, LOCALES } from '../seo'

// 語言決定順序：網址 ?lang= > localStorage > 預設英文
const query = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('lang') : null
const fromQuery = LOCALES.includes(query) ? query : null
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
const saved = fromQuery || (LOCALES.includes(stored) ? stored : null) || 'en'

if (fromQuery) { try { localStorage.setItem('lang', fromQuery) } catch (e) {} }
applyLocaleMeta(saved)

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: saved,
  fallbackLocale: 'zh-Hant',
  messages: { 'zh-Hant': zhHant, en },
})
