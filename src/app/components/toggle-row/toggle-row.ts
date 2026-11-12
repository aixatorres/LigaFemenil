import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/** Fila con interruptor (switch accesible) para ajustes de privacidad. */
@Component({
  selector: 'app-toggle-row',
  imports: [Icon],
  template: `
    <label class="row">
      <span class="icon" aria-hidden="true"><app-icon [name]="icon()" [size]="22" /></span>
      <span class="text">
        <span class="title">{{ title() }}</span>
        <span class="desc">{{ description() }}</span>
      </span>
      <span class="switch">
        <input type="checkbox" role="switch" [checked]="checked()" [disabled]="locked()" />
        <span class="track" aria-hidden="true"></span>
        <span class="state" aria-hidden="true">{{ checked() ? 'Sí' : 'No' }}</span>
      </span>
    </label>
  `,
  styles: `
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-4);
      border-bottom: 2px dashed var(--kraft-line);
      cursor: pointer;
    }
    :host(:last-child) .row {
      border-bottom: 0;
    }
    .icon {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border: 2px solid var(--ink);
      border-radius: 50%;
      background: var(--gold-400);
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .title {
      font-family: var(--font-condensed);
      font-size: var(--text-lg);
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.15;
    }
    .desc {
      font-size: var(--text-sm);
      color: var(--color-ink-muted);
    }
    .switch {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }
    .switch input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
    }
    .track {
      position: relative;
      width: 58px;
      height: 32px;
      border: 2px solid var(--ink);
      border-radius: 32px;
      background: var(--kraft);
      transition: background-color var(--dur-fast);
    }
    .track::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--ink);
      border-radius: 50%;
      background: var(--paper-light);
      transition: transform var(--dur) var(--ease-stamp);
    }
    input:checked + .track {
      background: var(--pink);
    }
    input:checked + .track::after {
      transform: translateX(26px);
    }
    input:focus-visible + .track {
      outline: 3px solid var(--ink);
      outline-offset: 3px;
    }
    input:disabled + .track {
      opacity: 0.5;
    }
    .state {
      width: 22px;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleRow {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly icon = input<string>('eye');
  readonly checked = input<boolean>(false);
  readonly locked = input<boolean>(false);
}
