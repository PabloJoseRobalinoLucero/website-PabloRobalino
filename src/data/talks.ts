export interface Talk {
  title: string; // REGLA: title NO se traduce (es el título original de la charla)
  language: 'es' | 'en';
  event: string;
  date: string;
  slides?: string;
  video?: string;
}

export const talks: Talk[] = [
  {
    title: 'Astro and/or Angular? Modernity vs. Legacy',
    language: 'es',
    event: 'Road to DevFest Quito 2025',
    date: '2025-11',
  },
  {
    title: 'Introduction to Open Hardware and IoT on Ubuntu',
    language: 'es',
    event: 'UbuCon Latin America 2025',
    date: '2025-10',
  },
  {
    title: 'Cloud-based Projects with Arduino Cloud',
    language: 'es',
    event: 'Arduino Days — IEEE UMSA (Bolivia)',
    date: '2025-03',
  },
];
