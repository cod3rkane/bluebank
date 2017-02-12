import { Injectable } from '@angular/core';
import { AccountHolder } from '../models/account-holder.model';
import { Http } from '@angular/http';

@Injectable()
export class TransferService {

    constructor(private http: Http) { }

    checkAccountHolder(accountHolder: AccountHolder) {
        
    }
}
