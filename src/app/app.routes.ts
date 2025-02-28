import { Routes } from '@angular/router';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';
import { AdminComponent } from './template/admin/admin.component';
import { LoginComponent } from './template/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: PortofolioWebComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];
