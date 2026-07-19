import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;

  constructor(protected readonly language: LanguageService) {}
}
