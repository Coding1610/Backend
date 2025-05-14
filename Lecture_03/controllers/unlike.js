// import models
const Post = require('../model/postModel');
const Like = require('../model/likeModel');

// create route handler
exports.unlike = async(req,res) => {

    try{
        // fetch data
        const {post,like} = req.body;
       
        // delete like entry from db
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        // now we need to remove this like from post like array
        const updatedPost = await Post.findByIdAndUpdate(
                                    post, 
                                    {$pull:{likes:deletedLike._id}},
                                    {new:true}
                                ).populate("likes").populate("comments").exec();

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