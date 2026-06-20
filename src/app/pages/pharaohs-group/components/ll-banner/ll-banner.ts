import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ph-ll-banner',
  imports: [RouterLink, TranslateModule],
  templateUrl: './ll-banner.html',
  styleUrl: './ll-banner.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhLlBanner {}