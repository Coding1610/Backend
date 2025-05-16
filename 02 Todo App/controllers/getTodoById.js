// import model
const Todo = require('../models/todoModel');

// define route handler
exports.getTodoById = async(req,res) => {

    try{
        // fetch id first
        const id = req.params.id;
        // get todo by id
        const response = await Todo.findById(id); // Todo.findById({_id:id}) --> ({key:value})

        // not found - 404
        if(!response){
            return res.status(404).json(
                {
                    success:false,
                    message:`No Todo found with id : ${id}`
                }
            )
        }

        // found - 200
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Todo Fetched by ID Successfully"
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