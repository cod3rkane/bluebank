import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private senderFormGroup: FormGroup;
    private receiverFormGroup: FormGroup;

    onFormValuesSender(formData: FormGroup) {
        console.log('sender');
        console.log(formData);
    }

    onFormValuesReceiver(formData: FormGroup) {
        console.log('receiver');
        console.log(formData);
    }
}
