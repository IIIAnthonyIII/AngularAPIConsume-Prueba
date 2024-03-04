import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObrasComponent } from './components/obras/obras.component';
import { DetailsObraComponent } from './components/details-obra/details-obra.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'obras/:author', component: ObrasComponent },
    { path: 'obras/:author/:title', component: DetailsObraComponent },
];
