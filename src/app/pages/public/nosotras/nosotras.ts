import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBand } from '../../../components/cta-band/cta-band';
import { Icon } from '../../../components/icon/icon';
import { MediaPlaceholder } from '../../../components/media-placeholder/media-placeholder';
import { PageHeader } from '../../../components/page-header/page-header';
import { SectionTitle } from '../../../components/section-title/section-title';

@Component({
  selector: 'app-nosotras',
  imports: [PageHeader, SectionTitle, MediaPlaceholder, Icon, CtaBand],
  templateUrl: './nosotras.html',
  styleUrl: './nosotras.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosotras {
  protected readonly values = [
    { icon: 'heart', title: 'Respeto', text: 'Tratamos a cada jugadora, árbitra y aficionada como queremos que nos traten.' },
    { icon: 'sparkles', title: 'Diversidad', text: 'Celebramos todas las identidades, cuerpos, edades y niveles de juego.' },
    { icon: 'users', title: 'Comunidad', text: 'Somos una red de apoyo: dentro de la cancha y en la vida.' },
    { icon: 'trophy', title: 'Pasión', text: 'Competimos con ganas, pero el resultado nunca está por encima de las personas.' },
  ];

  protected readonly safeSpace = [
    'Cero tolerancia a la discriminación, el acoso y la violencia de cualquier tipo.',
    'Staff capacitado y una persona de contacto para reportar cualquier situación.',
    'Tú decides si tu perfil, nombre y foto aparecen en el sitio.',
    'Tus datos personales están protegidos y nunca se publican.',
  ];

  protected readonly code = [
    'Respeta a todas: compañeras, rivales, arbitraje y público.',
    'Nada de comentarios sobre cuerpos, identidades u orientaciones.',
    'Juego limpio: cuidamos la integridad física de todas.',
    'Lo que pasa en la cancha se resuelve con el staff, no con agresiones.',
    'Llega a tiempo y avisa si tu equipo no podrá jugar.',
    'Deja la cancha mejor de como la encontraste.',
  ];

  protected readonly steps = [
    { icon: 'calendar', title: 'Cada domingo', text: 'Las jornadas se juegan los domingos por la mañana. Cada equipo juega un partido por jornada.' },
    { icon: 'shuffle', title: 'Todas contra todas', text: 'Formato round robin: todos los equipos se enfrentan entre sí. Al final se define la tabla.' },
    { icon: 'heart', title: 'Convivencias', text: 'Organizamos convivencias, torneos relámpago y eventos para fortalecer la comunidad.' },
  ];
}
