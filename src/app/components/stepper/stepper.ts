import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Indicador de pasos del registro, estilo talón numerado. */
@Component({
  selector: 'app-stepper',
  template: `
    <ol class="steps" aria-label="Pasos del registro">
      @for (s of steps(); track s; let i = $index) {
        <li
          [class.done]="i < current()"
          [class.now]="i === current()"
          [attr.aria-current]="i === current() ? 'step' : null"
        >
          <span class="n">{{ i < current() ? '✓' : i + 1 }}</span>
          <span class="t">{{ s }}</span>
        </li>
      }
    </ol>
  `,
  styles: `
    :host {
      display: block;
    }
    .steps {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: 6px 14px 6px 6px;
      border: 2px solid var(--paper);
      color: var(--paper);
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      opacity: 0.6;
    }
    .n {
      display: grid;
      place-items: center;
      width: 26px;
      height: 26px;
      background: var(--paper);
      color: var(--ink);
      font-family: var(--font-display);
      font-size: 0.95rem;
    }
    .now {
      opacity: 1;
      background: var(--pink);
      border-color: var(--pink);
      color: #fff;
    }
    .done {
      opacity: 1;
    }
    .done .n {
      background: var(--gold-400);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stepper {
  readonly steps = input.required<string[]>();
  readonly current = input<number>(0);
}
