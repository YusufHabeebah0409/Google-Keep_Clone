import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { Redirect } from './redirect/redirect';

export const routes: Routes = [
    {path: '', component:Home, title:'Google Keep Clone Dashboard'},
    {path:'Sign-Up', component:SignUp, title:'Google Keep Clone Sign-up'},
    {path:'Sign-In', component:SignIn, title:'Google Keep Clone Sign-in'},
    {path: 'Page Not Found', component:Redirect, title:'Page Not Found'},
    {path: '**', redirectTo:'Page Not Found'}
];
