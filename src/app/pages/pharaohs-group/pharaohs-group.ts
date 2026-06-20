import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PhHero } from './components/hero/hero';
import { PhDivisions } from './components/divisions/divisions';
import { PhClients } from './components/clients/clients';
import { PhFooter } from './components/footer/footer';
import { PhBio } from './components/bio/bio';
import { PhLlBanner } from './components/ll-banner/ll-banner';

@Component({
  selector: 'app-pharaohs-group',
  imports: [TranslateModule, PhHero, PhBio, PhDivisions, PhLlBanner, PhClients, PhFooter],
  templateUrl: './pharaohs-group.html',
  styleUrl: './pharaohs-group.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class PharaohsGroupComponent {}
