import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '../../../components/page-header/page-header';
import { TeamCard } from '../../../components/team-card/team-card';
import { standings } from '../../../data/mock-data';

@Component({
  selector: 'app-equipos',
  imports: [PageHeader, TeamCard],
  template: `
    <app-page-header
      eyebrow="Torneo Otoño 2026"
      title="Equipos"
      note="8 y contando"
      subtitle="Conoce a los equipos que hacen la liga cada domingo, su plantel y cómo van en el torneo."
    />
    <section class="section" aria-label="Listado de equipos">
      <div class="container grid-4">
        @for (team of teams; track team.id) {
          <app-team-card [team]="team" />
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Equipos {
  protected readonly teams = standings();
}
