import { ui, defaultLang, type SupportedLanguage, type UIKey } from './ui';

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}
