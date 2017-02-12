import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private senderFormGroup: FormGroup;
    private receiverFormGroup: FormGroup;
    @ViewChild('btnSend')
    private btnSend: ElementRef;

    constructor(private transferService: TransferService) {}

    onFormValuesSender(formData: FormGroup) {
        this.senderFormGroup = formData;
        this.enableBtnSend();
    }

    onFormValuesReceiver(formData: FormGroup) {
        this.receiverFormGroup = formData;
        this.enableBtnSend();
    }

    onSendForm() {
    }

    private enableBtnSend() {
        if ((this.senderFormGroup && this.senderFormGroup.valid) && (this.receiverFormGroup && this.receiverFormGroup.valid)) {
            this.btnSend.nativeElement.disabled = false;
        } else {
            this.btnSend.nativeElement.disabled = true;
        }
    }
}
