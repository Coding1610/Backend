// import file model 
const File = require('../models/fileModel');

// import cloudinary
const cloudinary = require('cloudinary').v2;

// create route handler
exports.imageUpload = async(req,res) => {

    try{
        
        // fetch data
        const {name,email,tag} = req.body;

        // validate file type (jpg,jpeg,png)
        const file = req.files.imageFile;
        const exten = file.name.split('.').pop().toLowerCase(); // .pop() bcoz if file name like my.name.jpg then [1] is give wrong

        // Size Limit = 10MB = 10000000 bytes
        if( file.size > 10000000 ){
            return res.json(
                {
                    success:false,
                    message:"Can't Upload, Your file size is more than 10MB."
                }
            );
        }

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
        const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath,{folder:"FileUpload_Backend", resource_type:"image"}); // .upload(filePath,{options}) || here by default media type = image
        
        // get image url
        const path = cloudinaryResponse.url;

        // upload data to db
        const dbResponse = await File.create({name,email,tag,mediaURL:path});

        // return response
        return res.status(200).json(
            {
                success:true,
                message:"File Uploaded Successfully.",
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