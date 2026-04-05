import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      { path: 'shop', loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop) },
    ],
  },

  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then((m) => m.Register),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password').then((m) => m.ForgotPassword),
      },
    ],
  },
];
