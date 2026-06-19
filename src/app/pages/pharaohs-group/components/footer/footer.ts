import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ph-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class PhFooter {
  currentYear = new Date().getFullYear();
}
