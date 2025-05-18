// import model
const User = require('../models/user');
// import JWT
const jwt = require('jsonwebtoken');

// import bcrypt
const bcrypt = require('bcrypt');

// create route handler
exports.SignIn = async (req, res) => {
    
    try {
        // fetch data from request body
        const { email, password } = req.body;

        // if user not filled all fields
        if(!email || !password){
            return res.status(400).json(
                {
                    success:false,
                    message:"Please filled all fields"
                }
            )
        }

        // check if user exists
        const user = await User.findOne({ email });

        // if not then
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found. Please register first.",
            });
        }
        
        // create payload from user data
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        };

        // cmpare entered password with hashed password in DB and create JWT
        if (await bcrypt.compare(password, user.password)){
            // create token
            let token = jwt.sign(payload, 
                                process.env.JWT_KEY,
                                {
                                   expiresIn:"24h", 
                                }); // sign(payload,key,options);

            // add token to user object
            user.token = token;
            user.password = null; // hide password from user object not from database

            // options for cookies
            const options = {
                httpOnly: true, // not visible at client side
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days
            };

            // create cookie
            res.cookie("cookieName", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User Logged In Successfully"
            });

            // normal response without creating cookie
            // return res.status(200).json({
            //     success: true,
            //     token,
            //     user,
            //     message: "User Logged In Successfully"
            // });

        }

        // if not then
        else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password.",
            });
        }

    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
            error: error.message,
        });
    }

};
