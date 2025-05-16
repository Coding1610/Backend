// import model
const Todo = require('../models/todoModel');

// define route handler
exports.getTodo =  async(req,res) => {

    try{
        // get all items without any condition ({})
        const response = await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"All Todos Fetched Successfully"
            }
        )
    }   
    catch(error){
        console.error(error);
        console.log(error,"Error Occure");
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error",
                message:error.message
            }
        )
    }

};