import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../components/icon/icon';
import { ACCOUNT, teamById } from '../../../data/mock-data';

/** Datos personales de la cuenta. Los de contacto y emergencia solo los ve el staff. */
@Component({
  selector: 'app-mis-datos',
  imports: [Icon],
  template: `
    <h2 class="h">Mis datos</h2>
    <form class="form" (submit)="$event.preventDefault()">
      <fieldset class="fieldset">
        <legend>Como jugadora</legend>
        <div class="form-grid">
          <div class="field span-2">
            <label class="label" for="d-nombre">Nombre completo</label>
            <input class="input" id="d-nombre" type="text" [value]="account.name" autocomplete="name" />
          </div>
          <div class="field">
            <label class="label" for="d-num">Número</label>
            <input class="input" id="d-num" type="number" [value]="account.number" />
            <span class="hint">Si lo cambias, tu capitana lo verá.</span>
          </div>
          <div class="field">
            <label class="label" for="d-pos">Posición</label>
            <select class="select" id="d-pos">
              @for (p of positions; track p) {
                <option [selected]="p === account.position">{{ p }}</option>
              }
            </select>
          </div>
          <div class="field span-2">
            <span class="label">Equipo</span>
            <p class="team-line">
              <b>{{ team.name }}</b>
              <span class="hint">Para cambiar de equipo, pide a tu nueva capitana su código.</span>
            </p>
          </div>
        </div>
      </fieldset>

      <fieldset class="fieldset">
        <legend>Privado · solo staff</legend>
        <div class="form-grid">
          <div class="field">
            <label class="label" for="d-acceso">WhatsApp de acceso</label>
            <input class="input" id="d-acceso" type="tel" [value]="account.contact" autocomplete="tel" />
            <span class="hint">Aquí te llegan los códigos para entrar.</span>
          </div>
          <div class="field">
            <label class="label" for="d-mail">Correo</label>
            <input class="input" id="d-mail" type="email" autocomplete="email" />
          </div>
          <div class="field">
            <label class="label" for="d-em-n">Contacto de emergencia</label>
            <input class="input" id="d-em-n" type="text" value="Laura Ríos (mamá)" />
          </div>
          <div class="field">
            <label class="label" for="d-em-t">Teléfono de emergencia</label>
            <input class="input" id="d-em-t" type="tel" value="55 •••• 88 10" />
          </div>
        </div>
        <p class="hint lock"><app-icon name="lock" [size]="14" /> Ni tu capitana ni el público ven estos datos.</p>
      </fieldset>

      <div>
        <button type="submit" class="btn btn-pink btn-lg">Guardar cambios</button>
      </div>
    </form>
  `,
  styles: `
    .h {
      font-size: var(--text-3xl);
      margin-bottom: var(--space-5);
    }
    .form {
      max-width: 820px;
    }
    .team-line {
      display: flex;
      flex-direction: column;
      margin: 0;
    }
    .lock {
      display: flex;
      align-items: center;
      gap: 6px;
      margin: var(--space-4) 0 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MisDatos {
  protected readonly account = ACCOUNT;
  protected readonly team = teamById(ACCOUNT.teamId);
  protected readonly positions = ['Portera', 'Defensa', 'Medio', 'Delantera'];
}
