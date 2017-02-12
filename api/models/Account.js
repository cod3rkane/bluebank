var mongoFactory = require('../mongoFactory');
var mongo = mongoFactory.getMongo();

var AccountScheme = new mongo.Schema({
    cpf: String,
    agencia: String,
    conta: String,
    updated_at: { type: Date, default: Date.now },
});

var Account = mongo.model('contas', AccountScheme);

module.exports = Account;