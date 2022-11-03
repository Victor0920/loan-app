import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Step } from '../shared/models/step.model';
import { Store } from '../shared/store';
const { loanProcessSteps } = require('./../shared/statics/processSteps.js');

@Component({
    selector: 'ngx-loan-prompt',
    templateUrl: './loan-prompt.component.html',
    styleUrls: ['./loan-prompt.component.scss'],
})
export class LoanPromptComponent implements OnDestroy {
    public loanStepsWithForm: Step[] = [];
    public currentStep: Step = loanProcessSteps[0];
    public totalBasketItems = 4;

    private alive = true;

    constructor(private store: Store, private router: Router) {
        this.loanStepsWithForm = loanProcessSteps.filter((step: Step) => step.form) || [];

        this.store
            .getCurrentStep()
            .pipe(takeWhile(() => this.alive))
            .subscribe((step: Step) => {
                this.currentStep = step;
            });
    }

    changeCurrentStep(step: Step) {
        this.router.navigate([step.path], {});
        this.store.setCurrentStep(this.currentStep);
        this.currentStep = step;
    }

    ngOnDestroy(): void {
        this.alive = false;
    }
}
