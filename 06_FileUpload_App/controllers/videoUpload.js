// import file model 
const File = require('../models/fileModel');

// import cloudinary
const cloudinary = require('cloudinary').v2;

// create route handler
exports.videoUpload = async(req,res) => {

    try{
        
        // fetch data
        const {name,email,tag} = req.body;

        // validate file type (jpg,jpeg,png)
        const file = req.files.videoFile;
        const exten = file.name.split('.').pop().toLowerCase(); // .pop() bcoz if file name like my.name.jpg then [1] is give wrong

        // not valid type
        if( exten !== "mp4" && exten !== "webm" && exten !== "mov" ){
            return res.json(
                {
                    success:false,
                    message:"Invalid File Type, Upload an valid Video File."
                }
            );
        }

        // upload file to cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath,{folder:"FileUpload_Backend", resource_type:"video"}); // .upload(filePath,{options}) || we need to mention media type = video otherwise it consider as image

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