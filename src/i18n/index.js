import { createI18n } from 'vue-i18n'
import zhHant from './zh-Hant.json'
import en from './en.json'

const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'zh-Hant'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: saved,
  fallbackLocale: 'zh-Hant',
  messages: { 'zh-Hant': zhHant, en },
})
