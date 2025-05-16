// import model
const Todo = require('../models/todoModel');

// define route handler
exports.updateTodo = async(req,res) => {

    try{
        // fetch id of todo
        const id = req.params.id;
        // fetch new title and description
        const {title,description} = req.body;
        // update todo
        const respoonse = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        );
        res.status(200).json(
            {
                success:true,
                data:respoonse,
                message:"Todo Updated Successfully"
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