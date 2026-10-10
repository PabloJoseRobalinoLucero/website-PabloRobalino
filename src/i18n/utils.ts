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

const MONTHS_ES = [
  'ene', 'feb', 'mar', 'abr', 'may', 'jun',
  'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
];

const MONTHS_EN = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/**
 * Formats an ISO date string (e.g. "2022-11" or "2023") into localized strings
 */
export function formatIsoDate(iso: string): TranslatableString {
  const parts = iso.split('-');
  const year = parts[0];
  if (parts.length > 1) {
    const monthIndex = parseInt(parts[1], 10) - 1;
    if (monthIndex >= 0 && monthIndex < 12) {
      return {
        es: `${MONTHS_ES[monthIndex]} ${year}`,
        en: `${MONTHS_EN[monthIndex]} ${year}`,
      };
    }
  }
  return {
    es: year,
    en: year,
  };
}

/**
 * Formats a period range (e.g. { start: "2022-11", end: null }) into localized strings
 */
export function formatPeriod(
  period: { start: string; end: string | null },
  presentText: TranslatableString = { es: ui.es['experience.present'], en: ui.en['experience.present'] }
): TranslatableString {
  const start = formatIsoDate(period.start);
  if (!period.end) {
    return {
      es: `${start.es} — ${presentText.es}`,
      en: `${start.en} — ${presentText.en}`,
    };
  }
  const end = formatIsoDate(period.end);
  return {
    es: `${start.es} — ${end.es}`,
    en: `${start.en} — ${end.en}`,
  };
}


