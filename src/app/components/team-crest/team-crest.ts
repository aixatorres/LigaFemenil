import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Team } from '../../data/models';

/** Escudo provisional del equipo: siglas sobre su color. Se cambiará por el logo real del equipo. */
@Component({
  selector: 'app-team-crest',
  template: `<span class="sr-only">{{ team().name }}</span><span aria-hidden="true">{{ team().short }}</span>`,
  host: {
    '[style.--crest-bg]': 'team().color',
    '[style.--crest-fg]': 'team().colorAlt',
    '[style.--crest-size.px]': 'size()',
  },
  styles: `
    :host {
      --crest-size: 48px;
      display: inline-grid;
      place-items: center;
      flex: 0 0 auto;
      width: var(--crest-size);
      height: var(--crest-size);
      border-radius: 50% 50% 46% 46% / 40% 40% 60% 60%;
      background: var(--crest-bg);
      color: var(--crest-fg);
      border: 2px solid var(--ink);
      box-shadow:
        inset 0 0 0 3px rgb(255 255 255 / 0.85),
        2px 2px 0 var(--ink);
      font-family: var(--font-display);
      font-size: calc(var(--crest-size) * 0.34);
      letter-spacing: 0.02em;
      line-height: 1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCrest {
  readonly team = input.required<Team>();
  readonly size = input<number>(48);
}
