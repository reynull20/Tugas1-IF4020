var express = require('express');

var app = new express();
var port = 3000;

app.listen(port, function (err) {
    if (typeof(err) == "undefined") {
        console.log("Your application is running on : " + port + " port");
    }
});

app.get('/', function(req, res) {  
    res.send('<h1>Hello C# Corner.</h1>');  
});  

app.get('/articles', function(req, res) {  
    res.send('<h1>Welcome to C# Corner Articles.</h1>');  
});  