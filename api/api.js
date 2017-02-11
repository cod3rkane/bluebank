var express = require('express');
var api = express();

api.get('/', function(req, res) {
    res.send('Hello world');
})

api.listen(4000, function() {
    console.log('API Listen port 4000');
})