// mongoose instance
const mongoose = require('mongoose');

// make new schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","User","Student"] // isme se hi hona chahiye, if not then it shows error automatically
    }
});

// make model using "userSchema"
module.exports = mongoose.model("User",userSchema);