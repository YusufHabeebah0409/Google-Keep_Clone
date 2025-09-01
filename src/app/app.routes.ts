import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component:Home, title:'Google Keep Clone Dashboard'},
    {path: '**', redirectTo:''}
];
