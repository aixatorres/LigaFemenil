import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { MatchCard } from '../../../components/match-card/match-card';
import { TeamCode } from '../../../components/team-code/team-code';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { MATCHES, ROSTER, TEAM_PORTAL, teamById } from '../../../data/mock-data';
import { DemoSession } from '../../../services/demo-session';

/**
 * "Mi equipo" (solo capitanas): ve y administra a sus jugadoras.
 * No puede cambiar la privacidad de nadie.
 * Nunca muestra teléfonos ni contactos de emergencia (solo los ve el staff).
 */
@Component({
  selector: 'app-mi-equipo',
  imports: [RouterLink, Icon, TeamCrest, TeamCode, MatchCard],
  templateUrl: './mi-equipo.html',
  styleUrl: './mi-equipo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiEquipo {
  protected readonly session = inject(DemoSession);
  protected readonly portal = TEAM_PORTAL;
  protected readonly team = teamById(TEAM_PORTAL.teamId);
  protected readonly roster = [...ROSTER].sort((a, b) => a.number - b.number);
  protected readonly nextMatch = MATCHES.find(
    (m) => m.jornada === 7 && (m.homeId === TEAM_PORTAL.teamId || m.awayId === TEAM_PORTAL.teamId),
  )!;

  protected readonly approved = ROSTER.filter((r) => r.status === 'aprobada').length;
  protected readonly pending = ROSTER.filter((r) => r.status === 'pendiente').length;
  protected readonly invited = ROSTER.filter((r) => r.status === 'invitada').length;
  protected readonly fillPct = (ROSTER.length / TEAM_PORTAL.maxPlayers) * 100;
  protected readonly approvedPct = (this.approved / TEAM_PORTAL.maxPlayers) * 100;

  /** Umbral de ejemplo: 5 amarillas = suspensión. */
  protected readonly suspensionAt = 5;
  protected readonly warnings = ROSTER.filter((r) => r.yellowCards >= this.suspensionAt - 1);

  protected cardsFor(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
