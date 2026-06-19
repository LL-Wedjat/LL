import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ph-bio',
  imports: [TranslateModule],
  templateUrl: './bio.html',
  styleUrl: './bio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class PhBio {}
