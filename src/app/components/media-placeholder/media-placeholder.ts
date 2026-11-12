import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * Espacio reservado para fotos y videos mientras no hay material real.
 * Bitono con semitono de impresión; reserva la proporción para evitar saltos (CLS).
 */
@Component({
  selector: 'app-media-placeholder',
  imports: [Icon],
  template: `
    <div class="inner" role="img" [attr.aria-label]="label()">
      @if (kind() === 'video') {
        <span class="play" aria-hidden="true"><app-icon name="play" [size]="30" fill="currentColor" [stroke]="0" /></span>
      } @else {
        <span class="tag" aria-hidden="true"><app-icon name="image" [size]="16" /> Foto pendiente</span>
      }
      @if (caption()) {
        <span class="caption">{{ caption() }}</span>
      }
    </div>
  `,
  host: {
    '[style.aspect-ratio]': 'ratio()',
    '[class]': '"tone-" + tone()',
  },
  styles: `
    :host {
      --bg: var(--navy-800);
      --dot: var(--pink);
      position: relative;
      display: block;
      width: 100%;
      overflow: hidden;
      border: 2px solid var(--ink);
      border-radius: var(--radius);
      background: var(--bg);
      isolation: isolate;
    }
    :host(.tone-gold) {
      --bg: var(--gold-500);
      --dot: var(--ink);
    }
    :host(.tone-green) {
      --bg: var(--pink);
      --dot: var(--gold-400);
    }
    :host::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      color: var(--dot);
      background: var(--halftone);
      opacity: 0.7;
      -webkit-mask: radial-gradient(120% 90% at 100% 100%, #000 10%, transparent 70%);
      mask: radial-gradient(120% 90% at 100% 100%, #000 10%, transparent 70%);
    }
    .inner {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-3);
      padding: var(--space-4);
      text-align: center;
    }
    .play {
      display: grid;
      place-items: center;
      width: 68px;
      height: 68px;
      padding-left: 4px;
      border-radius: 50%;
      background: var(--paper-light);
      color: var(--pink);
      border: 3px solid var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
    }
    .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px;
      background: var(--paper-light);
      color: var(--ink);
      border: 2px solid var(--ink);
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      transform: rotate(-3deg);
    }
    .caption {
      padding: 2px 8px;
      background: var(--ink);
      color: var(--paper);
      font-family: var(--font-condensed);
      font-weight: 700;
      font-size: var(--text-sm);
      text-transform: uppercase;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPlaceholder {
  readonly label = input<string>('Imagen próximamente');
  readonly caption = input<string>('');
  readonly kind = input<'foto' | 'video'>('foto');
  readonly ratio = input<string>('16 / 9');
  readonly tone = input<'navy' | 'gold' | 'green'>('navy');
}
