import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

/** Estructura del sitio público: navegación + contenido + pie. */
@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, RouterLink, Navbar, Footer],
  template: `
    <a class="skip-link" [routerLink]="[]" fragment="contenido">Saltar al contenido</a>
    <app-navbar />
    <main id="contenido" tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100dvh;
    }
    main {
      flex: 1;
      outline: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayout {}
