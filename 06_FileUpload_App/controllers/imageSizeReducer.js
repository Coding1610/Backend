// import file model 
const File = require('../models/fileModel');

// import cloudinary
const cloudinary = require('cloudinary').v2;

// create route handler
exports.imageSizeReducer = async(req,res) => {

    try{
        
        // fetch data
        const {name,email,tag} = req.body;

        // validate file type (jpg,jpeg,png)
        const file = req.files.imageFile;
        const exten = file.name.split('.').pop().toLowerCase(); // .pop() bcoz if file name like my.name.jpg then [1] is give wrong

        // not valid type
        if( exten !== "jpg" && exten !== "jpeg" && exten !== "png" ){
            return res.json(
                {
                    success:false,
                    message:"Invalid File Type, Upload an Image File."
                }
            );
        }
        
        // upload file to cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath,{
                                                                                        folder:"FileUpload_Backend", 
                                                                                        resource_type:"image",
                                                                                        transformation:[{quality:"auto:low"}] // u can give 1-100 number || auto:eco || auto:good
                                                                                    }); // .upload(filePath,{options}) || here by default media type = image
        
        // get image url
        const path = cloudinaryResponse.url;

        // upload data to db
        const dbResponse = await File.create({name,email,tag,mediaURL:path});

        // return response
        return res.status(200).json(
            {
                success:true,
                message:"File Uploaded Successfully with Compress Size.",
                response:{dbResponse,cloudinaryResponse}

            }
        );

    }

    catch(error){
        return res.status(500).json(
            {
                success:false,
                message:error.message
            }
        );
    }
    
};  