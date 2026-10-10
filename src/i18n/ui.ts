export const supportedLanguages = ['es', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLang: SupportedLanguage = 'es';

const esTranslations = {
  'site.title': 'Pablo Robalino | Ingeniero de Software & Desarrollador IoT',
  'hero.title': 'Bienvenido a mi sitio web',
  'lang.toggleAria': 'Seleccionar idioma / Select language',
  'lang.es': 'Español',
  'lang.en': 'English',
  'projects.featured': 'Proyecto destacado',
} as const;

export type UIKey = keyof typeof esTranslations;

const enTranslations: Record<UIKey, string> = {
  'site.title': 'Pablo Robalino | Software Engineer & IoT Developer',
  'hero.title': 'Welcome to my website',
  'lang.toggleAria': 'Select language / Seleccionar idioma',
  'lang.es': 'Español',
  'lang.en': 'English',
  'projects.featured': 'Featured project',
};

// Double-check symmetrical key parity at compile time
type EnKey = keyof typeof enTranslations;
type EnsureExactKeys = [UIKey] extends [EnKey]
  ? [EnKey] extends [UIKey]
    ? true
    : false
  : false;
const _enKeyCheck: EnsureExactKeys = true;

export const ui: Record<SupportedLanguage, Record<UIKey, string>> = {
  es: esTranslations,
  en: enTranslations,
};

