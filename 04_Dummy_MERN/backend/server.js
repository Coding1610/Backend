const express = require("express");
const app = express();

// import config of .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// var cors = require("cors");

// app.use(
//     cors({
//         origin: "*",
//     })
//     );
    
// Middleware
app.use(express.json());
    
// Import Routes and Mounting
const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);

// Listen Application on PORT 
app.listen(PORT, () => {
    console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

// Connection Function
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send(`<h1>Dummy MERN App</h1>`);
});