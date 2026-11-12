import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Campo de código de verificación de 6 dígitos (acceso sin contraseña).
 * Por ahora es solo visual; al agregar la lógica conviene usar un solo
 * <input autocomplete="one-time-code"> para que el celular lo autollene.
 */
@Component({
  selector: 'app-otp-input',
  template: `
    <fieldset class="otp">
      <legend class="label">{{ label() }}</legend>
      <div class="boxes">
        @for (i of slots; track i) {
          <input
            class="box"
            type="text"
            inputmode="numeric"
            maxlength="1"
            [attr.autocomplete]="i === 0 ? 'one-time-code' : 'off'"
            [attr.aria-label]="'Dígito ' + (i + 1) + ' de 6'"
            [value]="preview().charAt(i)"
          />
          @if (i === 2) {
            <span class="dash" aria-hidden="true">-</span>
          }
        }
      </div>
    </fieldset>
  `,
  styles: `
    :host {
      display: block;
    }
    .otp {
      margin: 0;
      padding: 0;
      border: 0;
    }
    .label {
      margin-bottom: var(--space-2);
      padding: 0;
    }
    .boxes {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }
    .box {
      width: 100%;
      max-width: 54px;
      height: 64px;
      border: 2px solid var(--ink);
      border-radius: var(--radius);
      background: var(--paper-light);
      font-family: var(--font-display);
      font-size: 2rem;
      text-align: center;
      box-shadow: 3px 3px 0 var(--ink);
    }
    .box:focus {
      outline: none;
      background: var(--gold-300);
      box-shadow: 3px 3px 0 var(--pink);
    }
    .dash {
      font-family: var(--font-display);
      font-size: 1.5rem;
      color: var(--pink);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInput {
  readonly label = input<string>('Código de 6 dígitos');
  /** Dígitos de ejemplo para la maqueta. */
  readonly preview = input<string>('');
  protected readonly slots = [0, 1, 2, 3, 4, 5];
}
