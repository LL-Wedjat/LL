import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ph-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class PhHero {
  scrollToBanner(): void {
    const banner = document.getElementById('liquid-light-banner');
    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
