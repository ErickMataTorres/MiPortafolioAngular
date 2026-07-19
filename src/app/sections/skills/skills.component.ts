import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SKILL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  protected readonly skillGroups = SKILL_GROUPS;

  constructor(protected readonly language: LanguageService) {}
}
