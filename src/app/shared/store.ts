import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Step } from './models/step.model';
const { formFields } = require('./../shared/statics/formFields.js');

@Injectable()
export class Store {
    public currentStep: BehaviorSubject<Step>;
    public formState: BehaviorSubject<any>;

    constructor() {
        this.currentStep = new BehaviorSubject<Step>({ name: '', path: '' });

        this.formState = new BehaviorSubject<any>(formFields);
    }

    setCurrentStep(step: Step): void {
        this.currentStep.next(step);
    }

    getCurrentStep(): Observable<Step> {
        return this.currentStep.asObservable();
    }

    updateFormState(newForm: any): void {
        this.formState.next(newForm);
    }

    getFormState(): Observable<any> {
        return this.formState.asObservable();
    }
}
