import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SignIn } from '../models/sign-in.model';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ButtonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  formBuilder = inject(FormBuilder);
  protection: boolean = false;
  newCustomer: SignIn = {
    username: '',
    password: '',
    email: ''
  };

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group({
      password: ['', [Validators.required, this.securePasswordValidator()]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator() })
  });

passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;
      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;
      return passwordValid ? null : { securePassword: true };
    };
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log("log du formuliare en ts", this.signUpForm.value);
      this.newCustomer.email = this.signUpForm.value.email as string;
      this.newCustomer.username = this.signUpForm.value.username as string;
      this.newCustomer.password = this.signUpForm.value.passwords?.password as string;
      this.protection = true;
      console.log('Formulaire envoyé avec succès', this.signUpForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
