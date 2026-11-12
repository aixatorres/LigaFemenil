import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { RainbowStripe } from '../../../components/rainbow-stripe/rainbow-stripe';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { playerById, teamById } from '../../../data/mock-data';

/**
 * Perfil público de jugadora. Nunca muestra teléfono ni contacto de emergencia.
 * Si la jugadora eligió perfil privado, solo se muestran número, posición y equipo.
 */
@Component({
  selector: 'app-perfil-jugadora',
  imports: [RouterLink, Icon, TeamCrest, RainbowStripe],
  templateUrl: './perfil-jugadora.html',
  styleUrl: './perfil-jugadora.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilJugadora {
  readonly id = input<string>('');

  protected readonly player = computed(() => playerById(this.id()));
  protected readonly team = computed(() => teamById(this.player().teamId));
  protected readonly stats = computed(() => {
    const s = this.player().stats;
    return [
      { label: 'Partidos', value: s.partidos, icon: 'calendar', tone: '', fill: 'none' },
      { label: 'Minutos', value: s.minutos, icon: 'clock', tone: '', fill: 'none' },
      { label: 'Goles', value: s.goles, icon: 'ball', tone: 'gold', fill: 'none' },
      { label: 'Amarillas', value: s.amarillas, icon: 'card', tone: 'yellow', fill: 'var(--card-yellow)' },
      { label: 'Rojas', value: s.rojas, icon: 'card', tone: 'red', fill: 'var(--card-red)' },
    ];
  });
}
