import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import jaTranslation from './locales/ja/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化i18next
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'ja', // 默认语言
    interpolation: {
      escapeValue: false, // 不转义React已经安全的内容
    },
    // 加载翻译文件
    resources: {
      ja: {
        translation: jaTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 