import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoanPromptComponent } from './loan-prompt.component';

import { WelcomeFormComponent } from './forms/welcome-form/welcome-form.component';

const routes: Routes = [
    {
        path: '',
        component: LoanPromptComponent,
        children: [
            {
                path: 'personal-information',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                component: WelcomeFormComponent,
            },
            {
                path: 'adress-details',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                component: WelcomeFormComponent,
            },
            {
                path: 'income',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                component: WelcomeFormComponent,
            },
            {
                path: 'verify',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                component: WelcomeFormComponent,
            },
            {
                path: 'approved',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                component: WelcomeFormComponent,
            },
            {
                path: 'denied',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                component: WelcomeFormComponent,
            },
            {
                path: '',
                redirectTo: 'personal-information',
                // canActivate: [AuthGuard, RoleGuard],
                // data: { allowedPermissions: ['home.view'] },
                pathMatch: 'full',
            },
            {
                path: '**',
                redirectTo: 'personal-information',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoanPromptRoutingModule {}
