import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPageTitle } from '../../../components/admin-page-title/admin-page-title';
import { Icon } from '../../../components/icon/icon';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { PLAYERS, TEAMS, standings, teamById } from '../../../data/mock-data';

@Component({
  selector: 'app-estadisticas',
  imports: [AdminPageTitle, Icon, TeamCrest],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Estadisticas {
  protected readonly players = [...PLAYERS].sort((a, b) => b.stats.goles - a.stats.goles);
  protected readonly teams = standings();
  protected readonly allTeams = TEAMS;
  protected readonly team = teamById;
  protected readonly maxGoals = Math.max(...TEAMS.map((t) => t.record.gf));
}
