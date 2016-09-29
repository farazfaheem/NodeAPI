var express = require('express');
var router = express.Router();

router.use(function (request, response, next) {
    console.log('customer router is invoked');
    next();
});

router.get('/', function (req, res) {
    res.send('get customers');

});


module.exports = router;