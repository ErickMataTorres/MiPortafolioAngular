import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { HERO_METRICS } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  protected readonly metrics = HERO_METRICS;

  constructor(protected readonly language: LanguageService) {}
}
