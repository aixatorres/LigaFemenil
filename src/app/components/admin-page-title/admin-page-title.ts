import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Título de cada pantalla del panel, con espacio para acciones a la derecha. */
@Component({
  selector: 'app-admin-page-title',
  template: `
    <div class="text">
      <h1>{{ title() }}</h1>
      @if (subtitle()) {
        <p>{{ subtitle() }}</p>
      }
    </div>
    <div class="actions"><ng-content /></div>
  `,
  styles: `
    :host {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: var(--space-4);
      margin-bottom: var(--space-5);
    }
    h1 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 2.75rem);
    }
    p {
      margin: 4px 0 0;
      color: var(--color-ink-muted);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }
    .actions:empty {
      display: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageTitle {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
