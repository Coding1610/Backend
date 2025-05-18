// create instance of jwt
const jwt = require('jsonwebtoken');

// load .env file config
require('dotenv').config();

module.exports = function(req,res,next) { // next is use for calling next middleware if you include multiple middleware in routes
    
    try{
        // get token from body or cookies or header
        const token = req.body.token;

        // if no token
        if(!token){
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
            console.log(payload);
            req.user = payload
        }
        catch(error){
            res.status(401).json(
                {
                    success:false,
                    message:error.message
                }
            )
        }
        next(); // next middleware called

    }
    catch(error){
        return res.stauts(500).json(
            {
                success:false,
                message:error.message
            }
        )
    }

};