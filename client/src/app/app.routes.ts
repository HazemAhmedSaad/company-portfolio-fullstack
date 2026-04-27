import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
import { Home } from './features/public/home/home';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Dashboard } from './features/admin/dashboard/dashboard';
import { About } from './features/public/about/about';
import { Services } from './features/public/services/services';
import { Projects } from './features/public/projects/projects';
import { Portfolio } from './features/public/portfolio/portfolio';
import { Contact } from './features/public/contact/contact';
import { NotFound } from './features/public/not-found/not-found';
import { HireUs } from './features/hire-us/hire-us';

export const routes: Routes = [
    {
        path: '', component: PublicLayout, children: [
            {
                path: '', component: Home
            },
            { path: 'home', redirectTo: '', pathMatch: 'full' },
            {
                path: 'about', component: About
            },
            {
                path: 'services', component: Services
            },
            {
                path: 'projects', component: Projects
            },
            {
                path: 'portfolio', component: Portfolio
            },
            {
                path: 'contact', component: Contact
            },
            {
                path: 'hire-us', component: HireUs
            }
        ]
    },
    {
        path: 'dashboard', component: AdminLayout, children: [
            {
                path: '', component: Dashboard
            }
        ]
    },
    {
        path: '**', component: NotFound
    }
];
