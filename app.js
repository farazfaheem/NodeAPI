var express = require('express');
var customerRouter = require('./routers/customer');
var app = express();

app.use('/customer', customerRouter);

app.route('/')
    .get(function (req, res) {
        res.send('root get');
    })
    .post(function (req, res) {
        res.send('root post');
    });    


app.listen(3000, function () {
    console.log('Listening on port 3000');
});