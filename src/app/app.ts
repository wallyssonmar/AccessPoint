import { Component } from '@angular/core';

import { TelaLogin } from './components/tela-login/tela-login';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AccessPoint';
}
