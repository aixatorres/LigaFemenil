import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../../components/page-header/page-header';

/**
 * Aviso de privacidad integral (LFPDPPP, México).
 * Los textos entre [corchetes] deben completarse y revisarse con asesoría legal.
 */
@Component({
  selector: 'app-aviso-privacidad',
  imports: [PageHeader, RouterLink],
  templateUrl: './aviso-privacidad.html',
  styleUrl: './aviso-privacidad.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvisoPrivacidad {
  protected readonly sections = [
    { id: 'responsable', title: '1. Responsable' },
    { id: 'datos', title: '2. Datos que recabamos' },
    { id: 'finalidades', title: '3. Finalidades' },
    { id: 'imagen', title: '4. Uso de imagen' },
    { id: 'publicacion', title: '5. Qué se publica' },
    { id: 'transferencias', title: '6. Transferencias' },
    { id: 'arco', title: '7. Derechos ARCO' },
    { id: 'revocacion', title: '8. Revocación del consentimiento' },
    { id: 'cambios', title: '9. Cambios al aviso' },
  ];
}
