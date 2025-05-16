// import models
const Post = require('../model/postModel');

// create route handler
exports.getPosts = async(req,res) => {
    
    try{
        const response = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Fetched All Posts Successfully."
            }
        )
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error.",
                message:error.message
            }
        )
    }

};