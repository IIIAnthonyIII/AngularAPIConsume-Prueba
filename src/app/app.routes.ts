import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObrasComponent } from './components/obras/obras.component';
import { DetailsObraComponent } from './components/details-obra/details-obra.component';
import { LoginComponent } from './components/login/login.component';
import { AutorFavoritoComponent } from './components/autor-favorito/autor-favorito.component';
import { ObraFavoritaComponent } from './components/obra-favorita/obra-favorita.component';

export const routes: Routes = [
    { path: 'obras/:author', component: ObrasComponent },
    { path: 'obras/:author/:title', component: DetailsObraComponent },
    { path: 'login', component: LoginComponent },
    { path: 'autorfavorito', component: AutorFavoritoComponent },
    { path: 'obrafavorita', component: ObraFavoritaComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];
