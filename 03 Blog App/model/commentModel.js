// create mongoose instance
const mongoose = require('mongoose');

// create comment schema
const commentSchema = new mongoose.Schema({
    
    // comment kis post pe kiya hai
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" // reference to the post model
    },

    // comment kisne kiya hai
    user:{
        type:String,
        required:true
    },
    
    // comment kya kiya hai
    body:{
        type:String,
        required:true
    }

});

// export comment schema
module.exports = mongoose.model("Comment",commentSchema);