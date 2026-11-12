import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPageTitle } from '../../../components/admin-page-title/admin-page-title';
import { Icon } from '../../../components/icon/icon';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { MATCHES, TEAMS, teamById } from '../../../data/mock-data';

@Component({
  selector: 'app-jornadas-partidos',
  imports: [RouterLink, AdminPageTitle, Icon, TeamCrest],
  templateUrl: './jornadas-partidos.html',
  styleUrl: './jornadas-partidos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JornadasPartidos {
  protected readonly team = teamById;
  protected readonly teamsCount = TEAMS.length;
  /** Todas contra todas: n-1 jornadas y n/2 partidos por jornada. */
  protected readonly totalJornadas = TEAMS.length - 1;
  protected readonly perJornada = TEAMS.length / 2;

  protected readonly jornadas = [
    { n: 7, date: '2026-11-16', status: 'Próxima', matches: MATCHES.filter((m) => m.jornada === 7), open: true },
    { n: 6, date: '2026-11-09', status: 'Por cerrar', matches: MATCHES.filter((m) => m.jornada === 6), open: true },
    { n: 5, date: '2026-11-02', status: 'Cerrada', matches: [], open: false },
    { n: 4, date: '2026-10-26', status: 'Cerrada', matches: [], open: false },
  ];

  protected readonly times = ['09:00', '10:15', '11:30', '12:45', '14:00'];
}
