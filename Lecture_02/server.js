// create server
const express = require('express');
const app = express();

// load config from env file
require('dotenv').config();

// get port number
const PORT = process.env.PORT || 4000;

// middleware for parsing
app.use(express.json());

// import API routes
const todoRoutes = require('./routes/todo');

// mount the todo API routes / add all routes after /api/v1
app.use("/api/v1",todoRoutes);

app.listen(PORT, () => {
    console.log("App is now running on port 3000");
});

// connect with db
const dbConnect = require('./config/database');
dbConnect();

// default API
app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>");
});