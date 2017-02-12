var mongoFactory = require('../mongoFactory');
var mongo = mongoFactory.getMongo();

var WalletScheme = new mongo.Schema({
    id_conta: String,
    valor: Number,
    updated_at: { type: Date, default: Date.now },
});

var Wallet = mongo.model('carteira', WalletScheme);
// Wallet.create({id_conta: '58a0efbe264af8324986a24c', valor: 100});

module.exports = Wallet;
