import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../../data/models';
import { TeamCrest } from '../team-crest/team-crest';

@Component({
  selector: 'app-standings-table',
  imports: [RouterLink, TeamCrest],
  templateUrl: './standings-table.html',
  styleUrl: './standings-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandingsTable {
  readonly teams = input.required<Team[]>();
  /** Versión compacta: solo PJ, DG y Pts. */
  readonly compact = input<boolean>(false);
  readonly caption = input<string>('Tabla de posiciones');
}
