import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../../data/models';
import { Icon } from '../icon/icon';
import { TeamCrest } from '../team-crest/team-crest';

/** Equipo como banderín colgado: color del equipo, escudo y su récord en la punta. */
@Component({
  selector: 'app-team-card',
  imports: [RouterLink, Icon, TeamCrest],
  template: `
    <a class="pennant" [routerLink]="['/equipos', team().id]">
      <span class="pin" aria-hidden="true"></span>
      <span class="flag-shadow"><span class="flag">
        <span class="stripes" aria-hidden="true"></span>
        <app-team-crest [team]="team()" [size]="76" />
        <span class="name">{{ team().name }}</span>
        <span class="record">
          <span><b>{{ team().record.pg }}</b>G</span>
          <span><b>{{ team().record.pe }}</b>E</span>
          <span><b>{{ team().record.pp }}</b>P</span>
        </span>
        <span class="pts"><b>{{ team().record.pts }}</b> pts</span>
      </span></span>
      <span class="more">Ver plantel <app-icon name="arrow-right" [size]="16" /></span>
    </a>
  `,
  host: { '[style.--team]': 'team().color', '[style.--team-fg]': 'team().colorAlt' },
  styles: `
    :host {
      display: block;
    }
    .pennant {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
      padding-top: 14px;
      color: var(--ink);
      text-decoration: none;
    }
    .pin {
      position: absolute;
      top: 4px;
      z-index: 2;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--pink);
      border: 2px solid var(--ink);
    }
    .flag-shadow {
      display: block;
      width: 100%;
      filter: drop-shadow(4px 4px 0 var(--ink));
    }
    .flag {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      width: 100%;
      padding: var(--space-6) var(--space-4) var(--space-8);
      background: var(--team);
      color: #fff;
      clip-path: polygon(0 0, 100% 0, 100% 74%, 50% 100%, 0 74%);
      transform-origin: top center;
      transition: transform var(--dur) var(--ease-stamp);
    }
    .pennant:hover .flag {
      transform: rotate(-3deg);
    }
    .stripes {
      position: absolute;
      inset: 0 0 auto;
      height: 10px;
      background: var(--rainbow);
    }
    .name {
      font-family: var(--font-display);
      font-size: 1.6rem;
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      text-shadow: 2px 2px 0 rgb(0 0 0 / 0.35);
    }
    .record {
      display: flex;
      gap: var(--space-3);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      text-transform: uppercase;
    }
    .record b {
      margin-right: 2px;
      font-size: 1rem;
    }
    .pts {
      padding: 2px 10px;
      background: var(--paper-light);
      color: var(--ink);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      text-transform: uppercase;
      border: 2px solid var(--ink);
    }
    .pts b {
      font-size: 1rem;
    }
    .more {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 44px;
      font-family: var(--font-condensed);
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: underline;
      text-decoration-color: var(--pink);
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCard {
  readonly team = input.required<Team>();
}
