export class AccountModel {
    private _wallet: AccountWallet;

    constructor(public id: string, public cpf: string, public agencia: string, public conta: string, public updated_at: string) {}

    get wallet() {
        return this._wallet;
    }

    set wallet(wallet: AccountWallet) {
        this._wallet = wallet;
    }
}

export class AccountWallet {
    constructor(public id: string, public idConta: string, public valor: number) {}
}