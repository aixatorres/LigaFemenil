import {
  Account,
  GalleryItem,
  Match,
  MatchEvent,
  Player,
  Registration,
  RosterEntry,
  Sponsor,
  Team,
  TeamPortal,
} from './models';

/**
 * Datos de ejemplo para maquetar el frontend.
 * Se reemplazarán por la API cuando se agreguen las funcionalidades.
 */

export const TEAMS: Team[] = [
  { id: 'jaguares', name: 'Jaguares Arcoíris', short: 'JAG', color: '#7b3fa0', colorAlt: '#f7c51e', record: { pj: 6, pg: 5, pe: 1, pp: 0, gf: 18, gc: 4, pts: 16 } },
  { id: 'catrinas', name: 'Las Catrinas FC', short: 'CAT', color: '#ce1126', colorAlt: '#ffffff', record: { pj: 6, pg: 4, pe: 1, pp: 1, gf: 14, gc: 7, pts: 13 } },
  { id: 'colibries', name: 'Colibríes', short: 'COL', color: '#1e7f46', colorAlt: '#ffffff', record: { pj: 6, pg: 3, pe: 2, pp: 1, gf: 11, gc: 8, pts: 11 } },
  { id: 'tormenta', name: 'Tormenta Violeta', short: 'TOR', color: '#5b2a86', colorAlt: '#e5be5a', record: { pj: 6, pg: 3, pe: 1, pp: 2, gf: 10, gc: 9, pts: 10 } },
  { id: 'ajolotes', name: 'Real Ajolotes', short: 'AJO', color: '#b83672', colorAlt: '#ffffff', record: { pj: 6, pg: 2, pe: 2, pp: 2, gf: 9, gc: 9, pts: 8 } },
  { id: 'guerreras', name: 'Guerreras del Sur', short: 'GUE', color: '#c05a0c', colorAlt: '#ffffff', record: { pj: 6, pg: 2, pe: 0, pp: 4, gf: 8, gc: 13, pts: 6 } },
  { id: 'aguilas', name: 'Águilas Libres', short: 'AGU', color: '#1c5fb5', colorAlt: '#ffffff', record: { pj: 6, pg: 1, pe: 1, pp: 4, gf: 6, gc: 14, pts: 4 } },
  { id: 'panteras', name: 'Panteras', short: 'PAN', color: '#0d1838', colorAlt: '#d4a537', record: { pj: 6, pg: 0, pe: 2, pp: 4, gf: 4, gc: 16, pts: 2 } },
];

export const PLAYERS: Player[] = [
  { id: 'valeria-rios', name: 'Valeria Ríos', number: 9, position: 'Delantera', teamId: 'jaguares', isPublic: true, stats: { partidos: 6, minutos: 520, goles: 9, amarillas: 1, rojas: 0 }, awards: ['MVP · Jornada 6', 'MVP · Jornada 2', 'Goleadora del mes · Octubre'] },
  { id: 'ximena-cruz', name: 'Ximena Cruz', number: 10, position: 'Medio', teamId: 'catrinas', isPublic: true, stats: { partidos: 6, minutos: 540, goles: 6, amarillas: 2, rojas: 0 }, awards: ['MVP · Jornada 4'] },
  { id: 'andrea-lopez', name: 'Andrea López', number: 7, position: 'Delantera', teamId: 'colibries', isPublic: true, stats: { partidos: 6, minutos: 498, goles: 5, amarillas: 0, rojas: 0 }, awards: ['MVP · Jornada 1'] },
  { id: 'fer-mendoza', name: 'Fer Mendoza', number: 4, position: 'Defensa', teamId: 'tormenta', isPublic: true, stats: { partidos: 6, minutos: 540, goles: 1, amarillas: 4, rojas: 0 }, awards: [] },
  { id: 'jugadora-22-ajo', name: 'Jugadora #22', number: 22, position: 'Medio', teamId: 'ajolotes', isPublic: false, stats: { partidos: 5, minutos: 410, goles: 2, amarillas: 1, rojas: 0 }, awards: [] },
  { id: 'dani-herrera', name: 'Dani Herrera', number: 1, position: 'Portera', teamId: 'jaguares', isPublic: true, stats: { partidos: 6, minutos: 540, goles: 0, amarillas: 0, rojas: 0 }, awards: ['Valla menos vencida · Octubre'] },
  { id: 'sofia-ortega', name: 'Sofía Ortega', number: 5, position: 'Defensa', teamId: 'jaguares', isPublic: true, stats: { partidos: 6, minutos: 532, goles: 1, amarillas: 2, rojas: 0 }, awards: [] },
  { id: 'lupita-santos', name: 'Lupita Santos', number: 8, position: 'Medio', teamId: 'jaguares', isPublic: true, stats: { partidos: 5, minutos: 380, goles: 3, amarillas: 1, rojas: 0 }, awards: ['MVP · Jornada 5'] },
  { id: 'karla-nunez', name: 'Karla Núñez', number: 11, position: 'Delantera', teamId: 'jaguares', isPublic: true, stats: { partidos: 6, minutos: 301, goles: 4, amarillas: 0, rojas: 0 }, awards: [] },
  { id: 'jugadora-17-jag', name: 'Jugadora #17', number: 17, position: 'Defensa', teamId: 'jaguares', isPublic: false, stats: { partidos: 4, minutos: 260, goles: 0, amarillas: 1, rojas: 0 }, awards: [] },
  { id: 'mariana-vega', name: 'Mariana Vega', number: 3, position: 'Defensa', teamId: 'guerreras', isPublic: true, stats: { partidos: 6, minutos: 540, goles: 0, amarillas: 3, rojas: 1 }, awards: [] },
  { id: 'paola-diaz', name: 'Paola Díaz', number: 6, position: 'Medio', teamId: 'aguilas', isPublic: true, stats: { partidos: 6, minutos: 470, goles: 2, amarillas: 4, rojas: 0 }, awards: [] },
  { id: 'renata-gil', name: 'Renata Gil', number: 14, position: 'Delantera', teamId: 'catrinas', isPublic: true, stats: { partidos: 6, minutos: 455, goles: 5, amarillas: 1, rojas: 0 }, awards: [] },
];

export const MATCHES: Match[] = [
  // Jornada 6 — jugada
  { id: 'j6-1', jornada: 6, date: 'Dom 9 nov', time: '09:00', field: 'Cancha 1', homeId: 'jaguares', awayId: 'tormenta', homeScore: 3, awayScore: 1, status: 'finalizado' },
  { id: 'j6-2', jornada: 6, date: 'Dom 9 nov', time: '10:15', field: 'Cancha 1', homeId: 'catrinas', awayId: 'ajolotes', homeScore: 2, awayScore: 2, status: 'finalizado' },
  { id: 'j6-3', jornada: 6, date: 'Dom 9 nov', time: '11:30', field: 'Cancha 1', homeId: 'colibries', awayId: 'panteras', homeScore: 2, awayScore: 0, status: 'finalizado' },
  { id: 'j6-4', jornada: 6, date: 'Dom 9 nov', time: '12:45', field: 'Cancha 1', homeId: 'guerreras', awayId: 'aguilas', status: 'sin-capturar' },
  // Jornada 7 — próxima
  { id: 'j7-1', jornada: 7, date: 'Dom 16 nov', time: '09:00', field: 'Cancha 1', homeId: 'jaguares', awayId: 'catrinas', status: 'programado' },
  { id: 'j7-2', jornada: 7, date: 'Dom 16 nov', time: '10:15', field: 'Cancha 1', homeId: 'tormenta', awayId: 'colibries', status: 'programado' },
  { id: 'j7-3', jornada: 7, date: 'Dom 16 nov', time: '11:30', field: 'Cancha 1', homeId: 'ajolotes', awayId: 'guerreras', status: 'programado' },
  { id: 'j7-4', jornada: 7, date: 'Dom 16 nov', time: '12:45', field: 'Cancha 1', homeId: 'aguilas', awayId: 'panteras', status: 'programado' },
];

export const REGISTRATIONS: Registration[] = [
  { id: 'r1', name: 'Itzel Romero', teamId: 'colibries', number: 15, status: 'pendiente', privacyAccepted: true, imageAuthorized: true, isPublic: true, submitted: '10 nov' },
  { id: 'r2', name: 'Camila Torres', teamId: 'panteras', number: 21, status: 'pendiente', privacyAccepted: true, imageAuthorized: false, isPublic: false, submitted: '10 nov' },
  { id: 'r3', name: 'Natalia Pérez', teamId: 'aguilas', number: 2, status: 'pendiente', privacyAccepted: true, imageAuthorized: true, isPublic: true, submitted: '9 nov' },
  { id: 'r4', name: 'Brenda Salas', teamId: 'guerreras', number: 18, status: 'pendiente', privacyAccepted: false, imageAuthorized: false, isPublic: false, submitted: '9 nov' },
  { id: 'r5', name: 'Valeria Ríos', teamId: 'jaguares', number: 9, status: 'aprobada', privacyAccepted: true, imageAuthorized: true, isPublic: true, submitted: '2 sep' },
  { id: 'r6', name: 'Ximena Cruz', teamId: 'catrinas', number: 10, status: 'aprobada', privacyAccepted: true, imageAuthorized: true, isPublic: true, submitted: '3 sep' },
  { id: 'r7', name: 'Lucía Fernández', teamId: 'ajolotes', number: 22, status: 'aprobada', privacyAccepted: true, imageAuthorized: false, isPublic: false, submitted: '5 sep' },
  { id: 'r8', name: 'Daniela Ruiz', teamId: 'tormenta', number: 30, status: 'rechazada', privacyAccepted: true, imageAuthorized: true, isPublic: true, submitted: '28 oct' },
];

export const SPONSORS: Sponsor[] = [
  { name: 'Deportes Azteca', tier: 'Principal' },
  { name: 'Café La Cancha', tier: 'Oro' },
  { name: 'Fisio Integral', tier: 'Oro' },
  { name: 'Tacos El Gol', tier: 'Aliada' },
  { name: 'Estudio Arcoíris', tier: 'Aliada' },
  { name: 'Hidrata+', tier: 'Aliada' },
];

export const GALLERY: GalleryItem[] = [
  { title: 'Jornada 6 · Jaguares vs Tormenta', kind: 'foto', category: 'Jornadas', date: '9 nov', tall: true },
  { title: 'Convivencia de Día de Muertos', kind: 'foto', category: 'Convivencias', date: '2 nov' },
  { title: 'Resumen del domingo', kind: 'video', category: 'Jornadas', date: '9 nov' },
  { title: 'Foto oficial · Las Catrinas FC', kind: 'foto', category: 'Jornadas', date: '26 oct' },
  { title: 'Torneo relámpago por la diversidad', kind: 'foto', category: 'Convivencias', date: '19 oct', tall: true },
  { title: 'Golazo de la jornada 5', kind: 'video', category: 'Jornadas', date: '26 oct' },
  { title: 'Picnic de bienvenida', kind: 'foto', category: 'Convivencias', date: '7 sep' },
  { title: 'Jornada 4 · Colibríes vs Ajolotes', kind: 'foto', category: 'Jornadas', date: '19 oct' },
  { title: 'Entrenamiento abierto', kind: 'video', category: 'Convivencias', date: '12 oct', tall: true },
];

export const SAMPLE_EVENTS: MatchEvent[] = [
  { minute: 31, type: 'cambio', teamId: 'jaguares', text: 'Entra #11 Karla Núñez · Sale #8 Lupita Santos' },
  { minute: 27, type: 'amarilla', teamId: 'catrinas', text: '#14 Renata Gil' },
  { minute: 22, type: 'gol', teamId: 'catrinas', text: '#10 Ximena Cruz' },
  { minute: 15, type: 'falta', teamId: 'jaguares', text: '#5 Sofía Ortega' },
  { minute: 9, type: 'gol', teamId: 'jaguares', text: '#9 Valeria Ríos' },
];

/** Portal de la capitana (equipo de ejemplo: Jaguares Arcoíris). */
export const TEAM_PORTAL: TeamPortal = {
  teamId: 'jaguares',
  code: 'JAG-7K2Q',
  status: 'aprobado',
  captain: 'Valeria Ríos',
  maxPlayers: 15,
};

export const ROSTER: RosterEntry[] = [
  { id: 'valeria-rios', name: 'Valeria Ríos', number: 9, position: 'Delantera', status: 'aprobada', privacyAccepted: true, imageAuthorized: true, isPublic: true, source: 'capitana', captain: true, yellowCards: 1 },
  { id: 'dani-herrera', name: 'Dani Herrera', number: 1, position: 'Portera', status: 'aprobada', privacyAccepted: true, imageAuthorized: true, isPublic: true, source: 'codigo', yellowCards: 0 },
  { id: 'sofia-ortega', name: 'Sofía Ortega', number: 5, position: 'Defensa', status: 'aprobada', privacyAccepted: true, imageAuthorized: true, isPublic: true, source: 'codigo', yellowCards: 2 },
  { id: 'lupita-santos', name: 'Lupita Santos', number: 8, position: 'Medio', status: 'aprobada', privacyAccepted: true, imageAuthorized: false, isPublic: true, source: 'codigo', yellowCards: 1 },
  { id: 'karla-nunez', name: 'Karla Núñez', number: 11, position: 'Delantera', status: 'aprobada', privacyAccepted: true, imageAuthorized: true, isPublic: true, source: 'codigo', yellowCards: 0 },
  { id: 'jugadora-17', name: 'Mariel Campos', number: 17, position: 'Defensa', status: 'aprobada', privacyAccepted: true, imageAuthorized: false, isPublic: false, source: 'codigo', yellowCards: 4 },
  { id: 'ana-beltran', name: 'Ana Beltrán', number: 14, position: 'Medio', status: 'pendiente', privacyAccepted: true, imageAuthorized: true, isPublic: true, source: 'codigo', yellowCards: 0 },
  { id: 'regina-paz', name: 'Regina Paz', number: 3, position: 'Defensa', status: 'pendiente', privacyAccepted: true, imageAuthorized: true, isPublic: false, source: 'codigo', yellowCards: 0 },
  { id: 'invitada-1', name: 'Fernanda Solís', number: 20, position: 'Medio', status: 'invitada', privacyAccepted: false, imageAuthorized: false, isPublic: false, source: 'capitana', yellowCards: 0 },
];

/** Cuenta con la que "inicia sesión" la maqueta. */
export const ACCOUNT: Account = {
  playerId: 'valeria-rios',
  name: 'Valeria Ríos',
  contact: '55 •••• 21 34',
  teamId: 'jaguares',
  number: 9,
  position: 'Delantera',
  privacy: { showName: true, showPhoto: true, imageAuthorized: true, privacyAccepted: true },
};

export const LEAGUE_STATS = {
  jugadoras: 124,
  equipos: TEAMS.length,
  seguidores: '8.4k',
  domingos: 40,
};

export function teamById(id: string): Team {
  return TEAMS.find((t) => t.id === id) ?? TEAMS[0];
}

export function playerById(id: string): Player {
  return PLAYERS.find((p) => p.id === id) ?? PLAYERS[0];
}

export function playersByTeam(teamId: string): Player[] {
  return PLAYERS.filter((p) => p.teamId === teamId);
}

export function standings(): Team[] {
  const diff = (t: Team) => t.record.gf - t.record.gc;
  return [...TEAMS].sort(
    (a, b) => b.record.pts - a.record.pts || diff(b) - diff(a) || b.record.gf - a.record.gf,
  );
}

export function topScorers(limit = 5): Player[] {
  return [...PLAYERS].sort((a, b) => b.stats.goles - a.stats.goles).slice(0, limit);
}

export function mostCarded(limit = 5): Player[] {
  const weight = (p: Player) => p.stats.amarillas + p.stats.rojas * 2;
  return [...PLAYERS].sort((a, b) => weight(b) - weight(a)).slice(0, limit);
}
