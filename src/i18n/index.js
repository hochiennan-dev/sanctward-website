import { createI18n } from 'vue-i18n'
import zhHant from './zh-Hant.json'
import en from './en.json'

// 預設語言為英文；使用者切換過才以 localStorage 的選擇為準
const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'en'

if (typeof document !== 'undefined') document.documentElement.lang = saved

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: saved,
  fallbackLocale: 'zh-Hant',
  messages: { 'zh-Hant': zhHant, en },
})
