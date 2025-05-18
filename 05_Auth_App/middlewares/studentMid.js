// middleware for student authorization
module.exports = function(req,res,next) {

    try{
        if(req.user.role !== "Student"){
            return res.status(403).json(
                {
                    success:false,
                    message:"You are not Authorized to access student route"
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