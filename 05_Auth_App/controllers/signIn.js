// import model
const User = require('../models/user');

// import bcrypt
const bcrypt = require('bcrypt');

// create route handler
exports.SignIn = async (req, res) => {
    
    try {
        // fetch data from request body
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });

        // if not then
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found. Please register first.",
            });
        }

        // cmpare entered password with hashed password in DB
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // if not then
        if(!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: "Incorrect password.",
            });
        }

        // success
        res.status(200).json({
            success:true,
            user,
            message:"User signed in successfully.",
        });

    } 
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error.",
            error: error.message,
        });
    }

};
