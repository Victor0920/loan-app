import { NgModule } from '@angular/core';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
const SHARED_FORMS = [WelcomeFormComponent];

@NgModule({
    imports: [],
    declarations: [...SHARED_FORMS],
    exports: [...SHARED_FORMS],
})
export class SharedFormsModule {}
