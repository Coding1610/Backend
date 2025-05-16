const mongoose = require('mongoose');

// load config from .env file
require('dotenv').config();

// database connection with server
const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL,{})
    .then(() => {console.log("Connection Created Successfully");})
    .catch((error) => {
        console.log(error,"Error occure while making connection");
        process.exit(1);
    });

}

// export connection function
module.exports = dbConnect;