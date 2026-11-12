import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPageTitle } from '../../../components/admin-page-title/admin-page-title';
import { Icon } from '../../../components/icon/icon';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { REGISTRATIONS, TEAMS, playersByTeam, teamById } from '../../../data/mock-data';

@Component({
  selector: 'app-equipos-jugadoras',
  imports: [AdminPageTitle, Icon, TeamCrest],
  templateUrl: './equipos-jugadoras.html',
  styleUrl: './equipos-jugadoras.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquiposJugadoras {
  protected readonly registrations = REGISTRATIONS;
  protected readonly teams = TEAMS;
  protected readonly team = teamById;
  protected readonly roster = playersByTeam;

  protected readonly counts = {
    pendiente: REGISTRATIONS.filter((r) => r.status === 'pendiente').length,
    aprobada: REGISTRATIONS.filter((r) => r.status === 'aprobada').length,
    rechazada: REGISTRATIONS.filter((r) => r.status === 'rechazada').length,
  };
}
