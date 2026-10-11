import type { TranslatableString } from '../i18n/utils';

export interface Project {
  slug: string;
  title: TranslatableString;
  tagline: TranslatableString;
  description: TranslatableString;
  category: 'iot' | 'web' | 'software';
  year: number;
  tech: string[];
  featured: boolean;
  links?: { demo?: string; repo?: string };
}

export const projects: Project[] = [
  {
    slug: 'personal-website',
    title: { es: 'Mi Sitio Web Personal', en: 'My Personal Website' },
    tagline: {
      es: 'Este mismo sitio: Astro, Tailwind 4 y un sistema i18n dual-render propio',
      en: 'This very site: Astro, Tailwind 4, and a custom dual-render i18n system',
    },
    description: {
      es: 'Diseño y desarrollo de mi sitio web personal y portafolio bilingüe (español/inglés). Construido con Astro y Tailwind CSS 4, con un sistema de internacionalización propio basado en render dual: ambos idiomas viven en el HTML y se alternan al instante mediante CSS, sin rutas duplicadas ni recargas. Todo el contenido vive en una arquitectura de datos tipada con TypeScript.',
      en: 'Design and development of my bilingual (Spanish/English) personal website and portfolio. Built with Astro and Tailwind CSS 4, featuring a custom dual-render internationalization system: both languages live in the HTML and switch instantly via CSS, with no duplicated routes or page reloads. All content lives in a TypeScript-typed data architecture.',
    },
    category: 'web',
    year: 2026,
    tech: ['Astro', 'Tailwind CSS', 'TypeScript'],
    featured: false,
    links: { repo: 'https://github.com/PabloJoseRobalinoLucero/website-PabloRobalino' }
  },
  {
    slug: 'technolife',
    title: { es: 'Technolife', en: 'Technolife' },
    tagline: {
      es: 'Sitio web para tienda de tecnología y servicio técnico en Ecuador',
      en: 'Website for an Ecuadorian tech store and repair service',
    },
    description: {
      es: 'Diseño y desarrollo completo del sitio web de Technolife, empresa ecuatoriana con más de 5 años en el mercado, dedicada a la venta de celulares, tablets y accesorios, además de servicios de reparación y soporte técnico. Construido íntegramente con Astro y Tailwind CSS. Proyecto para cliente real, actualmente en línea.',
      en: 'Full design and development of the Technolife website — an Ecuadorian company with over 5 years in the market, selling phones, tablets, and accessories, plus repair and technical support services. Built entirely with Astro and Tailwind CSS. A real client project, currently live.',
    },
    category: 'web',
    year: 2025,
    tech: ['Astro', 'Tailwind CSS'],
    featured: false,
    links: { demo: 'https://www.technolifeecu.com/' },
  },
  {
    slug: 'cajas-te',
    title: { es: 'Cajas de Té', en: 'Tea Boxes' },
    tagline: {
      es: 'Inventario de tés e infusiones: una app, tres implementaciones',
      en: 'Tea & infusion inventory: one app, three implementations',
    },
    description: {
      es: 'Nació de una necesidad personal: saber cuántas bolsas de té e infusiones me quedan y cuáles se están acabando antes de hacer las compras. Lo que empezó como una app web en Astro terminó siendo el mismo proyecto reconstruido en Lit y Flutter: la versión en Astro sirvió de demo para mi charla "¿Cómo crear un proyecto sencillo para navegador, Android e iOS con Lit y Flutter?", y las versiones de Lit y Flutter son las que mantengo activas hoy.',
      en: 'Born from a personal need: knowing how many tea and infusion bags I have left and which ones are running out before shopping. What started as an Astro web app became the same project rebuilt in Lit and Flutter — the Astro version served as the live demo for my talk "¿Cómo crear un proyecto sencillo para navegador, Android e iOS con Lit y Flutter?", and the Lit and Flutter versions are the ones I actively maintain today.',
    },
    category: 'software',
    year: 2024,
    tech: ['Astro', 'Lit', 'Flutter', 'JavaScript', 'Dart'],
    featured: true,
    links: {
      repo: 'https://github.com/PabloJoseRobalinoLucero/flutter-cajas-te',
      demo: 'https://cajas-te-lit.web.app/',
    },
  },
  {
    slug: 'control-de-gastos',
    title: { es: 'Control de Gastos', en: 'Expense Tracker' },
    tagline: {
      es: 'Registro de gastos personales en JavaScript puro, sin frameworks',
      en: 'Personal expense tracker in vanilla JavaScript, no frameworks',
    },
    description: {
      es: 'Aplicación para registrar gastos personales y llevar el control del presupuesto, construida en JavaScript puro sin frameworks ni dependencias externas. Desplegada en GitHub Pages.',
      en: 'A personal expense logging and budget-tracking app built in pure JavaScript, with no frameworks or external dependencies. Deployed on GitHub Pages.',
    },
    category: 'web',
    year: 2024,
    tech: ['JavaScript', 'HTML', 'CSS'],
    featured: false,
    links: {
      demo: 'https://pablojoserobalinolucero.github.io/ControlDeGastos/',
      repo: 'https://github.com/PabloJoseRobalinoLucero/ControlDeGastos',
    },
  },
];