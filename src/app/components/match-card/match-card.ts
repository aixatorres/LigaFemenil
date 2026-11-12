import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Match } from '../../data/models';
import { teamById } from '../../data/mock-data';
import { Icon } from '../icon/icon';
import { TeamCrest } from '../team-crest/team-crest';

@Component({
  selector: 'app-match-card',
  imports: [Icon, TeamCrest],
  templateUrl: './match-card.html',
  styleUrl: './match-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchCard {
  readonly match = input.required<Match>();
  readonly dark = input<boolean>(false);

  protected readonly home = computed(() => teamById(this.match().homeId));
  protected readonly away = computed(() => teamById(this.match().awayId));
  protected readonly played = computed(() => this.match().homeScore !== undefined);
}
