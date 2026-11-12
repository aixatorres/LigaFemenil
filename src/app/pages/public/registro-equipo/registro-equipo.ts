import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { PageHeader } from '../../../components/page-header/page-header';
import { Stepper } from '../../../components/stepper/stepper';

/** Crear equipo: solo datos del equipo. Quien lo crea se vuelve su capitana. */
@Component({
  selector: 'app-registro-equipo',
  imports: [RouterLink, PageHeader, Stepper, Icon],
  templateUrl: './registro-equipo.html',
  styleUrl: './registro-equipo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroEquipo {
  protected readonly swatches = ['#e6007e', '#7b3fa0', '#1f6fd1', '#00704a', '#f4b000', '#e4312b', '#141b45', '#ffffff'];
}
