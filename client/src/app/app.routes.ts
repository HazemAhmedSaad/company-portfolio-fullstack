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
import { HireUs } from './features/public/hire-us/hire-us';
import { MaageHome } from './features/admin/maage-home/maage-home';
import { MaageAbout } from './features/admin/maage-about/maage-about';
import { ManageServices } from './features/admin/manage-services/manage-services';
import { ManageProjects } from './features/admin/manage-projects/manage-projects';
import { ManageMessages } from './features/admin/manage-messages/manage-messages';
import { ManageMembers } from './features/admin/manage-members/manage-members';

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
        path: 'dashboard', component: AdminLayout , children: [
            {
                path: '', component: Dashboard,

            },
            {
                path: 'dashboard', redirectTo: '', pathMatch: 'full'
            },
            {
                path: 'home', component: MaageHome
            }
            ,
            {
                path: 'about', component: MaageAbout
            }
            ,
            {
                path: 'services', component: ManageServices
            },
            {
                path: 'projects', component: ManageProjects
            }
            ,
            {
                path: 'messages', component: ManageMessages
            }
            ,
            {
                path: 'team', component: ManageMembers
            }

        ]
    },
    {
        path: '**', component: NotFound
    }
];
