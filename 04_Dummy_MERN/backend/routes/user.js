const express = require("express");
const router = express.Router();

// import controllers
const { createUser } = require("../controllers/createUser");
const { getUser } = require("../controllers/getUsers");

// create routes
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);

// export routes
module.exports = router;