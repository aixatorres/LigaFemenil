/** Tipos de datos de la liga. Por ahora se alimentan con datos de ejemplo (mock-data.ts). */

export type Position = 'Portera' | 'Defensa' | 'Medio' | 'Delantera';

export interface TeamRecord {
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  pts: number;
}

export interface Team {
  id: string;
  name: string;
  short: string;
  color: string;
  colorAlt: string;
  record: TeamRecord;
}

export interface PlayerStats {
  partidos: number;
  minutos: number;
  goles: number;
  amarillas: number;
  rojas: number;
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: Position;
  teamId: string;
  /** La jugadora eligió en el registro si su perfil es público. */
  isPublic: boolean;
  stats: PlayerStats;
  awards: string[];
}

export type MatchStatus = 'programado' | 'en-vivo' | 'finalizado' | 'sin-capturar';

export interface Match {
  id: string;
  jornada: number;
  date: string;
  time: string;
  field: string;
  homeId: string;
  awayId: string;
  homeScore?: number;
  awayScore?: number;
  status: MatchStatus;
}

export type RegistrationStatus = 'pendiente' | 'aprobada' | 'rechazada';

export interface Registration {
  id: string;
  name: string;
  teamId: string;
  number: number;
  status: RegistrationStatus;
  privacyAccepted: boolean;
  imageAuthorized: boolean;
  isPublic: boolean;
  submitted: string;
}

export interface Sponsor {
  name: string;
  tier: 'Principal' | 'Oro' | 'Aliada';
}

export interface GalleryItem {
  title: string;
  kind: 'foto' | 'video';
  category: 'Jornadas' | 'Convivencias';
  date: string;
  tall?: boolean;
}

export type MatchEventType = 'gol' | 'falta' | 'amarilla' | 'roja' | 'cambio';

export interface MatchEvent {
  minute: number;
  type: MatchEventType;
  teamId: string;
  text: string;
}

/** Estado de una jugadora dentro del portal de su equipo. */
export interface RosterEntry {
  id: string;
  name: string;
  number: number;
  position: Position;
  status: RegistrationStatus | 'invitada';
  privacyAccepted: boolean;
  imageAuthorized: boolean;
  isPublic: boolean;
  /** Cómo llegó: se registró sola con el código o la agregó la capitana. */
  source: 'codigo' | 'capitana';
  captain?: boolean;
  yellowCards: number;
}

export interface TeamPortal {
  teamId: string;
  code: string;
  status: 'pendiente' | 'aprobado';
  captain: string;
  maxPlayers: number;
}

/**
 * Rol dentro del sitio. Nadie lo elige al registrarse:
 *  - jugadora: toda cuenta nueva.
 *  - capitana: quien crea un equipo (o a quien otra capitana nombra).
 *  - staff: lo asigna la liga.
 */
export type Role = 'jugadora' | 'capitana' | 'staff';

export interface PrivacySettings {
  showName: boolean;
  showPhoto: boolean;
  imageAuthorized: boolean;
  privacyAccepted: boolean;
}

export interface Account {
  playerId: string;
  name: string;
  contact: string;
  teamId: string;
  number: number;
  position: Position;
  privacy: PrivacySettings;
}
