import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Sponsor } from '../../data/models';

/** Logos de aliadas como stickers pegados. Por ahora el nombre hace de logotipo. */
@Component({
  selector: 'app-sponsor-strip',
  template: `
    <ul class="logos" aria-label="Patrocinadores actuales">
      @for (s of sponsors(); track s.name; let i = $index) {
        <li class="logo" [class.main]="s.tier === 'Principal'" [style.--r]="tilts[i % tilts.length] + 'deg'">
          <span class="name">{{ s.name }}</span>
          <span class="tier">{{ s.tier }}</span>
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
    }
    .logos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-5) var(--space-4);
      margin: 0;
      padding: var(--space-3) 0;
      list-style: none;
    }
    @media (min-width: 640px) {
      .logos {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .logos {
        grid-template-columns: repeat(6, 1fr);
      }
    }
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-height: 100px;
      padding: var(--space-3);
      background: var(--paper-light);
      border: 2px solid var(--ink);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      text-align: center;
      transform: rotate(var(--r));
      transition: transform var(--dur) var(--ease-stamp);
    }
    .logo:hover {
      transform: rotate(0deg) scale(1.05);
    }
    .main {
      background: var(--gold-400);
    }
    .name {
      font-family: var(--font-display);
      font-size: 1.35rem;
      line-height: 1;
      text-transform: uppercase;
      color: var(--ink);
    }
    .tier {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--pink-600);
    }
    .main .tier {
      color: var(--ink);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorStrip {
  readonly sponsors = input.required<Sponsor[]>();
  protected readonly tilts = [-2, 1.5, -1, 2.5, -2.5, 1];
}
