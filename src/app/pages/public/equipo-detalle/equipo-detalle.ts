import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { MatchCard } from '../../../components/match-card/match-card';
import { PlayerCard } from '../../../components/player-card/player-card';
import { RainbowStripe } from '../../../components/rainbow-stripe/rainbow-stripe';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { MATCHES, playersByTeam, standings, teamById } from '../../../data/mock-data';

@Component({
  selector: 'app-equipo-detalle',
  imports: [RouterLink, Icon, TeamCrest, PlayerCard, MatchCard, RainbowStripe],
  templateUrl: './equipo-detalle.html',
  styleUrl: './equipo-detalle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipoDetalle {
  /** Parámetro :id de la ruta (withComponentInputBinding). */
  readonly id = input<string>('');

  protected readonly team = computed(() => teamById(this.id()));
  protected readonly players = computed(() => playersByTeam(this.team().id));
  protected readonly position = computed(
    () => standings().findIndex((t) => t.id === this.team().id) + 1,
  );
  protected readonly matches = computed(() =>
    MATCHES.filter((m) => m.homeId === this.team().id || m.awayId === this.team().id),
  );
  protected readonly stats = computed(() => {
    const r = this.team().record;
    return [
      { label: 'Posición', value: `${this.position()}°` },
      { label: 'Puntos', value: r.pts },
      { label: 'Jugados', value: r.pj },
      { label: 'Ganados', value: r.pg },
      { label: 'Empatados', value: r.pe },
      { label: 'Perdidos', value: r.pp },
      { label: 'Goles a favor', value: r.gf },
      { label: 'Goles en contra', value: r.gc },
    ];
  });
}
