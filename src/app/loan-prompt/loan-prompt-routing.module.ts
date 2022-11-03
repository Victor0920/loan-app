import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoanPromptComponent } from './loan-prompt.component';

import { FormComponent } from './form/form.component';

const routes: Routes = [
    {
        path: '',
        component: LoanPromptComponent,
        children: [
            {
                path: 'personal-information',
                data: { formTitle: 'personalInformation' },
                component: FormComponent,
            },
            {
                path: 'adress-details',
                data: { formTitle: 'adressDetails' },
                component: FormComponent,
            },
            {
                path: 'income',
                data: { formTitle: 'income' },
                component: FormComponent,
            },
            {
                path: 'verify',
                data: { formTitle: 'verify' },
                component: FormComponent,
            },
            {
                path: 'approved',
                component: FormComponent,
            },
            {
                path: 'denied',
                component: FormComponent,
            },
            {
                path: '',
                redirectTo: 'personal-information',
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
