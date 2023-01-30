var express = require('express');
var path = require('path');
const vigenere = require('./ciphertools/vigenere');

var app = new express();
var port = 3000;

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/jQuery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())

app.listen(port, function (err) {
    if (typeof(err) == "undefined") {
        console.log("Your application is running on : " + port + " port");
    }
});

app.get('/', function(req, res) {  
    res.render('pages/main.ejs',{
        crypt: "viginere",
    });
});

app.post('/encrypt', function(req, res) {
    var ciphertype = req.body.type;
    var plainteks = req.body.plainteks;
    var key = req.body.key;
    var cipherteks = "Hasn't been implemented"

    if (ciphertype == 'vigenere') {
        cipherteks = vigenere.encrypt(plainteks,key);
    }
    
    response = {
        cipherteks: cipherteks
    };
    return res.send(JSON.stringify(response));
});

app.post('/encrypt', function(req, res) {
    var ciphertype = req.body.type;
    var cipherteks = req.body.cipherteks;
    var key = req.body.key;
    var plainteks = "Hasn't been implemented"

    if (ciphertype == 'vigenere') {
        plainteks = vigenere.encrypt(plainteks,key);
    }
    
    response = {
        plainteks: plainteks
    };
    return res.send(JSON.stringify(response));
});