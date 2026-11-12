import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * Cinta corrida tipo anuncio de sonidero: avisos del domingo en loop.
 * Se detiene con prefers-reduced-motion y al pasar el cursor.
 */
@Component({
  selector: 'app-marquee',
  imports: [Icon],
  template: `
    <p class="sr-only">{{ items().join(' · ') }}</p>
    <div class="track" aria-hidden="true">
      @for (copy of [0, 1]; track copy) {
        <ul class="group">
          @for (item of items(); track item) {
            <li>
              <span>{{ item }}</span>
              <app-icon name="star" [size]="22" fill="currentColor" [stroke]="0" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  host: { '[class]': '"tone-" + tone()', '[style.--tilt]': 'tilt() + "deg"' },
  styles: `
    :host {
      --bg: var(--pink);
      --fg: #fff;
      --star: var(--gold-400);
      display: block;
      overflow: hidden;
      background: var(--bg);
      color: var(--fg);
      border-block: 3px solid var(--ink);
      transform: rotate(var(--tilt, 0deg));
      margin-inline: -2%;
    }
    :host(.tone-gold) {
      --bg: var(--gold-500);
      --fg: var(--ink);
      --star: var(--pink);
    }
    :host(.tone-ink) {
      --bg: var(--ink);
      --fg: var(--paper);
      --star: var(--pink);
    }
    .track {
      display: flex;
      width: max-content;
      animation: run 38s linear infinite;
    }
    :host(:hover) .track {
      animation-play-state: paused;
    }
    .group {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      gap: var(--space-5);
      padding: 12px var(--space-5) 12px 0;
      font-family: var(--font-display);
      font-size: clamp(1.25rem, 2.6vw, 1.75rem);
      text-transform: uppercase;
      white-space: nowrap;
      line-height: 1;
    }
    li app-icon {
      color: var(--star);
    }
    @keyframes run {
      to {
        transform: translateX(-50%);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Marquee {
  readonly items = input.required<string[]>();
  readonly tone = input<'pink' | 'gold' | 'ink'>('pink');
  readonly tilt = input<number>(0);
}
