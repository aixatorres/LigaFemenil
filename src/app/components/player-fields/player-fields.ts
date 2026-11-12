import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * Bloque de datos de una jugadora (registro propio o agregada por la capitana).
 * Incluye contacto de emergencia (privado). La privacidad la decide cada jugadora en su cuenta.
 */
@Component({
  selector: 'app-player-fields',
  imports: [Icon],
  templateUrl: './player-fields.html',
  styleUrl: './player-fields.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerFields {
  readonly index = input.required<number>();
  readonly captain = input<boolean>(false);
  /** 'roster': la capitana agrega a alguien. 'self': la jugadora se registra a sí misma. */
  readonly mode = input<'roster' | 'self'>('roster');

  protected id(field: string): string {
    return `j${this.index()}-${field}`;
  }
}
