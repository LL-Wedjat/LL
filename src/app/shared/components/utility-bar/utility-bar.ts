import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-utility-bar',
  templateUrl: './utility-bar.html',
  styleUrl: './utility-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class UtilityBar {
  currentLang = signal('en');

  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang') ?? 'en';
      this.currentLang.set(lang);
    }
  }

  toggleLanguage() {
    const newLang = this.currentLang() === 'en' ? 'ar' : 'en';
    this.currentLang.set(newLang);
    this.translate.use(newLang);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    }
  }
}
