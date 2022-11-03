import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoanPromptComponent } from './loan-prompt.component';
import { LoanPromptRoutingModule } from './loan-prompt-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [LoanPromptRoutingModule, FormsModule, InlineSVGModule, CommonModule],
    declarations: [LoanPromptComponent, FormComponent],
})
export class LoanPromptModule {}
