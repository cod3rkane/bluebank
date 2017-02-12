var express = require('express');
var router = express.Router();

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var accountController = require('../controllers/Account');

router.get('/', upload.array(), function(req, res, next) {
    res.send('Accounts end-point');
});

router.post('/holder', upload.array(), function(req, res, next) {
    if (req.body.ag && req.body.cc) {
        accountController.searchHolder(req.body.ag, req.body.cc).then(function(data) {
            res.json(data);
        });
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;