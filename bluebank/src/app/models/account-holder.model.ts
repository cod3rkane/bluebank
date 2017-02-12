export class AccountHolder {
    private _account: string;
    private _agency: string;

    get account() {
        return this._account;
    }

    set account(acc: string) {
        this._account = acc;
    }

    get agency() {
        return this._agency;
    }

    set agency(ag: string) {
        this._agency = ag;
    }
}