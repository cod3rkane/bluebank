var Account = function() {
    this.accountModel = require('../models/Account');
}

Account.prototype.searchHolder = function(ag, cc) {
    return this.accountModel.findOne({
        agencia: ag,
        conta: cc
    });
}

module.exports = new Account();