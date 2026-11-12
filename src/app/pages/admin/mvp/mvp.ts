import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPageTitle } from '../../../components/admin-page-title/admin-page-title';
import { Icon } from '../../../components/icon/icon';
import { MvpCard } from '../../../components/mvp-card/mvp-card';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { PLAYERS, teamById } from '../../../data/mock-data';

/** Elegir a la jugadora de la jornada; al publicar aparece sola en Inicio. */
@Component({
  selector: 'app-mvp',
  imports: [AdminPageTitle, Icon, MvpCard, TeamCrest],
  templateUrl: './mvp.html',
  styleUrl: './mvp.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mvp {
  protected readonly team = teamById;
  /** Solo jugadoras con perfil público pueden publicarse como MVP. */
  protected readonly candidates = PLAYERS.filter((p) => p.isPublic).slice(0, 4);
  protected readonly selected = this.candidates[0];

  protected readonly history = [
    { jornada: 5, name: 'Lupita Santos', team: 'Jaguares Arcoíris' },
    { jornada: 4, name: 'Ximena Cruz', team: 'Las Catrinas FC' },
    { jornada: 3, name: 'Renata Gil', team: 'Las Catrinas FC' },
    { jornada: 2, name: 'Valeria Ríos', team: 'Jaguares Arcoíris' },
    { jornada: 1, name: 'Andrea López', team: 'Colibríes' },
  ];
}
