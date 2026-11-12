import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../components/icon/icon';
import { MediaPlaceholder } from '../../../components/media-placeholder/media-placeholder';
import { PageHeader } from '../../../components/page-header/page-header';
import { SectionTitle } from '../../../components/section-title/section-title';

@Component({
  selector: 'app-entrenamiento',
  imports: [PageHeader, SectionTitle, MediaPlaceholder, Icon],
  templateUrl: './entrenamiento.html',
  styleUrl: './entrenamiento.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Entrenamiento {
  protected readonly benefits = [
    { icon: 'ball', title: 'Técnica individual', text: 'Control, pase, tiro y conducción adaptados a tu nivel.' },
    { icon: 'dumbbell', title: 'Preparación física', text: 'Fuerza, velocidad y resistencia para rendir todo el partido.' },
    { icon: 'shield', title: 'Prevención de lesiones', text: 'Calentamientos, movilidad y trabajo de estabilidad.' },
    { icon: 'heart', title: 'A tu ritmo', text: 'Sesiones sin juicios, desde cero o para llevar tu juego al siguiente nivel.' },
  ];

  protected readonly plans = [
    { name: 'Sesión individual', detail: '1 persona · 60 min', items: ['Evaluación inicial', 'Plan personalizado', 'Seguimiento por WhatsApp'], featured: false },
    { name: 'Grupo reducido', detail: '2 a 4 personas · 75 min', items: ['Ideal para tu equipo', 'Trabajo táctico', 'Precio por persona'], featured: true },
    { name: 'Equipo completo', detail: 'Hasta 15 jugadoras · 90 min', items: ['Sesión en tu cancha', 'Estrategia y balón parado', 'Paquetes mensuales'], featured: false },
  ];
}
