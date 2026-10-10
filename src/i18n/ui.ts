export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = 'es';

export const ui = {
  es: {
    'site.title': 'Pablo Robalino | Sitio Web Personal',
    'hero.title': 'Bienvenido a mi sitio web',
  },
  en: {
    'site.title': 'Pablo Robalino | Personal Website',
    'hero.title': 'Welcome to my website',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
