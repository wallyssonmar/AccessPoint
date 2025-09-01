import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tela-login',
  imports: [InputTextModule,ButtonModule],
  templateUrl: './tela-login.html',
  styleUrl: './tela-login.css'
})
export class TelaLogin {

}
