const mongoose = require('mongoose');

// creation of schema
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            manLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:100
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
);

// export schema
module.exports = mongoose.model("Todo",todoSchema); // "Todo" here you can give any name