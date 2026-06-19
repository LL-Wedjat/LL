import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/pharaohs-group/pharaohs-group').then(m => m.PharaohsGroupComponent) },
  { path: 'Liquid-Light', loadComponent: () => import('./pages/liquid-light/liquid-light').then(m => m.LiquidLightComponent) }
];
