"use strict";
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', function (req, res, next) {
    next();
});
app.get('/api/v2/parse', function (req, res, next) {
    res.send('<h2>V2 Parse</h2><br><form action="/post2" method="POST"> <input type="text" name="value2"> <button type="submit"> Send </button> </form>');
});
app.post('/post2', function (req, res, next) {
    console.log('data from v2: ', req.body.value2);
function sayName(o) {
    var str = o.body.value2;
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
    var cI3 = cI.slice(0, 3);
    var cI4 = cI.slice(3, 7);
    cI3 = cI3 + "-" + cI4;
    console.log(cI3);
    //convert string to Json and display in console
   //OUTPUT
   var status = 200;
    const data1 = {
        firstName: fN2,
        lastName: lN2,
        clientId: cI3
    };
   // {"firstName":["JOHN"],"lastName":["MICHAEL"],"clientId":"999-4567"}
    console.log(data1);
    const obj = {
      statusCode: status,
      data: data1
    }
    const d = JSON.stringify(obj);
   // res.status(200).send('OK');
    res.end(d);
   }
sayName(req);
});

var server = http.createServer(app);
server.listen(3000);


