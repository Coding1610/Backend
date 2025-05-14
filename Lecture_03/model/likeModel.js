// instance of mongoose
const mongoose = require('mongoose');

// create like schema
const likeSchema = new mongoose.Schema({

    // kis post pe like kiya
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },

    // kisne like kiya
    user:{
        type:String,
        required:true
    },

});

// export like schema
module.exports = mongoose.model("Like",likeSchema);