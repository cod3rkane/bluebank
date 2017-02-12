var express = require('express');
var api = express();
var bodyParser = require('body-parser');

var mongo = require('./mongoFactory');

// Routes
var accountsRoute = require('./routes/accounts');
var walletRoute = require('./routes/wallet');

api.use(bodyParser.json()); // for parsing application/json
api.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

api.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
api.get('/', function(req, res) {
    res.send('Welcome to Blue Bank API 1.0.0 by Cod3r Kane (Júlio César Lopes)');
});

api.use('/accounts', accountsRoute);
api.use('/wallet', walletRoute);

api.listen(8080, function() {
    console.log('API Listen port 8080');
})