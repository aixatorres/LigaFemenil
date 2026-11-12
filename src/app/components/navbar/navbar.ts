import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../icon/icon';
import { RainbowStripe } from '../rainbow-stripe/rainbow-stripe';

export interface NavLink {
  label: string;
  path: string;
}

export const PUBLIC_NAV: NavLink[] = [
  { label: 'Nosotras', path: '/nosotras' },
  { label: 'Jornadas', path: '/jornadas' },
  { label: 'Equipos', path: '/equipos' },
  { label: 'Galería', path: '/galeria' },
  { label: 'Entrenamiento', path: '/entrenamiento' },
  { label: 'Patrocinadores', path: '/patrocinadores' },
  { label: 'Contacto', path: '/contacto' },
];

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Icon, RainbowStripe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly links = PUBLIC_NAV;
  /** Único estado de UI: abrir/cerrar el menú en móvil. */
  protected readonly open = signal(false);

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}
