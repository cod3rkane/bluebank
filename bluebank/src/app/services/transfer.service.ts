import { Injectable } from '@angular/core';
import { AccountHolder } from '../models/account-holder.model';
import { AccountModel } from '../models/account.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransferService {

    private defaultHeader: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    constructor(private http: Http) { }

    getAccountHolder(accountHolder: AccountHolder) {
        let formData = JSON.stringify({ag: accountHolder.agency, cc: accountHolder.account});
        return this.http.post('http://localhost:8080/accounts/holder', formData,{headers: this.defaultHeader}).toPromise();
    }

    getWallet(account: AccountModel) {
        let formData = JSON.stringify({id: account.id});
        return this.http.post('http://localhost:8080/accounts/wallet', formData,{headers: this.defaultHeader}).toPromise();
    }

    sendTransfer(sender: AccountModel, receiver: AccountModel, value: number) {
        let formData = JSON.stringify({
            "walletIdSender": sender.wallet.idConta,
            "walletIdReceiver": receiver.wallet.idConta,
            "value": value
        });
        return this.http.post('http://localhost:8080/wallet/transfer', formData,{headers: this.defaultHeader}).toPromise();
    }
}
