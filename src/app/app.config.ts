import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, Injectable } from '@angular/core';
import { provideRouter, UrlSerializer, DefaultUrlSerializer, UrlTree } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    const [path, ...queryAndFragment] = url.split(/(?=[?#])/);
    return super.parse(path.toLowerCase() + queryAndFragment.join(''));
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      fallbackLang: typeof window !== 'undefined' && localStorage.getItem('lang') ? localStorage.getItem('lang')! : 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      })
    })
  ]
};
