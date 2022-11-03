import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Store } from 'src/app/shared/store';

const { formFields } = require('../../shared/statics/formFields');

@Component({
    selector: 'ngx-form',
    styleUrls: ['./form.component.scss'],
    templateUrl: './form.component.html',
})
export class FormComponent implements OnDestroy {
    public fullForm: any = {};
    public currentYear = new Date().getFullYear();
    public formTitle = '';

    private alive = true;

    constructor(private route: ActivatedRoute, private store: Store) {
        this.formTitle = this.route.snapshot.data['formTitle'];

        this.store
            .getFormState()
            .pipe(takeWhile(() => this.alive))
            .subscribe((formState) => {
                this.fullForm = formState;
            });
    }

    validateField(fieldIndex: number, sectionIndex: number, field: any, event: any) {
        let inputValue = event.target.value.trim();

        if (field.validator) {
            const regex = new RegExp(field.validator);
            const isValid = regex.test(inputValue);

            if (isValid) {
                this.updateForm(fieldIndex, sectionIndex, inputValue);
                this.successField(sectionIndex, field);
            } else {
                this.warnIncorrectField(sectionIndex, field);
            }
        } else if (inputValue.length > 0) {
            this.updateForm(fieldIndex, sectionIndex, inputValue);
            this.successField(sectionIndex, field);
        } else if (field.required) {
            this.warnIncorrectField(sectionIndex, field);
        }
    }

    updateForm(fieldIndex: number, sectionIndex: number, newValue: string | number | any) {
        this.fullForm[this.formTitle].sections[sectionIndex].fields[fieldIndex].value = newValue;

        this.store.updateFormState(this.fullForm);
    }

    warnIncorrectField(sectionIndex: number, field: any) {
        this.fullForm[this.formTitle].sections[sectionIndex].fields.map((currentField: any) => {
            if (currentField.id === field.id) {
                field.warning = true;
                field.success = false;
            }
        });
    }

    successField(sectionIndex: number, field: any) {
        this.fullForm[this.formTitle].sections[sectionIndex].fields.map((currentField: any) => {
            if (currentField.id === field.id) {
                field.success = true;
                field.warning = false;
            }
        });
    }

    logMyProgress() {
        console.log(this.fullForm);
    }

    ngOnDestroy(): void {
        this.alive = false;
    }
}
