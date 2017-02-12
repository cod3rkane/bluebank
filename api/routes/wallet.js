var express = require('express');
var router = express.Router();

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var walletController = require('../controllers/Wallet');

router.get('/', upload.array(), function(req, res, next) {
    res.send('Wallet end-point');
});

router.post('/transfer', upload.array(), function(req, res, next) {
    console.log(req.body);
    if (req.body.walletIdSender && req.body.walletIdReceiver && req.body.value) {
        walletController.transferFromTo(req.body.walletIdSender, req.body.walletIdReceiver, req.body.value).then(function(response) {
            res.json(response);
        });
    } else {
        res.sendStatus(400);
    }
});


module.exports = router;