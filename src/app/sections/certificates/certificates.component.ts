import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent {
  constructor(protected readonly language: LanguageService) {}
}
