// import models
const Post = require('../model/postModel');
const Comment = require('../model/commentModel');

// route handler
exports.createComment = async(req,res) => {

    try{
        // fetch data
        const {post,user,body} = req.body;
        
        // store to db
        const newComment = await Comment.create({post,user,body});
        
        // now we need to add this comment on post comment array
        // fetch post by id and update
        const updatePost = await Post.findByIdAndUpdate(
                                post, 
                                {$push:{comments:newComment._id}}, 
                                {new:true}
                            ).populate("comments").exec(); // populate the comments array with comment document;
        // push for update any entry
        // pull for delete any entry
        // new:true --> return updated document

        res.json(
            {   
                post:updatePost
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