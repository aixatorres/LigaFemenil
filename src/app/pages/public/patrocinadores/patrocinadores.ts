import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { PageHeader } from '../../../components/page-header/page-header';
import { SectionTitle } from '../../../components/section-title/section-title';
import { SponsorStrip } from '../../../components/sponsor-strip/sponsor-strip';
import { LEAGUE_STATS, SPONSORS } from '../../../data/mock-data';

@Component({
  selector: 'app-patrocinadores',
  imports: [RouterLink, PageHeader, SectionTitle, SponsorStrip, Icon],
  templateUrl: './patrocinadores.html',
  styleUrl: './patrocinadores.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Patrocinadores {
  protected readonly sponsors = SPONSORS;

  protected readonly reach = [
    { value: `${LEAGUE_STATS.jugadoras}+`, label: 'Jugadoras activas', icon: 'users' },
    { value: LEAGUE_STATS.equipos, label: 'Equipos', icon: 'flag' },
    { value: LEAGUE_STATS.seguidores, label: 'Seguidores en redes', icon: 'instagram' },
    { value: LEAGUE_STATS.domingos, label: 'Domingos al año', icon: 'calendar' },
  ];

  protected readonly packages = [
    {
      name: 'Aliada',
      price: 'Desde $X,XXX por torneo',
      items: ['Logo en el sitio web', 'Mención mensual en redes', 'Agradecimiento en convivencias'],
      featured: false,
    },
    {
      name: 'Oro',
      price: 'Desde $X,XXX por torneo',
      items: ['Todo lo de Aliada', 'Logo en lona de la cancha', 'Stand en 2 jornadas', 'Post dedicado por torneo'],
      featured: true,
    },
    {
      name: 'Principal',
      price: 'A convenir',
      items: ['Todo lo de Oro', 'Logo en uniformes o petos', 'Nombre en la premiación MVP', 'Contenido en video co-creado'],
      featured: false,
    },
  ];
}
