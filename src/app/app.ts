import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilityBar } from './shared/components/utility-bar/utility-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UtilityBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang') ?? 'en';
      translate.setFallbackLang('en');
      translate.use(lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }
}
