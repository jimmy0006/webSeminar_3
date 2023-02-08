const express = require('express');
const bodyParser = require('body-parser')
const morgan = require("morgan");
const mongodb = require('./mongoose/mongooseConnector')

const app = express();

const user = require('./user/user');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("Hello world!")
})

app.use('/user',user);

mongodb.connect();

app.listen(3000,()=>{
    console.log("listening on port : 3000")
})