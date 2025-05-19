// import file model
const File = require('../models/fileModel');

// create route handler
exports.localFileUpload = async(req,res) => {

    try{
        // fetch file
        const file = req.files.file; // req.files.keyName

        // create server upload path
        const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.').pop()}`; // __dirname = current dir || Date.now() = current time in millisecond || .pop() bcoz if file name like my.name.jpg then [1] is give wrong 

        // move file to server
        file.mv(path, (error) => {
            console.log(error);
        });

        // return response
        res.status(200).json(
            {
                success:true,
                message:"File Successfully Upload on Server."
            }
        );

    }

    catch(error){
        return res.status(400).json(
            {
                success:false,
                message:error.message
            }
        );
    }
    
};  