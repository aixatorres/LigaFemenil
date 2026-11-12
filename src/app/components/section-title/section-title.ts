import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Encabezado de sección estilo programa de partido:
 *   01 ———— KICKER
 *   TÍTULO EN CARTEL      ← anotación a plumón
 */
@Component({
  selector: 'app-section-title',
  template: `
    <div class="kicker">
      @if (index()) {
        <span class="idx">{{ index() }}</span>
      }
      <span class="rule" aria-hidden="true"></span>
      @if (eyebrow()) {
        <span class="kick">{{ eyebrow() }}</span>
      }
    </div>
    <div class="head">
      <h2>{{ title() }}</h2>
      @if (note()) {
        <p class="marker note">{{ note() }}</p>
      }
    </div>
    @if (subtitle()) {
      <p class="lead">{{ subtitle() }}</p>
    }
    <ng-content />
  `,
  host: { '[class.center]': 'center()' },
  styles: `
    :host {
      display: block;
      margin-bottom: var(--space-6);
    }
    .kicker {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-3);
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .idx {
      display: grid;
      place-items: center;
      min-width: 38px;
      height: 30px;
      padding: 0 6px;
      background: var(--pink);
      color: #fff;
      border: 2px solid var(--ink);
    }
    .rule {
      flex: 0 0 48px;
      height: 3px;
      background: currentColor;
    }
    .kick {
      color: var(--pink-600);
    }
    :host-context(.section-dark) .kick {
      color: var(--gold-400);
    }
    .head {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: var(--space-2) var(--space-4);
    }
    h2 {
      margin: 0;
      max-width: 16ch;
    }
    .note {
      margin: 0 0 6px;
      font-size: clamp(1.25rem, 2.4vw, 1.75rem);
      transform: rotate(-4deg);
    }
    :host-context(.section-dark) .note {
      color: var(--gold-400);
    }
    .lead {
      margin: var(--space-4) 0 0;
    }
    :host(.center) {
      text-align: center;
    }
    :host(.center) .kicker,
    :host(.center) .head {
      justify-content: center;
    }
    :host(.center) h2 {
      margin-inline: auto;
    }
    :host(.center) .lead {
      margin-inline: auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitle {
  readonly index = input<string>('');
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly note = input<string>('');
  readonly center = input<boolean>(false);
}
