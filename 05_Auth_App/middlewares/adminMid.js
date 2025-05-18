// middleware for admin authorization
module.exports = function(req,res,next) {

    try{
        if(req.user.role !== "Admin"){
            return res.status(403).json(
                {
                    success:false,
                    message:"You are not Authorized to access admin route"
                }
            )
        }
        next();
    }
    catch(error){
        return res.status(500).json(
            {
                success:false,
                message:error.message
            }
        )
    }   

};