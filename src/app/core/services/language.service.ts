import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { LanguageCode, LocalizedText } from '../models/localized-text.model';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly languageSignal = signal<LanguageCode>(this.resolveInitialLanguage());

  readonly current = this.languageSignal.asReadonly();

  constructor() {
    effect(() => {
      const language = this.languageSignal();
      this.document.documentElement.lang = language;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      }
    });
  }

  setLanguage(language: LanguageCode): void {
    this.languageSignal.set(language);
  }

  toggle(): void {
    this.setLanguage(this.current() === 'es' ? 'en' : 'es');
  }

  text(value: LocalizedText): string {
    return value[this.current()];
  }

  private resolveInitialLanguage(): LanguageCode {
    if (typeof localStorage === 'undefined') {
      return 'es';
    }

    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === 'en' ? 'en' : 'es';
  }
}
