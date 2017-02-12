import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from './services/transfer.service';
import { AccountHolder } from './models/account-holder.model';
import { AccountModel, AccountWallet } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private senderFormGroup: FormGroup;
    private receiverFormGroup: FormGroup;
    @ViewChild('btnSend') private btnSend: ElementRef;
    private showTransferSec = true;
    private showRing = false;
    private senderInvalid = false;
    private receiverInvalid = false;
    private senderResponse: AccountModel;
    private receiverResponse: AccountModel;
    private showInfo = false;
    private infoMsg: String;
    private valueFormGroup: FormGroup;

    constructor(private transferService: TransferService, private fb: FormBuilder) {
        this.valueFormGroup = this.fb.group({
            value: ['', [Validators.required]]
        });
    }

    onFormValuesSender(formData: FormGroup) {
        this.senderFormGroup = formData;
        this.enableBtnSend();
    }

    onFormValuesReceiver(formData: FormGroup) {
        this.receiverFormGroup = formData;
        this.enableBtnSend();
    }

    onSendForm() {
        this.showInfo = false;
        this.senderInvalid = false;
        this.receiverInvalid = false;
        this.showTransferSec = false;
        this.showRing = true;
        this.checkHolders().then(
            response => {
                let res = response.json();
                if (res === null) {
                    this.receiverInvalid = true;
                    this.onCancelTransfer();
                } else if (res instanceof Object) {
                    this.receiverResponse = new AccountModel(res.account._id, res.account.cpf, res.account.agencia, res.account.conta, res.account.updated_at);
                    this.receiverResponse.wallet = new AccountWallet(res.wallet._id, res.wallet.id_conta, res.wallet.valor);
                    if (this.senderResponse) {
                        this.transferService.sendTransfer(this.senderResponse, this.receiverResponse, this.valueFormGroup.value.value)
                        .then(response => {
                            this.infoMsg = 'Sucesso!';
                            this.showInfo = true;
                            this.onCancelTransfer();
                        }, error => {
                            this.infoMsg = 'Ocorreu um erro inesperado.';
                            this.showInfo = true;
                            this.onCancelTransfer();
                        });
                    } else {
                        this.senderInvalid = true;
                        this.onCancelTransfer();
                    }
                }
            },
            error => {
                this.receiverInvalid = true;
                this.onCancelTransfer();
            }
        );
    }

    private checkHolders() {
        let senderHolder = new AccountHolder();
        senderHolder.account = this.senderFormGroup.value.account;
        senderHolder.agency = this.senderFormGroup.value.agency;

        this.transferService.getAccountHolder(senderHolder).then(
            response => {
                console.log(response);
                let res = response.json();
                if (res === null) {
                    this.senderInvalid = true;
                    this.onCancelTransfer();
                } else if (res instanceof Object) {
                    this.senderResponse = new AccountModel(res.account._id, res.account.cpf, res.account.agencia, res.account.conta, res.account.updated_at);
                    this.senderResponse.wallet = new AccountWallet(res.wallet._id, res.wallet.id_conta, res.wallet.valor);
                    if (!this.checkSenderWallet()) {
                        this.infoMsg = 'Saldo indisponível.';
                        this.showInfo = true;
                        this.onCancelTransfer();
                    }
                }
            },
            error => {
                this.senderInvalid = true;
                this.onCancelTransfer();
            }
        );

        let receiverHolder = new AccountHolder();
        receiverHolder.account = this.receiverFormGroup.value.account;
        receiverHolder.agency = this.receiverFormGroup.value.agency;

        return this.transferService.getAccountHolder(receiverHolder);
    }

    private checkSenderWallet() {
        if (this.valueFormGroup.value.value <= this.senderResponse.wallet.valor) {
            return true;
        } else {
            return false;
        }
    }

    private enableBtnSend() {
        if ((this.senderFormGroup && this.senderFormGroup.valid) && (this.receiverFormGroup && this.receiverFormGroup.valid)) {
            this.btnSend.nativeElement.disabled = false;
        } else {
            this.btnSend.nativeElement.disabled = true;
        }
    }

    private onCancelTransfer() {
        this.showRing = false;
        this.showTransferSec = true;
        this.senderResponse = undefined;
        this.receiverResponse = undefined;
    }
}
