import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObrasComponent } from './components/obras/obras.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'obras/:author', component: ObrasComponent }
];
