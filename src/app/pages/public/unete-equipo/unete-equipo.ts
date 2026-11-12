import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { PageHeader } from '../../../components/page-header/page-header';
import { ScribbleArrow } from '../../../components/scribble-arrow/scribble-arrow';
import { Stepper } from '../../../components/stepper/stepper';

/**
 * Paso 2 del registro: con la cuenta ya creada, la jugadora elige cómo se une.
 *  - Con el código de su equipo.
 *  - Creando un equipo (se vuelve capitana).
 *  - Como agente libre (la liga le busca equipo).
 */
@Component({
  selector: 'app-unete-equipo',
  imports: [RouterLink, PageHeader, Icon, ScribbleArrow, Stepper],
  templateUrl: './unete-equipo.html',
  styleUrl: './unete-equipo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UneteEquipo {}
