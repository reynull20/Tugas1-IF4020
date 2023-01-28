var express = require('express');
var path = require('path')
var changetype  = require('./tools/changetype');

var app = new express();
var port = 3000;

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.locals.encrypt = () => {
    
}

app.listen(port, function (err) {
    if (typeof(err) == "undefined") {
        console.log("Your application is running on : " + port + " port");
    }
});

app.get('/', function(req, res) {  
    res.render('pages/main.ejs',{
        crypt: "viginere"
    });
});  