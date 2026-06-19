import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Categories } from './components/categories/categories';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-liquid-light',
  imports: [Header, Hero, Features, Categories, Footer],
  templateUrl: './liquid-light.html',
  styleUrl: './liquid-light.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' }
})
export class LiquidLightComponent {}
