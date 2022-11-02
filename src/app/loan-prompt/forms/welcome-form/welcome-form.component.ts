import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-welcome-form',
    styleUrls: ['./welcome-form.component.scss'],
    templateUrl: './welcome-form.component.html',
})
export class WelcomeFormComponent implements OnInit {
    @Input() form: any;

    constructor() {}

    ngOnInit() {}
}
