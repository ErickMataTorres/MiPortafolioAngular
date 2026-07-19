import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import { NAVIGATION_ITEMS } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly menuOpen = signal(false);

  constructor(
    protected readonly language: LanguageService,
    protected readonly theme: ThemeService
  ) {}

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
