var Wallet = function() {
    this.walletModel = require('../models/Wallet');
}

Wallet.prototype.transferFromTo = function(walletIdSender, walletIdReceiver, value) {
    this.walletModel.findOneAndUpdate({
            id_conta: walletIdSender
        }, {$inc: {valor: -value}}).exec();

    return this.walletModel.findOneAndUpdate({
            id_conta: walletIdReceiver
    }, {$inc: {valor: value}});
}

module.exports = new Wallet();