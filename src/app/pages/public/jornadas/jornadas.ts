import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { MatchCard } from '../../../components/match-card/match-card';
import { MediaPlaceholder } from '../../../components/media-placeholder/media-placeholder';
import { PageHeader } from '../../../components/page-header/page-header';
import { SectionTitle } from '../../../components/section-title/section-title';
import { StandingsTable } from '../../../components/standings-table/standings-table';
import { MATCHES, standings } from '../../../data/mock-data';

@Component({
  selector: 'app-jornadas',
  imports: [RouterLink, PageHeader, SectionTitle, MatchCard, StandingsTable, MediaPlaceholder, Icon],
  templateUrl: './jornadas.html',
  styleUrl: './jornadas.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jornadas {
  protected readonly jornadas = [1, 2, 3, 4, 5, 6, 7];
  protected readonly selected = 6;
  protected readonly results = MATCHES.filter((m) => m.jornada === 6);
  protected readonly upcoming = MATCHES.filter((m) => m.jornada === 7);
  protected readonly table = standings();
  protected readonly videos = [
    'Resumen · Jornada 6',
    'Golazo de Valeria Ríos',
    'Así se vivió el domingo',
  ];
}
