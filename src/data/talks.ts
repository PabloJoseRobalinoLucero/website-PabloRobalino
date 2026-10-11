import type { TranslatableString } from '../i18n/utils';

export interface Talk {
  title: string; // título original de la charla — NO se traduce
  language: 'es' | 'en';
  event: string;
  date: string; // ISO YYYY-MM
}

export interface Course {
  title: TranslatableString;
  context: string; // organización — nombre propio, no se traduce
  mode: 'presencial' | 'virtual' | 'hibrido';
  date: string; // ISO YYYY-MM
}

export const talks: Talk[] = [
  // 2026
  { title: 'Micro Mentoring y Actividades para Sudamérica', language: 'es', event: 'IEEE CS Tech Week', date: '2026-10' },
  { title: 'Oportunidades de IEEE Computer Society para Sudamérica', language: 'es', event: 'IEEE CS International Tech Summit (Bolivia)', date: '2026-10' },
  { title: 'Herramientas de apoyo: Snippets y recursos externos', language: 'es', event: 'Ruta al IEEEXtreme 20.0', date: '2026-09' },
  { title: 'IEEE Computer Society', language: 'es', event: 'IEEE Rising Stars LAC Conference', date: '2026-09' },
  { title: 'IEEE Computer Society', language: 'es', event: 'ExperIEEEncias: Opportunities Ecuador 2026', date: '2026-08' },
  { title: 'Juguemos con la computación cuántica', language: 'es', event: 'Ciencia al Revés 2.0', date: '2026-07' },
  { title: 'De mi primera ponencia a líder regional', language: 'es', event: 'ExperIEEEncias', date: '2026-02' },
  // 2025
  { title: '¿Astro y/o Angular? Novedad junto a antigüedad', language: 'es', event: 'Road to DevFest Quito 2025', date: '2025-11' },
  { title: 'Introducción a Hardware Libre e IoT en Ubuntu', language: 'es', event: 'UbuCon Latin America 2025', date: '2025-10' },
  { title: 'Estado del arte de los Frameworks de JavaScript', language: 'es', event: 'IEEE CS Tech Week', date: '2025-09' },
  { title: 'GRSS y Computer Society en IEEE', language: 'es', event: 'IEEE Universidad Central del Ecuador (UCE)', date: '2025-07' },
  { title: 'Estructura y Fundamentos del IEEEXtreme 19.0', language: 'es', event: 'Ruta a IEEEXtreme 19.0', date: '2025-06' },
  { title: 'Ética, legislación, IA y seguridad en Ecuador', language: 'es', event: 'Camino al WIE Day 2025', date: '2025-06' },
  { title: 'El rol de Webmaster de una Rama Estudiantil', language: 'es', event: 'IEEE Summit Leadership & Soft Skills (UPS Cuenca)', date: '2025-06' },
  { title: '¿Cómo crear un proyecto sencillo para navegador, Android e iOS con Lit y Flutter?', language: 'es', event: 'Tu Pasaporte al Desarrollo', date: '2025-05' },
  { title: 'Tus proyectos con Arduino Cloud', language: 'es', event: 'Arduino Days IEEE UMSA (Bolivia)', date: '2025-03' },
  // 2020
  { title: 'Uso seguro del internet en dispositivos móviles', language: 'es', event: 'Webinar: Topics of Interest 1.0 (PUCE-SI)', date: '2020-07' },
];

export const courses: Course[] = [
  {
    title: { es: 'Fundamentos de programación en R', en: 'R Programming Fundamentals' },
    context: 'IEEE EMBS UTN SBC',
    mode: 'virtual',
    date: '2025-03',
  },
  {
    title: { es: 'Fundamentos y Lógica de programación', en: 'Programming Logic and Fundamentals' },
    context: 'Club de Programación — UTN',
    mode: 'presencial',
    date: '2023-09',
  },
  {
    title: { es: 'Fundamentos de programación', en: 'Programming Foundations Workshop' },
    context: 'Club de Programación — UTN',
    mode: 'presencial',
    date: '2022-12',
  },
  {
    title: { es: 'Curso de JavaScript', en: 'JavaScript Comprehensive Course' },
    context: 'Club de Programación — UTN',
    mode: 'hibrido',
    date: '2022-09',
  },
  {
    title: { es: 'Introducción a la Ciberseguridad e Ingeniería Social', en: 'Introduction to Cybersecurity and Social Engineering' },
    context: 'Club de Ethical Hacking — UTN',
    mode: 'presencial',
    date: '2022-05',
  },
  {
    title: { es: 'Ciberseguridad para todos', en: 'Cybersecurity for Everyone' },
    context: 'Cabildo Juvenil de Quito',
    mode: 'virtual',
    date: '2021-11',
  },
];