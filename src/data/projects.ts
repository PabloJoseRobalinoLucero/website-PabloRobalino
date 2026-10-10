import type { TranslatableString } from '../i18n/utils';

export interface Project {
  slug: string;
  title: TranslatableString;
  tagline: TranslatableString;
  description: TranslatableString;
  tech: string[];
  featured: boolean;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    slug: 'smart-iot-telemetry',
    title: {
      es: 'Sistema de Telemetría IoT Inteligente',
      en: 'Smart IoT Telemetry System',
    },
    tagline: {
      es: 'Monitoreo en tiempo real de sensores industriales y análisis predictivo',
      en: 'Real-time industrial sensor monitoring and predictive analytics',
    },
    description: {
      es: 'Plataforma completa de recolección y visualización de datos de sensores IoT con microcontroladores ESP32, broker MQTT y dashboard analítico.',
      en: 'Comprehensive IoT data collection and visualization platform featuring ESP32 microcontrollers, MQTT broker, and an analytical dashboard.',
    },
    tech: ['C++', 'FreeRTOS', 'MQTT', 'TypeScript', 'Astro', 'Tailwind CSS'],
    featured: true,
  },
];
