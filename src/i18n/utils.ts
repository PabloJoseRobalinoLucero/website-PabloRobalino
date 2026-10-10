import { ui, defaultLang, type SupportedLanguage, type UIKey } from './ui';

export interface TranslatableString {
  es: string;
  en: string;
}

export function getUIText(key: UIKey, lang: SupportedLanguage = defaultLang): string {
  return ui[lang][key];
}

export function getUITranslation(key: UIKey): TranslatableString {
  return {
    es: ui.es[key],
    en: ui.en[key],
  };
}

