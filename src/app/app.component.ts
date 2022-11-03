import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Step } from './shared/models/step.model';
import { Store } from './shared/store';
const { loanProcessSteps } = require('./shared/statics/processSteps.js');

@Component({
    selector: 'ngx-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public loanProcessSteps: Step[] = [];
    public currentStep: Step;

    constructor(private router: Router, private location: Location, private store: Store) {
        const currentStepPath = this.location.path();

        this.currentStep = loanProcessSteps.find((step: Step) => step.path === currentStepPath) || loanProcessSteps[0];
        this.loanProcessSteps = loanProcessSteps;

        this.store.setCurrentStep(this.currentStep);
    }

    changeCurrentStep(step: Step) {
        this.router.navigate([step.path], {});
        this.currentStep = step;
        this.store.setCurrentStep(this.currentStep);
    }
}
