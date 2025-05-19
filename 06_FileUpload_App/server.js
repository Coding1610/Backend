// create instance of express
const express = require('express');
const app = express();

// load config of .env file
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// middleware for body parsing
app.use(express.json());

// middleware for file upload
const fileUpload = require('express-fileupload');
app.use(fileUpload({useTempFiles:true}));

// import routes and mounting
const fileRoutes = require('./routes/file');
app.use('/api/v1', fileRoutes);

// app listen
app.listen(PORT, () => {
    console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

// db connection
const dbConnect = require('./config/database');
dbConnect();

// cloudinary connection
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// default route
app.get("/", (req,res) => {
    res.send('<h1> File Upload Application </h1>');
});