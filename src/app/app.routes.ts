import { Routes } from '@angular/router';

import { TelaCadastro } from './components/tela-cadastro/tela-cadastro';
import { TelaLogin } from './components/tela-login/tela-login';

export const routes: Routes = [
    {path: '', component: TelaLogin},
    {path: 'cadastro', component:TelaCadastro},
    {path: 'login', component: TelaLogin}
];
