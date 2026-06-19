import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ph-clients',
  imports: [TranslateModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class PhClients {}
