import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../components/icon/icon';
import { PageHeader } from '../../../components/page-header/page-header';

@Component({
  selector: 'app-contacto',
  imports: [PageHeader, Icon],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  protected readonly socials = [
    { icon: 'instagram', label: 'Instagram', handle: '@ligadiversasmx' },
    { icon: 'facebook', label: 'Facebook', handle: 'Liga Mujeres Diversas MX' },
    { icon: 'tiktok', label: 'TikTok', handle: '@ligadiversasmx' },
    { icon: 'whatsapp', label: 'WhatsApp', handle: '55 0000 0000' },
  ];
}
