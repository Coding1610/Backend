// instance of mongoose
const mongoose = require('mongoose');

// create post schema
const postSchema = new mongoose.Schema({
    
    // title of post
    title:{
        type:String,
        required:true,
    },

    // body of post
    body:{
        type:String,
        required:true,
    },

    // kitne like hai/kisne like kiya
    likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    },

    // kitne comments hai/kisne comment kiya
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }

});

// export post schema
module.exports = mongoose.model("Post",postSchema);