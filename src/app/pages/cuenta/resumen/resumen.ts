import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { MatchCard } from '../../../components/match-card/match-card';
import { MATCHES, ROSTER, TEAM_PORTAL, playerById } from '../../../data/mock-data';
import { DemoSession } from '../../../services/demo-session';

/** Resumen de la cuenta: cambia según el rol de la sesión. */
@Component({
  selector: 'app-resumen',
  imports: [RouterLink, Icon, MatchCard],
  templateUrl: './resumen.html',
  styleUrl: './resumen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resumen {
  protected readonly session = inject(DemoSession);
  protected readonly account = this.session.account;
  protected readonly player = playerById(this.account.playerId);
  protected readonly nextMatch = MATCHES.find(
    (m) => m.jornada === 7 && (m.homeId === this.account.teamId || m.awayId === this.account.teamId),
  )!;
  protected readonly portal = TEAM_PORTAL;
  protected readonly rosterCount = ROSTER.length;
  protected readonly toFix = ROSTER.filter((r) => r.status === 'invitada').length + 1;
}
