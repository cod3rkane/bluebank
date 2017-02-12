var express = require('express');
var api = express();
var bodyParser = require('body-parser');

var mongo = require('./mongoFactory');

// Routes
var accountsRoute = require('./routes/accounts');

api.use(bodyParser.json()); // for parsing application/json
api.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

api.get('/', function(req, res) {
    res.send('Welcome to Blue Bank API 1.0.0 by Cod3r Kane (Júlio César Lopes)');
});

api.use('/accounts', accountsRoute);

api.listen(4000, function() {
    console.log('API Listen port 4000');
})