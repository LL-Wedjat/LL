import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ph-divisions',
  imports: [TranslateModule, RouterLink],
  templateUrl: './divisions.html',
  styleUrl: './divisions.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class PhDivisions {
  expandedIndex = signal<number>(-1);

  companies = [
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.0.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.0.description' },
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.1.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.1.description' },
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.2.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.2.description' },
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.3.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.3.description' },
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.4.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.4.description' },
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.5.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.5.description' },
    { nameKey: 'PHARAOHS.COMPANIES.ITEMS.6.name', descKey: 'PHARAOHS.COMPANIES.ITEMS.6.description' },
  ];

  toggle(index: number): void {
    this.expandedIndex.update(current => current === index ? -1 : index);
  }
}
