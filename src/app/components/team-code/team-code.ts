import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * El código único del equipo, presentado como boleto para compartir.
 * Con él, cada jugadora se registra a sí misma en el equipo correcto.
 */
@Component({
  selector: 'app-team-code',
  imports: [Icon],
  template: `
    <div class="code-ticket">
      <div class="main">
        <p class="kicker">Código de equipo</p>
        <p class="code" [attr.aria-label]="'Código: ' + spelled()">{{ code() }}</p>
        <p class="hint">Compártelo con tus jugadoras. Cada una se registra en <b>ligadiversas.mx/unete</b></p>
        <div class="actions">
          <button type="button" class="btn btn-gold btn-sm"><app-icon name="clipboard" [size]="18" /> Copiar</button>
          <button type="button" class="btn btn-whatsapp btn-sm"><app-icon name="whatsapp" [size]="18" /> Mandar por WhatsApp</button>
        </div>
      </div>
      <div class="stub" aria-hidden="true">
        <div class="qr"></div>
        <span>Escanéame</span>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    .code-ticket {
      display: grid;
      background: var(--ink);
      color: var(--paper);
      border: 3px solid var(--ink);
      border-radius: var(--radius-lg);
      box-shadow: 7px 7px 0 var(--pink);
    }
    @media (min-width: 620px) {
      .code-ticket {
        grid-template-columns: 1fr 150px;
      }
    }
    .main {
      padding: var(--space-5);
    }
    .kicker {
      margin: 0 0 var(--space-2);
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--gold-400);
    }
    .code {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(3rem, 9vw, 4.75rem);
      line-height: 1;
      letter-spacing: 0.06em;
      color: var(--paper-light);
      text-shadow: 4px 4px 0 var(--pink);
    }
    .hint {
      margin: var(--space-3) 0 var(--space-4);
      font-size: var(--text-sm);
      color: rgb(244 236 223 / 0.85);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      --btn-shadow: rgb(0 0 0 / 0.6);
    }
    .stub {
      display: none;
    }
    @media (min-width: 620px) {
      .stub {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-2);
        padding: var(--space-4);
        border-left: 3px dashed var(--paper);
        background: var(--paper);
        color: var(--ink);
        border-radius: 0 var(--radius) var(--radius) 0;
        font-family: var(--font-marker);
      }
    }
    /* QR provisional dibujado con CSS */
    .qr {
      width: 96px;
      height: 96px;
      border: 6px solid var(--ink);
      background:
        conic-gradient(var(--ink) 25%, transparent 0 50%, var(--ink) 0 75%, transparent 0) 0 0 / 16px 16px,
        var(--paper-light);
      box-shadow: inset 0 0 0 4px var(--paper-light);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCode {
  readonly code = input.required<string>();
  protected spelled(): string {
    return this.code().split('').join(' ');
  }
}
