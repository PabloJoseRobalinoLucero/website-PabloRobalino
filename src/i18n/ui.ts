export const supportedLanguages = ['es', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLang: SupportedLanguage = 'es';

const esTranslations = {
  // Site & Page Titles
  'site.title': 'Pablo Robalino | Ingeniero de Software & Desarrollador IoT',
  'about.title': 'Sobre mí | Pablo Robalino',
  'portfolio.title': 'Portafolio | Pablo Robalino',
  'experience.title': 'Experiencia | Pablo Robalino',
  'talks.title': 'Charlas | Pablo Robalino',
  'community.title': 'Comunidad | Pablo Robalino',
  'contact.title': 'Contacto | Pablo Robalino',

  // Navigation
  'nav.skipToContent': 'Saltar al contenido',
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.portfolio': 'Portafolio',
  'nav.experience': 'Experiencia',
  'nav.talks': 'Charlas',
  'nav.community': 'Comunidad',
  'nav.contact': 'Contacto',
  'nav.menuOpen': 'Abrir menú',
  'nav.menuClose': 'Cerrar menú',

  // Language Toggle
  'lang.toggleAria': 'Seleccionar idioma / Select language',
  'lang.es': 'Español',
  'lang.en': 'English',

  // Hero
  'hero.title': 'Hey, soy <span class="text-sky-400">Pablo</span>',
  'hero.available': 'Disponible para trabajar',
  'hero.description': 'Ingeniero de Software y Desarrollador IoT. Hace más de 3 años construyo soluciones web y sistemas embebidos — desde plataformas IoT con ESP32 hasta aplicaciones con JavaScript. Ibarra, Ecuador.',
  'hero.linkedin': 'LinkedIn',
  'hero.github': 'GitHub',
  'hero.contactEmail': 'pablorobalinotrabajo@hotmail.com',

  // Stats
  'stats.talks': 'Ponencias',
  'stats.events': 'Eventos organizados',
  'stats.experience': 'Años de experiencia',
  'stats.leadership': 'Roles de liderazgo',

  // Projects & Portfolio
  'projects.featured': 'Proyecto destacado',
  'projects.viewProject': 'Ver proyecto →',
  'portfolio.pageTitle': 'Portafolio',
  'portfolio.pageDescription': 'Proyectos seleccionados en IoT, desarrollo web y software.',
  'portfolio.filterAll': 'Todo',
  'portfolio.filterIoT': 'IoT',
  'portfolio.filterWeb': 'Web',
  'portfolio.filterSoftware': 'Software',
  'portfolio.back': '← Volver a proyectos',
  'portfolio.category': 'Categoría',
  'portfolio.year': 'Año',
  'portfolio.tech': 'Tecnologías',
  'portfolio.liveDemo': 'Ver demo',
  'portfolio.sourceCode': 'Código fuente',

  // Experience
  'experience.pageTitle': 'Experiencia',
  'experience.pageDescription': 'Trayectoria técnica en desarrollo de proyectos y desarrollo de software.',
  'experience.present': 'Actualidad',

 // Talks
  'talks.pageTitle': 'Charlas',
  'talks.pageDescription': 'Conferencias, talleres y ponencias sobre IoT, hardware libre y desarrollo web.',
  'talks.section.teaching': 'Docencia',
  'course.mode.presencial': 'Presencial',
  'course.mode.virtual': 'Virtual',
  'course.mode.hibrido': 'Híbrido',

  // Community
  'community.pageTitle': 'Comunidad',
  'community.pageDescription': 'Roles de liderazgo y contribución activa en comunidades de tecnología.',
  'community.rolesSection': 'Roles de liderazgo',
  'community.status.current': 'Actual',
  'community.status.upcoming': 'Próximo',
  'community.status.completed': 'Finalizado',

  // About
  'about.pageTitle': 'Sobre mí',
  'about.pageDescription': 'Perfil profesional, educación, formación continua e intereses.',
  'about.section.profile': 'Perfil',
  'about.profile.p1': 'Soy candidato a ingeniero en software y desarrollador de proyectos, con un pie en la ejecución técnica y otro en el liderazgo. Diseño soluciones escalables de IoT y web con frameworks de JavaScript, ESP32 y Arduino Cloud.',
  'about.profile.p2': 'Como líder regional en IEEE y orador técnico internacional, traduzco conceptos complejos de ingeniería en iniciativas educativas y proyectos de alto impacto.',
  'about.section.education': 'Educación',
  'about.education.inProgress': 'En curso',
  'about.section.languages': 'Idiomas',
  'about.languages.spanish': 'Español — Nativo',
  'about.languages.english': 'Inglés — Intermedio',
  'about.section.training': 'Formación complementaria',
  'about.section.interests': 'Intereses',

  // Contact
  'contact.pageTitle': 'Contacto',
  'contact.pageDescription': '¿Tienes una idea, proyecto o propuesta? Escríbeme y conversemos.',
  'contact.email': 'Correo electrónico',
  'contact.location': 'Ubicación',
  'contact.locationValue': 'Ibarra, Ecuador',
  'contact.social': 'Redes profesionales',
  'contact.references': 'Referencias disponibles a solicitud',
} as const;

export type UIKey = keyof typeof esTranslations;

const enTranslations: Record<UIKey, string> = {
  // Site & Page Titles
  'site.title': 'Pablo Robalino | Software Engineer & IoT Developer',
  'about.title': 'About me | Pablo Robalino',
  'portfolio.title': 'Portfolio | Pablo Robalino',
  'experience.title': 'Experience | Pablo Robalino',
  'talks.title': 'Talks | Pablo Robalino',
  'community.title': 'Community | Pablo Robalino',
  'contact.title': 'Contact | Pablo Robalino',

  // Navigation
  'nav.skipToContent': 'Skip to content',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.portfolio': 'Portfolio',
  'nav.experience': 'Experience',
  'nav.talks': 'Talks',
  'nav.community': 'Community',
  'nav.contact': 'Contact',
  'nav.menuOpen': 'Open menu',
  'nav.menuClose': 'Close menu',

  // Language Toggle
  'lang.toggleAria': 'Select language / Seleccionar idioma',
  'lang.es': 'Español',
  'lang.en': 'English',

  // Hero
  'hero.title': 'Hey, I\'m <span class="text-sky-400">Pablo</span>',
  'hero.available': 'Open to work',
  'hero.description': 'Software Engineer & IoT Developer. For the past 3+ years I\'ve been building web solutions and embedded systems — from ESP32-based IoT platforms to JavaScript applications. Ibarra, Ecuador.',
  'hero.linkedin': 'LinkedIn',
  'hero.github': 'GitHub',
  'hero.contactEmail': 'pablorobalinotrabajo@hotmail.com',

  // Stats
  'stats.talks': 'Talks',
  'stats.events': 'Events organized',
  'stats.experience': 'Years of experience',
  'stats.leadership': 'Leadership roles',

  // Projects & Portfolio
  'projects.featured': 'Featured project',
  'projects.viewProject': 'View project →',
  'portfolio.pageTitle': 'Portfolio',
  'portfolio.pageDescription': 'Selected projects in IoT, web development, and software.',
  'portfolio.filterAll': 'All',
  'portfolio.filterIoT': 'IoT',
  'portfolio.filterWeb': 'Web',
  'portfolio.filterSoftware': 'Software',
  'portfolio.back': '← Back to projects',
  'portfolio.category': 'Category',
  'portfolio.year': 'Year',
  'portfolio.tech': 'Technologies',
  'portfolio.liveDemo': 'Live project',
  'portfolio.sourceCode': 'Source code',

  // Experience
  'experience.pageTitle': 'Experience',
  'experience.pageDescription': 'Technical background in project development and software engineering.',
  'experience.present': 'Present',

   // Talks
  'talks.pageTitle': 'Talks',
  'talks.pageDescription': 'Conferences, workshops, and talks on IoT, open hardware, and web development.',
  'talks.section.teaching': 'Teaching',
  'course.mode.presencial': 'In-person',
  'course.mode.virtual': 'Virtual',
  'course.mode.hibrido': 'Hybrid',

  // Community
  'community.pageTitle': 'Community',
  'community.pageDescription': 'Leadership roles and active contribution in tech communities.',
  'community.rolesSection': 'Leadership roles',
  'community.status.current': 'Current',
  'community.status.upcoming': 'Upcoming',
  'community.status.completed': 'Completed',

  // About
  'about.pageTitle': 'About me',
  'about.pageDescription': 'Professional profile, education, continuous training, and interests.',
  'about.section.profile': 'Profile',
  'about.profile.p1': 'Software Engineering candidate and project developer bridging the gap between technical execution and strategic leadership. I design scalable IoT and web solutions using JavaScript frameworks, ESP32, and Arduino Cloud.',
  'about.profile.p2': 'As an IEEE Regional Lead and global technical speaker, I translate complex engineering concepts into educational initiatives and high-impact projects.',
  'about.section.education': 'Education',
  'about.education.inProgress': 'In progress',
  'about.section.languages': 'Languages',
  'about.languages.spanish': 'Spanish — Native',
  'about.languages.english': 'English — Intermediate',
  'about.section.training': 'Complementary training',
  'about.section.interests': 'Interests',

  // Contact
  'contact.pageTitle': 'Contact',
  'contact.pageDescription': 'Have an idea, project, or proposal? Get in touch and let\'s talk.',
  'contact.email': 'Email',
  'contact.location': 'Location',
  'contact.locationValue': 'Ibarra, Ecuador',
  'contact.social': 'Professional networks',
  'contact.references': 'References available upon request',
};

// Double-check symmetrical key parity at compile time
type EnKey = keyof typeof enTranslations;
export type EnsureExactKeys = [UIKey] extends [EnKey]
  ? [EnKey] extends [UIKey]
    ? true
    : false
  : false;
export const isKeyParityValid: EnsureExactKeys = true;

export const ui: Record<SupportedLanguage, Record<UIKey, string>> = {
  es: esTranslations,
  en: enTranslations,
};

