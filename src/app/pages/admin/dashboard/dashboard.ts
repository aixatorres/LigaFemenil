import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPageTitle } from '../../../components/admin-page-title/admin-page-title';
import { Icon } from '../../../components/icon/icon';
import { KpiCard } from '../../../components/kpi-card/kpi-card';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import {
  LEAGUE_STATS,
  MATCHES,
  REGISTRATIONS,
  mostCarded,
  teamById,
  topScorers,
} from '../../../data/mock-data';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, AdminPageTitle, KpiCard, Icon, TeamCrest],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  protected readonly stats = LEAGUE_STATS;
  protected readonly pending = REGISTRATIONS.filter((r) => r.status === 'pendiente');
  protected readonly uncaptured = MATCHES.filter((m) => m.status === 'sin-capturar');
  protected readonly next = MATCHES.filter((m) => m.jornada === 7);
  protected readonly scorers = topScorers(5);
  protected readonly carded = mostCarded(4);
  protected readonly team = teamById;

  /** Umbral de ejemplo: 5 amarillas acumuladas = 1 partido de suspensión. */
  protected readonly suspensionAt = 5;
}
