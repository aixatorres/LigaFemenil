import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Icon } from '../icon/icon';

interface AdminLink {
  label: string;
  short: string;
  path: string;
  icon: string;
  /** Visible en la barra inferior móvil (máx. 4 + "Más"). */
  bottom?: boolean;
}

/** Estructura del panel: barra lateral en escritorio, barra inferior en el celular. */
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icon],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayout {
  protected readonly links: AdminLink[] = [
    { label: 'Dashboard', short: 'Inicio', path: '/admin', icon: 'dashboard', bottom: true },
    { label: 'Equipos y jugadoras', short: 'Equipos', path: '/admin/equipos', icon: 'users', bottom: true },
    { label: 'Jornadas y partidos', short: 'Jornadas', path: '/admin/jornadas', icon: 'calendar', bottom: true },
    { label: 'Captura de partido', short: 'Captura', path: '/admin/captura', icon: 'clipboard', bottom: true },
    { label: 'Estadísticas', short: 'Stats', path: '/admin/estadisticas', icon: 'chart' },
    { label: 'MVP y reconocimientos', short: 'MVP', path: '/admin/mvp', icon: 'trophy' },
    { label: 'Contenido del sitio', short: 'Contenido', path: '/admin/contenido', icon: 'layers' },
  ];
  protected readonly bottomLinks = this.links.filter((l) => l.bottom);

  /** Único estado de UI: el cajón de navegación en móvil. */
  protected readonly drawerOpen = signal(false);

  protected toggleDrawer(): void {
    this.drawerOpen.update((v) => !v);
  }

  protected closeDrawer(): void {
    this.drawerOpen.set(false);
  }
}
