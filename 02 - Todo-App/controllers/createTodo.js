// import model
const Todo = require('../models/todoModel');

// define route handler
exports.createTodo = async(req,res) => {

    try{
        // extarct title and description from request body
        const {title,description} = req.body;
        // create a new todo object and insert in DB
        const response = await Todo.create({title,description});
        // send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
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