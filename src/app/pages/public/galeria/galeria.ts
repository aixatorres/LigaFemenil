import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MediaPlaceholder } from '../../../components/media-placeholder/media-placeholder';
import { PageHeader } from '../../../components/page-header/page-header';
import { GALLERY } from '../../../data/mock-data';

@Component({
  selector: 'app-galeria',
  imports: [PageHeader, MediaPlaceholder],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Galeria {
  protected readonly items = GALLERY;
  protected readonly filters = ['Todo', 'Jornadas', 'Convivencias', 'Videos'];
  protected readonly tones = ['navy', 'gold', 'green'] as const;
}
