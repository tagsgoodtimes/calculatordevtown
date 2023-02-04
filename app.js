const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res)=> {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var opt = req.body.opt;
    if(opt == '+'){
        var result = num1+num2;
    }
    else if(opt == '-'){
        var result = num1-num2;
    }
    else if(opt == '*'){
        var result = num1*num2;
    }
    else if(opt == '/'){
        var result = num1/num2;
    }
    else{
        result = 'enter a valid operator';
    }
    res.status(200).send(result+"")
})

app.listen(5000, ()=> {
    console.log('server is running at port 5000')
});