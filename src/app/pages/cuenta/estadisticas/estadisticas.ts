import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../components/icon/icon';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { ACCOUNT, playerById, teamById } from '../../../data/mock-data';

/** Estadísticas personales de la jugadora, jornada por jornada. */
@Component({
  selector: 'app-mis-estadisticas',
  imports: [Icon, TeamCrest],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MisEstadisticas {
  protected readonly player = playerById(ACCOUNT.playerId);
  protected readonly team = teamById;

  protected readonly totals = [
    { label: 'Partidos', value: this.player.stats.partidos },
    { label: 'Minutos', value: this.player.stats.minutos },
    { label: 'Goles', value: this.player.stats.goles },
    { label: 'Amarillas', value: this.player.stats.amarillas },
    { label: 'Rojas', value: this.player.stats.rojas },
  ];

  /** Detalle por jornada (datos de ejemplo). */
  protected readonly games = [
    { j: 6, rival: 'tormenta', result: 'G 3-1', min: 90, goals: 2, yellow: 0 },
    { j: 5, rival: 'aguilas', result: 'G 4-0', min: 75, goals: 1, yellow: 0 },
    { j: 4, rival: 'colibries', result: 'E 1-1', min: 90, goals: 1, yellow: 1 },
    { j: 3, rival: 'guerreras', result: 'G 3-0', min: 85, goals: 2, yellow: 0 },
    { j: 2, rival: 'panteras', result: 'G 5-1', min: 90, goals: 3, yellow: 0 },
    { j: 1, rival: 'ajolotes', result: 'G 2-1', min: 90, goals: 0, yellow: 0 },
  ];
  protected readonly maxGoals = 3;
}
