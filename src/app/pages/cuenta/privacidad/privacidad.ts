import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { PlayerCard } from '../../../components/player-card/player-card';
import { ToggleRow } from '../../../components/toggle-row/toggle-row';
import { ACCOUNT, playerById } from '../../../data/mock-data';
import { Player } from '../../../data/models';

/**
 * La jugadora decide qué se publica de ella, y lo puede cambiar en cualquier momento
 * (el consentimiento es revocable). Nadie más puede cambiarlo: ni la capitana.
 */
@Component({
  selector: 'app-privacidad',
  imports: [RouterLink, Icon, ToggleRow, PlayerCard],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Privacidad {
  protected readonly privacy = ACCOUNT.privacy;
  private readonly me = playerById(ACCOUNT.playerId);
  /** Vista previa: así apareces con el nombre visible y así con el perfil privado. */
  protected readonly asPublic: Player = { ...this.me, isPublic: true };
  protected readonly asPrivate: Player = { ...this.me, isPublic: false };
}
