import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from '../../data/models';
import { teamById } from '../../data/mock-data';
import { Icon } from '../icon/icon';
import { TeamCrest } from '../team-crest/team-crest';

/** Tarjeta destacada de la jugadora MVP de la jornada (se publica en Inicio). */
@Component({
  selector: 'app-mvp-card',
  imports: [RouterLink, Icon, TeamCrest],
  templateUrl: './mvp-card.html',
  styleUrl: './mvp-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvpCard {
  readonly player = input.required<Player>();
  readonly jornada = input<number>(6);
  readonly reason = input<string>('');
  protected readonly team = computed(() => teamById(this.player().teamId));
}
