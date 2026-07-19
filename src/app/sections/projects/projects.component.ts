import { ChangeDetectionStrategy, Component, HostListener, computed, signal } from '@angular/core';
import { Project, ProjectCategory, ProjectStatus } from '../../core/models/portfolio.model';
import { LanguageService } from '../../core/services/language.service';
import { PROJECTS } from '../../data/portfolio.data';

interface CategoryOption {
  readonly value: ProjectCategory;
  readonly label: { readonly es: string; readonly en: string };
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  protected readonly categories: readonly CategoryOption[] = [
    { value: 'all', label: { es: 'Todos', en: 'All' } },
    { value: 'web', label: { es: 'Web', en: 'Web' } },
    { value: 'desktop', label: { es: 'Escritorio', en: 'Desktop' } },
    { value: 'automation', label: { es: 'Automatización', en: 'Automation' } },
    { value: 'mobile', label: { es: 'Móvil', en: 'Mobile' } }
  ];

  protected readonly activeCategory = signal<ProjectCategory>('all');
  protected readonly selectedProject = signal<Project | null>(null);
  protected readonly visibleProjects = computed(() => {
    const activeCategory = this.activeCategory();

    return activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeCategory));
  });

  constructor(protected readonly language: LanguageService) {}

  protected selectCategory(category: ProjectCategory): void {
    this.activeCategory.set(category);
  }

  protected openProject(project: Project): void {
    this.selectedProject.set(project);
    document.body.classList.add('modal-open');
  }

  protected closeProject(): void {
    this.selectedProject.set(null);
    document.body.classList.remove('modal-open');
  }

  protected statusLabel(status: ProjectStatus): string {
    const labels: Record<ProjectStatus, { es: string; en: string }> = {
      active: { es: 'Activo', en: 'Active' },
      development: { es: 'En desarrollo', en: 'In development' },
      planned: { es: 'Migración planeada', en: 'Planned migration' },
      completed: { es: 'Completado', en: 'Completed' },
      concept: { es: 'Concepto', en: 'Concept' }
    };

    return this.language.text(labels[status]);
  }

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    if (this.selectedProject()) {
      this.closeProject();
    }
  }
}
