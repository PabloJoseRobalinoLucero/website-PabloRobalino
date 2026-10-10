import type { TranslatableString } from '../i18n/utils';

export interface Experience {
  position: TranslatableString;
  company: string;
  location: string;
  period: {
    start: string;
    end: string | null;
  };
  bullets: TranslatableString[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    position: {
      es: 'Desarrollador de Proyectos',
      en: 'Project Developer',
    },
    company: 'Todo Para Tu Circuito',
    location: 'Ibarra, Ecuador',
    period: {
      start: '2022-11',
      end: null,
    },
    bullets: [
      {
        es: 'Diseño y despliegue de soluciones de hardware y software dentro del ecosistema Arduino (Nano, Uno R3, Uno R4 y Mega).',
        en: 'Engineer and deploy hardware and software solutions within the Arduino ecosystem (Nano, Uno R3, Uno R4, and Mega).',
      },
      {
        es: 'Arquitectura de sistemas IoT y de automatización integrando microcontroladores ESP8266 y ESP32 para optimizar procesos técnicos.',
        en: 'Architect IoT and automation systems by integrating ESP8266 and ESP32 microcontrollers to optimize technical processes.',
      },
      {
        es: 'Diseño y lanzamiento de plataformas web responsivas con HTML, CSS y JavaScript.',
        en: 'Design and launch responsive web-based platforms leveraging HTML, CSS, and JavaScript.',
      },
    ],
    tech: ['Arduino', 'ESP32', 'ESP8266', 'IoT', 'JavaScript'],
  },
  {
    position: {
      es: 'Practicante de Ingeniería de Software',
      en: 'Software Engineering Intern',
    },
    company: 'GAD Municipal de Ibarra',
    location: 'Ibarra, Ecuador',
    period: {
      start: '2021-01',
      end: '2023-07',
    },
    bullets: [
      {
        es: 'Desarrollo y despliegue de la plataforma DECE (Departamento de Consejería Estudiantil) para la Unidad Educativa Municipal «Alfredo Albuja Galindo», gestionada por el Municipio de Ibarra.',
        en: 'Developed and deployed the DECE (Student Counseling Department) platform for the "Alfredo Albuja Galindo" Municipal Educational Unit, managed by the Municipality of Ibarra.',
      },
      {
        es: 'Implementación de la lógica del sistema y la base de datos con PHP y PostgreSQL.',
        en: 'Implemented system logic and database functionality using PHP and PostgreSQL.',
      },
    ],
    tech: ['PHP', 'PostgreSQL'],
  },
];
