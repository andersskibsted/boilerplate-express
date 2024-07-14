let express = require('express');
const res = require('express/lib/response');
let app = express();
require('dotenv').config();
const bodyParser = require('body-parser');


app.use(function loggerFunc(req, res, next) {
    const strLog = `${req.method} ${req.path} - ${req.ip}`;
    console.log(strLog);
    next();
})
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });


app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({'message': 'Hello json'.toUpperCase()});
    }
    else {
        //const mess = 'Hello json'.toLowerCase();
        res.json({'message': 'Hello json'});
    }
    
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({'time': req.time});
})

app.get('/:word/echo', (req, res, next) => {
    const word = req.params.word;
    res.send({'echo': word});
    next();
})

app.get('/name', (req, res) => {
    var {first: firstName, last: lastName} = req.query;
    res.json({'name': `${firstName} ${lastName}`});
})


app.use(bodyParser.urlencoded({extended: false}));

app.post('/name', (req, res) => {
    //console.log(req.body);
    res.send({'name': `${req.body.first} ${req.body.last}` });
})



























 module.exports = app;
