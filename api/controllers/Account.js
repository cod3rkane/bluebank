var Account = function() {
    this.accountModel = require('../models/Account');
    this.walletModel = require('../models/Wallet');
}

Account.prototype.searchHolder = function(ag, cc) {
    return this.accountModel.findOne({
        agencia: ag,
        conta: cc
    });
}

Account.prototype.searchWallet = function(id) {
    return this.walletModel.findOne({
        id_conta: id
    });
}

module.exports = new Account();