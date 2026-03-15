import { Routes } from '@angular/router';
import { ProjDesc } from './proj-desc/proj-desc';
import { Home } from './home/home';

export const routes: Routes = [
    { path: "", component:  Home},
    { path: 'project/:id', component: ProjDesc },
    { path: '**', redirectTo: '' }
];
