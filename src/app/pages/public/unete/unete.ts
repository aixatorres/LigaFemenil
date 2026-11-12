import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { PageHeader } from '../../../components/page-header/page-header';
import { PlayerFields } from '../../../components/player-fields/player-fields';
import { Stepper } from '../../../components/stepper/stepper';
import { ToggleRow } from '../../../components/toggle-row/toggle-row';

/**
 * Paso 1 del registro: crear la cuenta. Es igual para todas.
 * Nadie elige rol aquí: toda cuenta nueva es "jugadora"; se vuelve capitana
 * al crear un equipo, y el staff lo asigna la liga.
 */
@Component({
  selector: 'app-unete',
  imports: [RouterLink, PageHeader, PlayerFields, Stepper, ToggleRow, Icon],
  templateUrl: './unete.html',
  styleUrl: './unete.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Unete {}
