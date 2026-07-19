import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../core/services/language.service';

interface ContactFormModel {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  protected readonly model: ContactFormModel = {
    name: '',
    email: '',
    message: ''
  };

  constructor(protected readonly language: LanguageService) {}

  protected sendMessage(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const subject =
      this.language.current() === 'es'
        ? 'Contacto desde el portafolio'
        : 'Contact from portfolio';

    const body = [
      `${this.language.current() === 'es' ? 'Nombre' : 'Name'}: ${this.model.name}`,
      `${this.language.current() === 'es' ? 'Correo' : 'Email'}: ${this.model.email}`,
      '',
      this.model.message
    ].join('\n');

    window.location.href =
      `mailto:AProgramador102@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
