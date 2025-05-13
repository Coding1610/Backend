// create instance of express
const express = require('express');

// create route
const router = express.Router();

// fetch handler/controller
const {createTodo} = require('../controllers/createTodo');

// define API routes
router.post("/createTodo",createTodo);

// export
module.exports = router;