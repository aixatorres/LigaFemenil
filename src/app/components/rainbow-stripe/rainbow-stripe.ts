import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Franja arcoíris del escudo, en franjas planas. Con `tilt` parece cinta pegada. */
@Component({
  selector: 'app-rainbow-stripe',
  template: '',
  host: {
    'aria-hidden': 'true',
    '[style.height.px]': 'height()',
    '[style.transform]': 'tilt() ? "rotate(" + tilt() + "deg)" : null',
    '[class.tilted]': 'tilt() !== 0',
  },
  styles: `
    :host {
      position: relative;
      z-index: 2;
      display: block;
      width: 100%;
      background: var(--rainbow);
    }
    :host(.tilted) {
      width: 104%;
      margin-left: -2%;
      border-block: 2px solid var(--ink);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RainbowStripe {
  readonly height = input<number>(6);
  readonly tilt = input<number>(0);
}
