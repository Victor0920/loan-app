import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepGuard } from './guards/step-guard.service';

import { LoanPromptModule } from './loan-prompt/loan-prompt.module';
const routes: Routes = [
    {
        path: '',
        // canActivate: [StepGuard],
        loadChildren: () => import('./loan-prompt/loan-prompt.module').then((m) => m.LoanPromptModule),
    },
    // { path: '**', canActivate: [AuthGuard], redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
