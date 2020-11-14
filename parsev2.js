"use strict";
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', (req, res, next) => {
    next();
});
app.get('/api/v2/parse', (req, res, next) => {
    res.send('<h2>V2 Parse</h2><br><form action="/post2" method="POST"> <input type="text" name="value2"> <button type="submit"> Send </button> </form>');
});
app.post('/post2', (req, res, next) => {
    console.log('data from v2: ', req.body.value2);
    res.status(200).send('OK');
    res.end();
    res.redirect('/api/v2/parse');
});
app.use('/', (req, res, next) => {
    res.send('<h1> second middleware</h1>');
});
const server = http.createServer(app);
server.listen(3000);

function sayName(o) {
    var str = "JOHN0000MICHAEL0009994567";
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
    const obj = {
        firstName: fN2,
        lastName: lN2,
        clientId: cI3
    };
    const data = JSON.stringify(obj);
    console.log(data);
    // {"firstName":["JOHN"],"lastName":["MICHAEL"],"clientId":"999-4567"}
}
const v1p = {
    name: "JOHN0000MICHAEL0009994567"
};
sayName(v1p);




