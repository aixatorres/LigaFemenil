import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Flecha dibujada a plumón, para anotaciones al margen. Decorativa. */
@Component({
  selector: 'app-scribble-arrow',
  template: `
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="4"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @if (variant() === 'loop') {
        <path d="M6 14c22-8 52-6 58 12 5 15-14 22-18 10-4-13 22-18 36-4 10 10 16 26 20 44" />
        <path d="M89 62l13 16 6-21" />
      } @else {
        <path d="M8 10c30 4 62 18 84 54" />
        <path d="M76 66l18 2 2-18" />
      }
    </svg>
  `,
  host: { '[style.width.px]': 'size()', '[style.transform]': '"rotate(" + rotate() + "deg)" + (flip() ? " scaleX(-1)" : "")' },
  styles: `
    :host {
      display: inline-block;
      color: var(--pink);
      pointer-events: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScribbleArrow {
  readonly size = input<number>(96);
  readonly rotate = input<number>(0);
  readonly flip = input<boolean>(false);
  readonly variant = input<'curve' | 'loop'>('curve');
}
