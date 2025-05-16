// create express instance
const express = require('express');
const app = express();

// load .env config
require('dotenv').config();

// import PORT number from .env file
const PORT = process.env.PORT || 4000;

// middleware for body parser
app.use(express.json());

// import routes
const routes = require('./routes/auth');

// mount routes
app.use("/api/v1/auth",routes);

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