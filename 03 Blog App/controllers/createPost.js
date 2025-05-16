// import models
const Post = require('../model/postModel');

// create route handler
exports.createPost = async(req,res) => {
    
    try{
        // fetch data
        const {title,body} = req.body;

        // create new post
        const response = await Post.create({title,body});
        
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Post Created Successfully."
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