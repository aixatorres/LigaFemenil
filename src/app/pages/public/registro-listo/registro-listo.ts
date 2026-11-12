import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { RainbowStripe } from '../../../components/rainbow-stripe/rainbow-stripe';
import { TeamCode } from '../../../components/team-code/team-code';
import { TEAM_PORTAL } from '../../../data/mock-data';

/** Confirmación tras registrar el equipo: entrega el código para compartir. */
@Component({
  selector: 'app-registro-listo',
  imports: [RouterLink, Icon, TeamCode, RainbowStripe],
  template: `
    <section class="done" aria-labelledby="done-title">
      <div class="container inner">
        <p class="stamp seal" aria-hidden="true"><span>Equipo<br />registrado</span></p>
        <p class="eyebrow">Equipo creado · ahora eres capitana</p>
        <h1 id="done-title">¡Ya tienen equipo!</h1>
        <p class="marker note">ahora, a juntar a la banda</p>
        <p class="lead">
          Manda este código al grupo de tu equipo. Cada jugadora se registra con él y tú ves el avance desde
          <b>Mi cuenta → Mi equipo</b>.
        </p>

        <app-team-code [code]="portal.code" />

        <div class="wa-preview" aria-label="Así se verá el mensaje de WhatsApp">
          <p class="wa-label">Mensaje sugerido</p>
          <p class="bubble">
            ¡Ya estamos inscritas en la Liga Mujeres Diversas! Regístrense aquí: ligadiversas.mx/unete con el código
            <b>{{ portal.code }}</b>. Tarda 3 min.
          </p>
        </div>

        <div class="ctas">
          <a routerLink="/mi-cuenta/equipo" class="btn btn-pink btn-lg">Ir a Mi equipo <app-icon name="arrow-right" /></a>
          <a routerLink="/" class="btn btn-ghost">Volver al inicio</a>
        </div>

        <div class="alert alert-warning">
          <app-icon name="clock" [size]="20" />
          <p>Tu equipo está <b>pendiente de aprobación</b>. El staff lo revisa en menos de 48 h y te avisa por WhatsApp.</p>
        </div>
      </div>
    </section>
    <app-rainbow-stripe [height]="12" [tilt]="-1" />
  `,
  styles: `
    .done {
      position: relative;
      padding-block: var(--space-8);
    }
    .inner {
      position: relative;
      max-width: 760px;
    }
    h1 {
      margin-bottom: 0;
      font-size: var(--text-4xl);
    }
    .note {
      margin: var(--space-2) 0 var(--space-4);
      font-size: clamp(1.4rem, 3vw, 2rem);
      transform: rotate(-2deg);
      display: inline-block;
    }
    .lead {
      margin-bottom: var(--space-6);
      color: var(--ink);
    }
    .seal {
      position: absolute;
      top: -10px;
      right: var(--space-4);
      width: 128px;
      height: 128px;
      margin: 0;
      color: var(--pink);
      font-size: 1.3rem;
      background: var(--paper-light);
      animation: stamp-in 500ms var(--ease-stamp) both 150ms;
      --r: 14deg;
    }
    @media (max-width: 640px) {
      .seal {
        display: none;
      }
    }
    .wa-preview {
      margin-top: var(--space-6);
      max-width: 480px;
    }
    .wa-label {
      margin: 0 0 var(--space-2);
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .bubble {
      position: relative;
      margin: 0;
      padding: var(--space-3) var(--space-4);
      background: #dcf8c6;
      border: 2px solid var(--ink);
      border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 0;
      font-size: var(--text-sm);
    }
    .ctas {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      margin: var(--space-6) 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroListo {
  protected readonly portal = TEAM_PORTAL;
}
