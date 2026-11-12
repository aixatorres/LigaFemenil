import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPageTitle } from '../../../components/admin-page-title/admin-page-title';
import { Icon } from '../../../components/icon/icon';
import { MediaPlaceholder } from '../../../components/media-placeholder/media-placeholder';
import { GALLERY, SPONSORS } from '../../../data/mock-data';

/** Editar textos, banners, patrocinadores y galería del sitio sin tocar código. */
@Component({
  selector: 'app-contenido',
  imports: [RouterLink, AdminPageTitle, Icon, MediaPlaceholder],
  templateUrl: './contenido.html',
  styleUrl: './contenido.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contenido {
  protected readonly sponsors = SPONSORS;
  protected readonly gallery = GALLERY.slice(0, 6);
  protected readonly tones = ['navy', 'gold', 'green'] as const;

  protected readonly banners = [
    { title: 'Inscripciones abiertas · Torneo Invierno', active: true },
    { title: 'Convivencia navideña · 21 de diciembre', active: false },
  ];
}
