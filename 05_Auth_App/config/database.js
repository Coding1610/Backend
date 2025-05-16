// create mongoose instance
const mongoose = require('mongoose');

// load config of .env file
require('dotenv').config();

// connection function

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL,{})
    .then( () => {console.log("Database Connection Successfully");} )
    .catch( (error) => {
        console.log("Database Connection Failed", error);
        process.exit(1);
    });

};

// export connection function
module.exports = dbConnect;