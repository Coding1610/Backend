// create instance of jwt
const jwt = require('jsonwebtoken');

// load .env file config
require('dotenv').config();

module.exports = function(req,res,next) { // next is use for calling next middleware if you include multiple middleware in routes
    
    try{
        
        // fetch token
        const token = req.header("Authorization")?.replace("Bearer ","").trim() || req.body?.token || req.cookies?.token;

        // 3 way to play with token : Body, Cookie and Header
        // console.log("Body Token : ", req.body?.token);
        // console.log("Cookies Token : ", req.cookies?.token);
        // console.log("Header Token : ", req.header("Authorization")?.replace("Bearer ", "").trim());
        
        // if no token
        if(!token || token === undefined ){
            return res.status(401).json(
                {
                    successs:false,
                    message:"Token not found"
                }
            );
        }

        // verify token 
        try{    
            const payload = jwt.verify(token,process.env.JWT_KEY); // jwt.verify(toeken,jwtKey)
            // console.log(payload);
            req.user = payload
        }
        catch(error){
            return res.status(401).json(
                {
                    success:false,
                    message:error.message
                }
            )
        }
        next(); // next middleware called

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