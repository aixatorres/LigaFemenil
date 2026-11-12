import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { RainbowStripe } from '../../../components/rainbow-stripe/rainbow-stripe';
import { TeamCrest } from '../../../components/team-crest/team-crest';
import { teamById } from '../../../data/mock-data';
import { Role } from '../../../data/models';
import { DemoSession } from '../../../services/demo-session';

interface AccountTab {
  label: string;
  path: string;
  icon: string;
  roles: Role[];
}

/**
 * Marco de "Mi cuenta". Las pestañas se muestran según el rol:
 * todas ven su resumen, datos, privacidad y estadísticas; la capitana además
 * "Mi equipo"; el staff además el acceso al panel de la liga.
 */
@Component({
  selector: 'app-mi-cuenta',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icon, TeamCrest, RainbowStripe],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiCuenta {
  protected readonly session = inject(DemoSession);
  protected readonly account = this.session.account;
  protected readonly team = teamById(this.account.teamId);

  private readonly allTabs: AccountTab[] = [
    { label: 'Resumen', path: 'resumen', icon: 'home', roles: ['jugadora', 'capitana', 'staff'] },
    { label: 'Mi privacidad', path: 'privacidad', icon: 'shield', roles: ['jugadora', 'capitana', 'staff'] },
    { label: 'Mis estadísticas', path: 'estadisticas', icon: 'chart', roles: ['jugadora', 'capitana', 'staff'] },
    { label: 'Mis datos', path: 'datos', icon: 'user', roles: ['jugadora', 'capitana', 'staff'] },
    { label: 'Mi equipo', path: 'equipo', icon: 'users', roles: ['capitana', 'staff'] },
  ];

  protected readonly tabs = computed(() =>
    this.allTabs.filter((t) => t.roles.includes(this.session.role())),
  );

  protected readonly roles: { value: Role; label: string }[] = [
    { value: 'jugadora', label: 'Jugadora' },
    { value: 'capitana', label: 'Capitana' },
    { value: 'staff', label: 'Staff' },
  ];

  protected readonly roleLabel = computed(() => {
    const r = this.session.role();
    return r === 'staff' ? 'Staff de la liga' : r === 'capitana' ? 'Capitana' : 'Jugadora';
  });
}
