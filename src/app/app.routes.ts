import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/pharaohs-group/pharaohs-group').then(m => m.PharaohsGroupComponent) },
  { path: 'liquid-light', loadComponent: () => import('./pages/liquid-light/liquid-light').then(m => m.LiquidLightComponent) },
  { path: 'll', redirectTo: '/liquid-light', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: (route) => {
      const url = route.url.map(s => s.path).join('/');
      const lower = url.toLowerCase();
      return lower !== url ? '/' + lower : '/';
    }
  }
];