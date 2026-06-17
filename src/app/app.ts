import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Categories } from './components/categories/categories';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Features, Categories, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  constructor(translate: TranslateService) {
    const lang = typeof window !== 'undefined' && localStorage.getItem('lang') ? localStorage.getItem('lang')! : 'en';
    translate.setFallbackLang('en');
    translate.use(lang);
  }
}
