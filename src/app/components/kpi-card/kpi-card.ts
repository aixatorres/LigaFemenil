import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-kpi-card',
  imports: [Icon],
  template: `
    <div class="kpi">
      <div class="top">
        <p class="label">{{ label() }}</p>
        <span class="icon" aria-hidden="true"><app-icon [name]="icon()" [size]="20" /></span>
      </div>
      <p class="value">{{ value() }}</p>
      @if (hint()) {
        <p class="hint">{{ hint() }}</p>
      }
    </div>
  `,
  host: { '[class]': '"tone-" + tone()' },
  styles: `
    :host {
      --accent: var(--ink);
      --accent-fg: var(--paper);
      display: block;
    }
    :host(.tone-gold) {
      --accent: var(--gold-500);
      --accent-fg: var(--ink);
    }
    :host(.tone-warning) {
      --accent: var(--gold-400);
      --accent-fg: var(--ink);
    }
    :host(.tone-danger) {
      --accent: var(--pink);
      --accent-fg: #fff;
    }
    .kpi {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: var(--space-4);
      background: var(--paper-light);
      border: 2px solid var(--ink);
      border-top: 10px solid var(--accent);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
    .top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--space-2);
    }
    p {
      margin: 0;
    }
    .label {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--color-ink-muted);
    }
    .icon {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border: 2px solid var(--ink);
      background: var(--accent);
      color: var(--accent-fg);
    }
    .value {
      margin-top: var(--space-2);
      font-family: var(--font-display);
      font-size: 3.25rem;
      line-height: 1;
    }
    .hint {
      margin-top: var(--space-2);
      align-self: flex-start;
      padding: 1px 6px;
      background: var(--accent);
      color: var(--accent-fg);
      font-size: var(--text-xs);
      font-weight: 700;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KpiCard {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly icon = input<string>('chart');
  readonly hint = input<string>('');
  readonly tone = input<'navy' | 'gold' | 'warning' | 'danger'>('navy');
}
