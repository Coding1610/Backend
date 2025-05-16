// create instance of server using express.js
const express = require('express');
const app = express();

// create local port for live our server
app.listen(3000, () => {
    console.log("Server is running on port 3000");  
});

// creating parser which it helps to parse req.body data in express --> PUT & POST
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to request body object
app.use(bodyParser.json());

// creating routes 

// creating get request/response : retreive Data
app.get('/',(req,res) => {
    res.send("Hello World");
});

// creating post request/response : submit new data
app.post('/cars',(req,res) => {
    const {name,brand} = req.body;
    console.log("name : ",name);
    console.log("brand : ",brand);
    res.send("Car Submited");
});

// linking node with db
const mongoose = require('mongoose');

// it is promise, if u are passing non existing db then first it create new db and connect
mongoose.connect('mongodb://localhost:27017/Cars',{})
.then(() => {console.log("Connection Created")})
.catch((error) => {console.log(error,"Error occure while connecting db with node")});