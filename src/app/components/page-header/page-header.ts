import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RainbowStripe } from '../rainbow-stripe/rainbow-stripe';

/** Encabezado tipo cartel para las páginas interiores del sitio público. */
@Component({
  selector: 'app-page-header',
  imports: [RainbowStripe],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeader {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  /** Anotación a plumón junto al título. */
  readonly note = input<string>('');
}
