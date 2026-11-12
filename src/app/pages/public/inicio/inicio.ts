import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaBand } from '../../../components/cta-band/cta-band';
import { Icon } from '../../../components/icon/icon';
import { Marquee } from '../../../components/marquee/marquee';
import { MatchCard } from '../../../components/match-card/match-card';
import { MediaPlaceholder } from '../../../components/media-placeholder/media-placeholder';
import { MvpCard } from '../../../components/mvp-card/mvp-card';
import { ScribbleArrow } from '../../../components/scribble-arrow/scribble-arrow';
import { SectionTitle } from '../../../components/section-title/section-title';
import { SponsorStrip } from '../../../components/sponsor-strip/sponsor-strip';
import { StandingsTable } from '../../../components/standings-table/standings-table';
import { LEAGUE_STATS, MATCHES, PLAYERS, SPONSORS, standings } from '../../../data/mock-data';

@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink,
    Icon,
    Marquee,
    ScribbleArrow,
    SectionTitle,
    MvpCard,
    MatchCard,
    MediaPlaceholder,
    StandingsTable,
    CtaBand,
    SponsorStrip,
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inicio {
  protected readonly stats = LEAGUE_STATS;
  protected readonly mvp = PLAYERS[0];
  protected readonly upcoming = MATCHES.filter((m) => m.jornada === 7);
  protected readonly top = standings().slice(0, 5);
  protected readonly sponsors = SPONSORS;

  protected readonly ticker = [
    'Domingos 9:00',
    'Todas contra todas',
    'Espacio seguro',
    'Todos los niveles',
    'Convivencias',
    'Inscripciones abiertas',
  ];

  /** "Reglas de la cancha": los valores dichos como se dicen en la cancha. */
  protected readonly rules = [
    { title: 'Respeto', text: 'Dentro y fuera de la cancha. Nadie se queda fuera por su nivel, su cuerpo o quién es.' },
    { title: 'Diversidad', text: 'Mujeres de todas las edades, orígenes y orientaciones jugando en el mismo equipo.' },
    { title: 'Comunidad', text: 'Convivencias, redes de apoyo y amistades que duran más que el marcador.' },
    { title: 'Espacio seguro', text: 'Código de convivencia claro y un staff que escucha y actúa.' },
  ];
}
