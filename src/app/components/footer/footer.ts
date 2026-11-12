import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';
import { PUBLIC_NAV } from '../navbar/navbar';
import { RainbowStripe } from '../rainbow-stripe/rainbow-stripe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, RainbowStripe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly links = PUBLIC_NAV;
  protected readonly year = new Date().getFullYear();
}
