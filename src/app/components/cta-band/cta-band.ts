import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';
import { ScribbleArrow } from '../scribble-arrow/scribble-arrow';

/** Dos carteles pegados en la barda: Quiero jugar / Quiero patrocinar. */
@Component({
  selector: 'app-cta-band',
  imports: [RouterLink, Icon, ScribbleArrow],
  template: `
    <section class="section" aria-label="Participa">
      <div class="container wall">
        <article class="poster join">
          <span class="tape corner-l" aria-hidden="true"></span>
          <p class="kicker">Se busca</p>
          <h2>Jugadoras<br />de domingo</h2>
          <p class="copy">Con equipo o sin equipo. Con experiencia o desde cero. Aquí se viene a jugar, aprender y echar porras.</p>
          <div class="action">
            <a routerLink="/unete" class="btn btn-gold btn-lg">Quiero jugar <app-icon name="arrow-right" /></a>
            <span class="marker hint">¡aquí cabes!</span>
          </div>
        </article>

        <article class="poster sponsor">
          <span class="tape corner-r" aria-hidden="true"></span>
          <p class="kicker">Marcas con causa</p>
          <h2>Ponte la<br />camiseta</h2>
          <p class="copy">Lleva tu marca a una comunidad que crece cada domingo y apoya el fútbol femenil y diverso en México.</p>
          <div class="action">
            <a routerLink="/patrocinadores" class="btn btn-navy btn-lg">Quiero patrocinar <app-icon name="arrow-right" /></a>
          </div>
          <app-scribble-arrow class="arrow" [size]="84" [rotate]="200" variant="loop" />
        </article>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .wall {
      display: grid;
      gap: var(--space-7);
    }
    @media (min-width: 900px) {
      .wall {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-6);
      }
    }
    .poster {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: var(--space-7) var(--space-6) var(--space-6);
      border: 3px solid var(--ink);
      border-radius: var(--radius);
      box-shadow: var(--shadow-lg);
    }
    .join {
      background: var(--pink);
      color: #fff;
      transform: rotate(-1.2deg);
    }
    .sponsor {
      background: var(--gold-500);
      color: var(--ink);
      transform: rotate(1deg);
    }
    .poster::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      color: rgb(0 0 0 / 0.14);
      background: var(--halftone);
      -webkit-mask: linear-gradient(160deg, transparent 45%, #000);
      mask: linear-gradient(160deg, transparent 45%, #000);
    }
    .kicker {
      margin: 0 0 var(--space-2);
      padding: 2px 10px;
      background: var(--ink);
      color: var(--paper);
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h2 {
      margin: 0 0 var(--space-3);
      font-size: clamp(2.75rem, 6vw, 4.5rem);
      line-height: 0.88;
    }
    .join h2 {
      text-shadow: 4px 4px 0 var(--ink);
    }
    .copy {
      max-width: 40ch;
      margin-bottom: var(--space-5);
      font-weight: 500;
    }
    .action {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-4);
    }
    .hint {
      color: var(--gold-300);
      font-size: 1.5rem;
      transform: rotate(-6deg);
    }
    .tape {
      position: absolute;
      top: -14px;
      width: 96px;
      height: 26px;
      padding: 0;
      opacity: 0.92;
    }
    .corner-l {
      left: 18px;
      transform: rotate(-8deg);
    }
    .corner-r {
      right: 18px;
      transform: rotate(7deg);
      background: var(--pink-100);
    }
    .arrow {
      position: absolute;
      right: 24px;
      bottom: 70px;
      color: var(--ink);
    }
    @media (max-width: 600px) {
      .arrow {
        display: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBand {}
