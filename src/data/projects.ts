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
  links?: {
    demo?: string;
    repo?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'plataforma-dece',
    title: {
      es: 'Plataforma DECE',
      en: 'DECE Platform',
    },
    tagline: {
      es: 'Sistema web para el Departamento de Consejería Estudiantil de una unidad educativa municipal',
      en: "Web system for a municipal school's Student Counseling Department",
    },
    description: {
      es: 'Plataforma desarrollada y desplegada para la Unidad Educativa Municipal «Alfredo Albuja Galindo» (GAD Municipal de Ibarra). Implementa la lógica del sistema y la base de datos con PHP y PostgreSQL para digitalizar los procesos del DECE.',
      en: 'Platform developed and deployed for the "Alfredo Albuja Galindo" Municipal Educational Unit (Municipality of Ibarra). Implements system logic and database functionality with PHP and PostgreSQL to digitize the DECE processes.',
    },
    category: 'web',
    year: 2023,
    tech: ['PHP', 'PostgreSQL'],
    featured: true,
  },
];

