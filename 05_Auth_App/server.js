// create express instance
const express = require('express');
const app = express();

// import cookie parser
const cookieParser = require('cookie-parser');

// load .env config
require('dotenv').config();

// import PORT number from .env file
const PORT = process.env.PORT || 4000;

// middleware for body parser & cookie parser
app.use(express.json());
app.use(cookieParser());

// import routes
const routes = require('./routes/auth');

// mount routes
app.use("/api/v1",routes);

// import database connection function
const dbConnect = require('./config/database');
dbConnect();

// listen app
app.listen(PORT, () => {
    console.log("App is running successfully on port", PORT);   
});

// default route
app.get("/",(req,res) => {
    res.send("<h1> Authentication Backend</h1>");
});