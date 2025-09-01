import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tela-login',
  imports: [
    InputTextModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './tela-login.html',
  styleUrl: './tela-login.css'
})
export class TelaLogin {

  value: string | undefined;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
