import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-account-input',
    templateUrl: './account-input.component.html',
    styleUrls: ['./account-input.component.css']
})
export class AccountInputComponent {
    @Input()
    invalid: boolean;

    @Output()
    formValues: EventEmitter<FormGroup> = new EventEmitter();

    private form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            agency: ['', [Validators.required]],
            account: ['', [Validators.required]]
        });
    }

    private onPressKey() {
        this.formValues.emit(this.form);
    }
}
