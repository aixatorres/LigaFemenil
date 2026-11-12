import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from '../../data/models';
import { teamById } from '../../data/mock-data';
import { Icon } from '../icon/icon';

/**
 * Tarjeta de jugadora. Si la jugadora eligió perfil privado,
 * solo se muestra su número y posición (sin nombre, sin foto, sin enlace).
 */
@Component({
  selector: 'app-player-card',
  imports: [RouterLink, Icon],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
  host: { '[style.--team-color]': 'team().color' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerCard {
  readonly player = input.required<Player>();
  protected readonly team = computed(() => teamById(this.player().teamId));
}
