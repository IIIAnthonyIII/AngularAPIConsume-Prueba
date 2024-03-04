import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObrasComponent } from './components/obras/obras.component';
import { DetailsObraComponent } from './components/details-obra/details-obra.component';
import { LoginComponent } from './components/login/login.component';
import { AutorFavoritoComponent } from './components/autor-favorito/autor-favorito.component';
import { ObraFavoritaComponent } from './components/obra-favorita/obra-favorita.component';

export const routes: Routes = [
    { path: 'obras/:author', loadComponent:() => import('./components/obras/obras.component').then(c => c.ObrasComponent) },
    { path: 'obras/:author/:title', loadComponent:() => import('./components/details-obra/details-obra.component').then(c => c.DetailsObraComponent) },
    { path: 'login', loadComponent:() => import('./components/login/login.component').then(c => c.LoginComponent) },
    { path: 'autorfavorito', loadComponent:() => import('./components/autor-favorito/autor-favorito.component').then(c => c.AutorFavoritoComponent) },
    { path: 'obrafavorita', loadComponent:() => import('./components/obra-favorita/obra-favorita.component').then(c => c.ObraFavoritaComponent) },
    { path: '', loadComponent:() => import('./components/home/home.component').then(c => c.HomeComponent) },
    { path: '**', redirectTo: '' }
];
