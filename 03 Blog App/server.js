// create server
const express = require('express');
const app = express();

// load config from .env file
require('dotenv').config();

// fetch port
const PORT = process.env.PORT | 4000;

// middleware for parsing
app.use(express.json());

// fetch routes
const blog = require('./routes/blog');

// mount the blog routes
app.use("/api/v1",blog);

// database connection
const dbConnect = require('./config/database');
dbConnect();

// start server
app.listen(PORT, () => {
    console.log(`App is now running at port ${PORT}`);
});

// default route
app.get("/",(req,res) => {
    res.send('<h1>Blog Website</h1>');
});