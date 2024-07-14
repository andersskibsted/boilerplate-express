let express = require('express');
const res = require('express/lib/response');
let app = express();
require('dotenv').config();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    //let mess = 'Hello json';
    console.log(process.env);
    if (process.env.MESSAGE_STYLE==="uppercase") {
        //const mess = 'Hello json'.toUpperCase();
        res.json({'message': 'Hello json'.toUpperCase()});
    }
    else {
        console.log(process.env.MESSAGE_STYLE);
        console.log('Hello json'.toUpperCase());
        //const mess = 'Hello json'.toLowerCase();
        res.json({'message': 'Hello json'});
    }
    //const obj = {'message': mess};
    
})































 module.exports = app;
