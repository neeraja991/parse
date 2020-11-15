"use strict";
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', function (req, res, next) {
    next();
});
app.get('/api/v1/parse', function (req, res, next) {
    res.send('<h2>V1 Parse</h2><br><form action="/post1" method="POST"> <input type="text" name="value1"> <button type="submit"> Send </button> </form>');
});
app.post('/post1', function (req, res, next) {
    console.log('data from v1: ', req.body.value1);
       
        function sayName(o) {
    var str = o.body.value1;
    console.log(str);
    var fN = str.substring(0, 8);
    var fN1 = fN.split("0");
    var fN2 = fN1.splice(0, 1);
    console.log(fN2);
    var lN = str.substring(8, 18);
    var lN1 = lN.split("0");
    var lN2 = lN1.splice(0, 1);
    console.log(lN2);
    var cI = str.substring(18, 25);
    console.log(cI);
    //convert string to Json and display in console
    const data = {
        firstName: fN2,
        lastName: lN2,
        clientId: cI
    };
   // const data = JSON.stringify(obj);
    console.log(data);
    
   // res.status(200).send('OK');
    res.end(JSON.stringify({data}));

    // {"firstName":["JOHN"],"lastName":["MICHAEL"],"clientId":"9994567"}
}
const v2p = {
    name: "JOHN0000MICHAEL0009994567"
};
sayName(req);

    
});

var server = http.createServer(app);
server.listen(3000);

app.use('/post1', function (req, res, next) {
    //res.send('<h1> first midleware </h1>');
     res.status(200).send('OK');
    
});
