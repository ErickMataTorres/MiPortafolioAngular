import { LocalizedText } from './localized-text.model';

export interface NavigationItem {
  readonly id: string;
  readonly label: LocalizedText;
}

export interface Metric {
  readonly value: string;
  readonly label: LocalizedText;
}

export interface ExperienceRole {
  readonly title: LocalizedText;
  readonly period: LocalizedText;
  readonly responsibilities: readonly LocalizedText[];
}

export interface Experience {
  readonly company: string;
  readonly location?: LocalizedText;
  readonly period: LocalizedText;
  readonly summary: LocalizedText;
  readonly roles: readonly ExperienceRole[];
  readonly tags: readonly string[];
  readonly logo?: string;
}

export type ProjectCategory =
  | 'all'
  | 'web'
  | 'desktop'
  | 'automation'
  | 'mobile';

export type ProjectStatus =
  | 'active'
  | 'development'
  | 'planned'
  | 'completed'
  | 'concept';

export interface ProjectResourceStatus {
  readonly screenshots: LocalizedText;
  readonly repository: LocalizedText;
}

export interface Project {
  readonly slug: string;
  readonly title: LocalizedText;
  readonly shortDescription: LocalizedText;
  readonly problem: LocalizedText;
  readonly solution: LocalizedText;
  readonly highlights: readonly LocalizedText[];
  readonly technologies: readonly string[];
  readonly categories: readonly Exclude<ProjectCategory, 'all'>[];
  readonly status: ProjectStatus;
  readonly resourceStatus: ProjectResourceStatus;
  readonly featured?: boolean;
  readonly liveUrl?: string;
}

export interface SkillGroup {
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly items: readonly string[];
}

export interface EducationItem {
  readonly degree: LocalizedText;
  readonly institution: string;
  readonly period: LocalizedText;
  readonly detail: LocalizedText;
}

export interface SpokenLanguage {
  readonly name: LocalizedText;
  readonly level: LocalizedText;
}
