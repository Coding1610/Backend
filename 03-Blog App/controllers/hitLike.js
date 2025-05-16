// import models
const Post = require('../model/postModel');
const Like = require('../model/likeModel');

// create route handler
exports.hitLike = async(req,res) => {

    try{
        // fetch data
        const {post,user} = req.body;
       
        // put data to like db
        const newLike = await Like.create({post,user});

        // now we need add this like of post like array
        const updatedPost = await Post.findByIdAndUpdate(
                                    post, 
                                    {$push:{likes:newLike._id}},
                                    {new:true}
                                ).populate("likes").exec();

        res.json(
            {
                post:updatedPost
            }
        )
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error",
                message:error.message
            }
        )
    }

};