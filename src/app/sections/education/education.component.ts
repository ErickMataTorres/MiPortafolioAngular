import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { EDUCATION, SPOKEN_LANGUAGES } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  protected readonly education = EDUCATION;
  protected readonly spokenLanguages = SPOKEN_LANGUAGES;

  constructor(protected readonly language: LanguageService) {}
}
