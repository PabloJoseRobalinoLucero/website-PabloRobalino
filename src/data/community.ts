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
  const refYearMonth = referenceDate.toISOString().slice(0, 7); // "YYYY-MM"
  if (refYearMonth < period.start) {
    return 'upcoming';
  }
  if (period.end && refYearMonth > period.end) {
    return 'completed';
  }
  return 'current';
}

export const roles: Role[] = [
  {
    role: {
      es: 'Líder de la Región 9',
      en: 'Region 9 Lead',
    },
    org: 'IEEE Smart Cities Communications & Outreach Strategy Committee',
    period: {
      start: '2026-01',
      end: '2026-12',
    },
  },
  {
    role: {
      es: 'Representante Estudiantil',
      en: 'Student Representative',
    },
    org: 'IEEE Nanotechnology Council Ecuador Chapter',
    period: {
      start: '2026-01',
      end: '2028-12',
    },
  },
  {
    role: {
      es: 'Webmaster',
      en: 'Webmaster',
    },
    org: 'IEEE UTN Student Branch',
    period: {
      start: '2025-01',
      end: '2025-12',
    },
  },
  {
    role: {
      es: 'Presidente Interino',
      en: 'Interim President',
    },
    org: 'E-Sports Club — UTN',
    period: {
      start: '2022-01',
      end: '2024-12',
    },
  },
];
