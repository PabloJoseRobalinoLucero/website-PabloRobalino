import type { TranslatableString } from '../i18n/utils';

export interface Role {
  role: TranslatableString;
  org: string;
  period: {
    start: string;
    end: string | null;
  };
}

export type RoleStatus = 'current' | 'upcoming' | 'completed';

export function getRoleStatus(
  period: { start: string; end: string | null },
  referenceDate: Date = new Date()
): RoleStatus {
  const ref = referenceDate.toISOString().slice(0, 7); // "YYYY-MM"
  // Año suelto ("2026") → mes extremo: start = enero, end = diciembre
  const start = period.start.length === 4 ? `${period.start}-01` : period.start;
  const end = period.end
    ? period.end.length === 4 ? `${period.end}-12` : period.end
    : null;
  if (ref < start) return 'upcoming';
  if (end && ref > end) return 'completed';
  return 'current';
}

export type EventRole = 'lead' | 'moderator' | 'staff' | 'attendee';

export interface CommunityEvent {
  event: string;               // nombre oficial — NO se traduce
  role: EventRole;
  detail?: TranslatableString; // matiz: Chair, Program Lead, Diseño, Delegado...
  start: string;               // ISO YYYY-MM
  end?: string;                // solo si fue periodo
}

const DELEGATE: TranslatableString = { es: 'Delegado', en: 'Delegate' };
const PARTICIPANT: TranslatableString = { es: 'Participante', en: 'Participant' };

export interface VolunteerWork {
  activity: string;                // nombre propio de la campaña — NO se traduce
  org: string;
  start: string;
  end?: string;
  description?: TranslatableString;
}

export type AwardType = 'competition' | 'award' | 'cultural';

export interface Award {
  type: AwardType;
  result: TranslatableString;
  what: TranslatableString;
  org?: string;
  date: string; // ISO YYYY-MM
}

export interface Membership {
  org: string;
  start: string;
  end?: string; // sin end = vigente
}

export const roles: Role[] = [
  // 2026–2028 (vigente)
  { role: { es: 'Representante Estudiantil', en: 'Student Representative' },
    org: 'IEEE Nanotechnology Council Ecuador Chapter', period: { start: '2026', end: '2028' } },
  // 2026
  { role: { es: 'Equipo Score Board', en: 'Score Board Team' },
    org: 'IEEEXtreme 20.0', period: { start: '2026-08', end: '2026-10' } },
  { role: { es: 'Enlace Regional', en: 'Regional Liaison' },
    org: 'IEEE Computer Society Special Projects GSAMD', period: { start: '2026', end: '2026' } },
  { role: { es: 'Líder de la Región 9', en: 'Region 9 Lead' },
    org: 'IEEE Smart Cities Communications & Outreach Strategy Committee', period: { start: '2026', end: '2026' } },
  { role: { es: 'Editor de Video y Diseñador', en: 'Video Editor & Designer' },
    org: 'IEEE Computer Society SYP Micro Mentoring', period: { start: '2026', end: '2026' } },
  { role: { es: 'Embajador IEEE', en: 'IEEE Ambassador' },
    org: 'IEEE Industry Ambassador Program', period: { start: '2026-05', end: '2026-11' } },
  { role: { es: 'Embajador IEEE', en: 'IEEE Ambassador' },
    org: 'IEEE CONESCAPAN XLIII', period: { start: '2026-02', end: '2026-09' } },
  // 2025
  { role: { es: 'Webmaster', en: 'Webmaster' },
    org: 'IEEE UTN Student Branch', period: { start: '2025', end: '2025' } },
  { role: { es: 'Embajador de la Rama Estudiantil IEEE UTN', en: 'IEEE UTN SB Ambassador' },
    org: 'IEEEXtreme 19.0', period: { start: '2025', end: '2025' } },
  { role: { es: 'Embajador de Sección IEEE', en: 'IEEE Section Ambassador' },
    org: 'IEEE Education Week (Ecuador)', period: { start: '2025', end: '2025' } },
  { role: { es: 'Embajador IEEE', en: 'IEEE Ambassador' },
    org: 'IEEE Day', period: { start: '2025', end: '2025' } },
  // 2022–2024
  { role: { es: 'Presidente Interino', en: 'Interim President' },
    org: 'Club de E-Sports — UTN', period: { start: '2022', end: '2024' } },
  { role: { es: 'Primer Vocal', en: 'First Member of the Board (1er Vocal)' },
    org: 'Club de Programación — UTN', period: { start: '2022', end: '2024' } },
  // 2023
  { role: { es: 'Embajador de la Rama Estudiantil IEEE UTN', en: 'IEEE UTN SB Ambassador' },
    org: 'IEEEXtreme 17.0', period: { start: '2023', end: '2023' } },
  // 2021–2022
  { role: { es: 'Presidente Interino', en: 'Interim President' },
    org: 'Club de Programación — UTN', period: { start: '2021', end: '2022' } },
  // 2020–2021
  { role: { es: 'Tesorero', en: 'Treasurer' },
    org: 'Cabildo Juvenil de Quito', period: { start: '2020', end: '2021' } },
  { role: { es: 'Primer Vocal', en: 'First Member of the Board (1er Vocal)' },
    org: 'Club de Programación — UTN', period: { start: '2020', end: '2021' } },
];

export const volunteering: VolunteerWork[] = [
  { activity: 'Cápsula del Tiempo IEEE UTN 2025', org: 'SIGHT UTN', start: '2025-07' },
  { activity: 'Día del Niño 2025', org: 'PES & WIE UTN', start: '2025-06' },
  { activity: 'Tecnología Sin Barreras: Conexiones que Transforman',
    org: 'SIGHT UTN', start: '2025-04', end: '2025-07' },
  { activity: 'Reyes Magos', org: 'IEEE UTN Student Branch', start: '2025-01' },
  { activity: 'Regalando Sonrisas', org: 'SIGHT UTN', start: '2023-12' },
  { activity: 'Campaña de Navidad', org: 'Kitunidos', start: '2022-12' },
  { activity: '#AyúdanosACrearSonrisas & #AlegríaEnNavidad',
    org: 'Cabildo Juvenil de Quito', start: '2020', end: '2022' },
  { activity: 'Campamentos de Verano Municipales', org: 'Administración Zonal Quitumbe',
    start: '2014', end: '2022',
    description: {
      es: 'Monitor de programas juveniles: acompañé actividades recreativas y educativas para jóvenes durante 9 años consecutivos.',
      en: 'Youth program mentor: facilitated recreational and educational activities for youth over 9 consecutive years.',
    } },
];

export const awards: Award[] = [
  // Competencias técnicas
  { type: 'competition', result: { es: 'Participante', en: 'Participant' },
    what: { es: 'IEEEXtreme 19.0, competencia global de programación de IEEE', en: 'IEEEXtreme 19.0, IEEE global programming competition' },
    date: '2025-10' },
  { type: 'competition', result: { es: 'Participante', en: 'Participant' },
    what: { es: 'IEEEXtreme 18.0, competencia global de programación de IEEE', en: 'IEEEXtreme 18.0, IEEE global programming competition' },
    date: '2024-10' },
  { type: 'competition', result: { es: 'Participante', en: 'Participant' },
    what: { es: 'IEEEXtreme 17.0, competencia global de programación de IEEE', en: 'IEEEXtreme 17.0, IEEE global programming competition' },
    date: '2023-10' },
  { type: 'competition', result: { es: 'Participante', en: 'Participant' },
    what: { es: 'Hackatón EC Tech — UISEK', en: 'Hackathon EC Tech — UISEK' },
    date: '2022-11' },
  // Premios y reconocimientos
  { type: 'award', result: { es: 'Board Ambassador', en: 'Board Ambassador' },
    what: { es: 'Volunteer Recognition', en: 'Volunteer Recognition' },
    org: 'IEEE Computer Society SYP', date: '2026-10' },
  { type: 'award', result: { es: 'Nominado', en: 'Nominee' },
    what: { es: 'Voluntario Distinguido', en: 'Distinguished Volunteer' },
    org: 'IEEE Ecuador Section', date: '2025-12' },
  { type: 'award', result: { es: 'Embajador Distinguido', en: 'Distinguished Ambassador' },
    what: { es: 'IEEEXtreme — Sección Ecuador', en: 'IEEEXtreme — Ecuador Section' },
    date: '2025-07' },
  // Competencias culturales
  { type: 'cultural', result: { es: '3er Lugar', en: '3rd Place' },
    what: { es: 'Festival de danza tradicional «Mazorca de Oro»', en: '"Mazorca de Oro" Traditional Dance Festival' },
    date: '2024-07' },
  { type: 'cultural', result: { es: 'Participante', en: 'Participant' },
    what: { es: 'Festival de danza tradicional «Mazorca de Oro»', en: '"Mazorca de Oro" Traditional Dance Festival' },
    date: '2023-07' },
  { type: 'cultural', result: { es: 'Participante', en: 'Participant' },
    what: { es: 'Festival de la Canción «Sonar Virtual UTN»', en: '"Sonar Virtual UTN" Song Festival' },
    date: '2020-07' },
  { type: 'cultural', result: { es: '1er Lugar', en: '1st Place' },
    what: { es: 'Festival de danza tradicional «Mazorca de Oro»', en: '"Mazorca de Oro" Traditional Dance Festival' },
    date: '2018-07' },
];

export const memberships: Membership[] = [
  { org: 'IEEE', start: '2023' },
  { org: 'IEEE UTN Student Branch', start: '2023' },
  { org: 'Kitunidos', start: '2021', end: '2024' },
  { org: 'Club de Programación — UTN', start: '2020', end: '2025' },
  { org: 'Club de E-Sports — UTN', start: '2020', end: '2024' },
  { org: 'Club de Ethical Hacking — UTN', start: '2020', end: '2023' },
  { org: 'Cabildo Juvenil de Quito', start: '2020', end: '2022' },
]

export const events: CommunityEvent[] = [
  // ── Organizador principal ──
  { event: 'TechX Consejo Andino', role: 'lead',
    detail: { es: 'Chair del evento', en: 'Event Chair' }, start: '2026-12' },
  { event: '1-SBC-$500 Challenge', role: 'lead',
    detail: { es: 'Líder de programa', en: 'Program Lead' },
    start: '2026-10', end: '2027-01' },
  { event: 'Taller de Branding y Redes Sociales', role: 'lead', start: '2026-03' },
  { event: 'Sesión informativa IEEEXtreme 20.0', role: 'lead', start: '2026-03' },
  { event: 'IEEE Day 2025 – UTN', role: 'lead', start: '2025-10' },
  { event: 'Comic-IEEE: Historias que inspiran', role: 'lead', start: '2025-10' },
  { event: 'Voces Femeninas: En la Dirección de la Ciencia y la Tecnología', role: 'lead', start: '2025-07' },
  { event: 'Camino al WIE Day 2025', role: 'lead', start: '2025-06' },
  { event: 'Education Week y STEM en la UTN (Part 1 & 2)', role: 'lead', start: '2025-04' },

  // ── Moderación ──
  { event: 'GeoTech 2025: Explorando el ambiente desde el espacio', role: 'moderator', start: '2025-05' },
  { event: 'Día mundial de la mujer 2025', role: 'moderator', start: '2025-03' },
  { event: 'Talk Xtreme', role: 'moderator', start: '2023-10' },
  { event: '#DíaDelMaestro Conversatorio Conmemorativo', role: 'moderator', start: '2021-04' },
  { event: 'Festival Conmemorativo a la juventud Quiteña', role: 'moderator', start: '2020-08' },

  // ── Staff y logística ──
  { event: 'International Forum IEEE Medical Applications of Biological Nanocommunications and Nanotechnology', role: 'staff', start: '2026-08' },
  { event: 'Quantum Fest', role: 'staff', start: '2026-08' },
  { event: 'Nuevos Horizontes: Rutas y experiencias de éxito', role: 'staff',
    detail: { es: 'Diseño', en: 'Design' }, start: '2026-08' },
  { event: 'GDG Build with AI EPN Quito', role: 'staff',
    detail: { es: 'Apoyo', en: 'Support' }, start: '2026-06' },
  { event: 'Tour por los laboratorios de la FICA - Día de las mujeres y las niñas en la ciencia', role: 'staff',
    detail: { es: 'Apoyo', en: 'Support' }, start: '2026-05' },
  { event: 'PES Day 2026', role: 'staff',
    detail: { es: 'Apoyo', en: 'Support' }, start: '2026-04' },
  { event: 'IEEE Reunión Nacional de Ramas Ecuador 2025', role: 'staff',
    detail: { es: 'Nacional', en: 'National' }, start: '2025-11' },
  { event: 'Mini IEEEXtreme EC', role: 'staff', start: '2025-08' },
  { event: 'Ciberseguridad Iluminada: Mujeres Liderando un Espacio Seguro', role: 'staff', start: '2025-06' },
  { event: 'Ruta a IEEEXtreme 19.0', role: 'staff', start: '2025-06' },
  { event: 'Concurso de fotografía 2025', role: 'staff', start: '2025-06' },
  { event: 'PES Day y Día del Maestro', role: 'staff', start: '2025-04', end: '2025-05' },
  { event: 'Día del Aprendizaje digital & Feria IEEE 2025', role: 'staff',
    detail: { es: 'Soporte técnico', en: 'Technical support' },
    start: '2025-02', end: '2025-03' },
  { event: 'DevXtreme (Ediciones 1.0 & 2.0)', role: 'staff', start: '2024', end: '2025' },
  { event: 'UTN Open (2022 & 2023)', role: 'staff', start: '2022-07', end: '2023-07' },
  { event: 'Encuentro Juvenil de Arte, Cultura y Emprendimiento', role: 'staff', start: '2021-11' },
  { event: 'Congreso de Seguridad Digital «Latitud 0°»', role: 'staff', start: '2019-12' },
  { event: 'VII Juegos en red «UTN 2018»', role: 'staff',
    detail: { es: 'Logística', en: 'Logistics' }, start: '2018-12' },
  { event: 'Día Internacional de las Niñas en las TIC', role: 'staff',
    detail: { es: 'Apoyo', en: 'Support' }, start: '2018-04' },
  // ── Asistencia ──
  { event: 'Ingeniería sin Fronteras: Academia, Industria y Comunidad', role: 'attendee', start: '2026-10' },
  { event: 'IGNITE Summit 2026', role: 'attendee', start: '2026-09' },
  { event: 'IEEE Reunión Nacional de Ramas Ecuador 2026', role: 'attendee', detail: DELEGATE, start: '2026-09' },
  { event: 'IEEE WIE Day (UTN – YT – UPEC)', role: 'attendee', start: '2026-07' },
  { event: 'Del Aula al Impacto: Una Carrera Profesional en Bioingeniería', role: 'attendee', detail: DELEGATE, start: '2026-07' },
  { event: 'IEEE WIE Day ESPE', role: 'attendee', start: '2026-07' },
  { event: 'IEEE TEMSCON LATAM 2026', role: 'attendee', start: '2026-06' },
  { event: 'VI Encuentro Nacional de Mujeres en la Ingeniería WIE', role: 'attendee', detail: DELEGATE, start: '2026-06' },
  { event: 'Ciencia al revés', role: 'attendee', start: '2026-05' },
  { event: 'Del impacto social al paper científico', role: 'attendee', start: '2026-05' },
  { event: 'Build With AI – LAN PARTY', role: 'attendee', start: '2026-04' },
  { event: 'Ecos del pasado, liderazgo del futuro', role: 'attendee', detail: DELEGATE, start: '2026-04' },
  { event: 'De la idea a la Publicación: Cómo escribir un artículo científico', role: 'attendee', start: '2026-04' },
  { event: 'Mentes que Transforman: Ciencia, Docencia y Liderazgo Femenino', role: 'attendee', start: '2026-04' },
  { event: 'Liderazgo con propósito', role: 'attendee', start: '2026-04' },
  { event: 'CHECK-IN PERSONAL: Liderazgo, Bienestar y Conexión', role: 'attendee', detail: DELEGATE, start: '2026-04' },
  { event: 'Mujeres en STEM: Forjando el futuro', role: 'attendee', start: '2026-03' },
  { event: 'Mujeres que Inspiran en IEEE', role: 'attendee', start: '2026-03' },
  { event: 'EMBS Voices: Ciencia que tiene nombre', role: 'attendee', start: '2026-01' },
  { event: 'Conferencia para el Estudio Multitemporal de Glaciares', role: 'attendee', start: '2025-12' },
  { event: 'IEEE Entrepreneurship 101 Ecuador Workshop', role: 'attendee', detail: PARTICIPANT, start: '2025-12' },
  { event: 'IEEE Sections Congress Virtual Event 2025', role: 'attendee', detail: DELEGATE, start: '2025-12' },
  { event: 'CONESLAT (Latin American Student Congress) 2025', role: 'attendee', start: '2025-11' },
  { event: 'Conferencias para la Innovación y Sostenibilidad en la Gestión Ambiental', role: 'attendee', start: '2025-10' },
  { event: 'CLASYPCS 2025', role: 'attendee', detail: DELEGATE, start: '2025-10' },
  { event: 'The LLaMa Herd of Models: Para Todos (Meta AI)', role: 'attendee', start: '2025-07' },
  { event: 'Build with AI Ecuador', role: 'attendee', start: '2025-07' },
  { event: 'I Taller Nacional de Habilidades Blandas', role: 'attendee', detail: PARTICIPANT, start: '2025-06' },
  { event: 'YEES Light 2025', role: 'attendee', detail: PARTICIPANT, start: '2025-05' },
  { event: 'XIII Taller de Directivos Ecuador', role: 'attendee', detail: DELEGATE, start: '2025-04' },
  { event: 'STEM con propósito: Buenas prácticas para trabajar en proyectos educativos', role: 'attendee', start: '2025-04' },
  { event: 'DevFest Ecuador', role: 'attendee', start: '2024-11' },
  { event: 'Festival cultural «Música de la City»', role: 'attendee', start: '2024-11' },
  { event: 'Git, AI, Code & Pizza', role: 'attendee', start: '2024-09' },
  { event: 'IEEE Reunión Nacional de Ramas Ecuador 2024', role: 'attendee', detail: DELEGATE, start: '2024-09' },
  { event: 'Google I/O Extended Ecuador', role: 'attendee', start: '2024-08' },
  { event: 'Conferencias Magistrales «Blockchain»', role: 'attendee', start: '2023-10' },
  { event: 'IEEE Day 2023 – UTN', role: 'attendee', start: '2023-10' },
  { event: 'Tecnología en Acción: Una mirada al futuro', role: 'attendee', start: '2023-04' },
  { event: 'Conferencia educativa inspiradora con Google', role: 'attendee', start: '2022-10' },
  { event: 'V Jornadas Académicas Internacionales y Congreso de Ciencias de la Computación', role: 'attendee', start: '2018-07' },
];