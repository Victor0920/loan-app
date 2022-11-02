import { NgModule } from '@angular/core';

import { LoanPromptComponent } from './loan-prompt.component';
import { LoanPromptRoutingModule } from './loan-prompt-routing.module';

@NgModule({
    imports: [LoanPromptRoutingModule],
    declarations: [LoanPromptComponent],
})
export class LoanPromptModule {}
