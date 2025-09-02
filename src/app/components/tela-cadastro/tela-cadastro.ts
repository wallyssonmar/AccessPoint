import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { matchValidator } from '../../utils/validator-cadastro';

@Component({
  selector: 'app-tela-cadastro',
  imports: [
    InputTextModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './tela-cadastro.html',
  styleUrl: './tela-cadastro.css',
})
export class TelaCadastro {
  value: string | undefined;
  senha: string = '';
  confirmSenha: string = '';
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmSenha: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: matchValidator('senha', 'confirmSenha'),
      }
    );
  }
  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
