// create instance of mongoose
const mongoose = require('mongoose');

// create schema for file
const fileUpload = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String
        },
        tag:{
            type:String
        },
        mediaURL:{
            type:String
        }
    }
);

// create model using filee schema and export
module.exports = mongoose.model("File",fileUpload);