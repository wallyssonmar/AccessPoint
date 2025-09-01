import { Component } from '@angular/core';

import { TelaLogin } from './components/tela-login/tela-login';


@Component({
  selector: 'app-root',
  imports: [ TelaLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AccessPoint';
}
