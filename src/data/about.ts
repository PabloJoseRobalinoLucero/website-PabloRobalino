import type { TranslatableString } from '../i18n/utils';

export interface EducationItem {
  degree: TranslatableString;
  institution: string;
  location: string;
  period?: string;
  current: boolean;
}

export interface TrainingGroup {
  provider: string;
  courses: TranslatableString[];
}

export const education: EducationItem[] = [
  {
    degree: {
      es: 'Candidato a Ingeniería en Software',
      en: 'Software Engineering Candidate',
    },
    institution: 'Universidad Técnica del Norte',
    location: 'Ibarra, Ecuador',
    current: true,
  },
  {
    degree: {
      es: 'Bachiller en Ciencias',
      en: 'High School Diploma in Science',
    },
    institution: 'Unidad Educativa Rincón del Saber',
    location: 'Quito, Ecuador',
    period: '2016',
    current: false,
  },
];

export const trainingGroups: TrainingGroup[] = [
  {
    provider: 'Alura LATAM',
    courses: [
      { es: 'Desarrollo Web con JavaScript', en: 'Web Development with JavaScript' },
    ],
  },
  {
    provider: 'Administración Zonal Quitumbe',
    courses: [
      { es: 'Gestión de Proyectos', en: 'Project Management' },
      { es: 'Localización de los ODS', en: 'SDG Localization' },
      { es: 'Ciudad Resiliente: Quito', en: 'Resilient City: Quito' },
      { es: 'Emprendimiento y Desarrollo de Negocios', en: 'Entrepreneurship & Business Development' },
      { es: 'Formación en Motivación y Liderazgo', en: 'Motivation & Leadership Training' },
      { es: 'Agendas de Desarrollo de Barrios', en: 'Neighborhood Development Agendas' },
      { es: 'Asambleas Ciudadanas y Participación Pública', en: 'Citizen Assemblies & Public Participation' },
      { es: 'Formación en Danza Urbana', en: 'Urban Dance Training' },
    ],
  },
];

export const interests: TranslatableString[] = [
  { es: 'Voluntariado social y humanitario', en: 'Social & humanitarian volunteering' },
  { es: 'Producción musical', en: 'Music production' },
  { es: 'Guitarra y piano', en: 'Guitar and piano' },
  { es: 'Canto', en: 'Vocal performance' },
  { es: 'Danza tradicional y urbana', en: 'Traditional and urban dance' },
];
