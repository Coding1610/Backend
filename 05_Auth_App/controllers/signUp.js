// import User model
const User = require('../models/user');

// import bcrypt
const bcrypt = require('bcrypt');

// create route handler
exports.SignUp = async(req,res) => {

    try{
        // fetch data from request body
        const {firstName, lastName, email, password, role} = req.body;

        // check if email is already registered
        const emailUsed = await User.findOne({email:email});

        if(emailUsed){
            return res.status(400).json(
                {
                    success:false,
                    message:"Email already registered",
                }
            )
        }

        // encrypt password using bcrypt
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password,10); // hash(actualPassword, numberOfRounds);
        }
        catch(error){
            return res.status(500).json(
                {
                    success:false,
                    message:"Error in encrypting password",
                    message:error.message
                }
            )
        }

        // add infor in db
        const newUser = await User.create({firstName, lastName, email, password:hashPassword, role});

        // send response
        res.status(200).json(
            {
                success:true,
                newUser,
                message:"User Registered Successfully",
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