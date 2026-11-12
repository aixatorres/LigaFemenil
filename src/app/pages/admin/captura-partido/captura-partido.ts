import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../components/icon/icon';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { SAMPLE_EVENTS, teamById } from '../../../data/mock-data';
import { MatchEventType } from '../../../data/models';

interface LineupPlayer {
  number: number;
  name: string;
  onField: boolean;
  /** Minuto en que entró (0 = titular). */
  inAt: number;
  /** Minuto en que salió, si aplica. */
  outAt?: number;
  minutes: number;
  yellow?: number;
  goals?: number;
}

/**
 * Pantalla de captura en cancha. Pensada para usarse con el celular en la mano:
 * botones grandes, el minuto lo pone el cronómetro y el tiempo jugado se calcula solo.
 * Por ahora solo es la maqueta visual (sin lógica).
 */
@Component({
  selector: 'app-captura-partido',
  imports: [Icon, TeamCrest],
  templateUrl: './captura-partido.html',
  styleUrl: './captura-partido.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapturaPartido {
  protected readonly home = teamById('jaguares');
  protected readonly away = teamById('catrinas');
  protected readonly team = teamById;
  protected readonly minute = 32;
  protected readonly events = SAMPLE_EVENTS;

  protected readonly actions: { type: MatchEventType | 'deshacer'; label: string; icon: string }[] = [
    { type: 'gol', label: 'Gol', icon: 'ball' },
    { type: 'falta', label: 'Falta', icon: 'flag' },
    { type: 'amarilla', label: 'Amarilla', icon: 'card' },
    { type: 'roja', label: 'Roja', icon: 'card' },
    { type: 'cambio', label: 'Cambio', icon: 'swap' },
    { type: 'deshacer', label: 'Deshacer', icon: 'undo' },
  ];

  protected readonly homeLineup: LineupPlayer[] = [
    { number: 1, name: 'Dani Herrera', onField: true, inAt: 0, minutes: 32 },
    { number: 5, name: 'Sofía Ortega', onField: true, inAt: 0, minutes: 32 },
    { number: 17, name: 'Jugadora #17', onField: true, inAt: 0, minutes: 32 },
    { number: 9, name: 'Valeria Ríos', onField: true, inAt: 0, minutes: 32, goals: 1 },
    { number: 11, name: 'Karla Núñez', onField: true, inAt: 31, minutes: 1 },
    { number: 8, name: 'Lupita Santos', onField: false, inAt: 0, outAt: 31, minutes: 31 },
    { number: 14, name: 'Ana Beltrán', onField: false, inAt: -1, minutes: 0 },
  ];

  protected readonly awayLineup: LineupPlayer[] = [
    { number: 1, name: 'Mónica Ruiz', onField: true, inAt: 0, minutes: 32 },
    { number: 4, name: 'Elena Cano', onField: true, inAt: 0, minutes: 32 },
    { number: 10, name: 'Ximena Cruz', onField: true, inAt: 0, minutes: 32, goals: 1 },
    { number: 14, name: 'Renata Gil', onField: true, inAt: 0, minutes: 32, yellow: 1 },
    { number: 7, name: 'Paty Luna', onField: true, inAt: 0, minutes: 32 },
    { number: 19, name: 'Rocío Mar', onField: false, inAt: -1, minutes: 0 },
  ];

  protected readonly sides = [
    { t: this.home, list: this.homeLineup },
    { t: this.away, list: this.awayLineup },
  ];

  protected readonly eventIcon: Record<MatchEventType, string> = {
    gol: 'ball',
    falta: 'flag',
    amarilla: 'card',
    roja: 'card',
    cambio: 'swap',
  };
}
