// create instance of express
const express = require('express');

// create route
const router = express.Router();

// fetch handler/controller
const {createTodo} = require('../controllers/createTodo');
const {getTodo} = require('../controllers/getTodo');
const {getTodoById} = require('../controllers/getTodoById');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodoById} = require('../controllers/deleteTodoById');

// define API routes

// 1. create todo
router.post("/createTodo",createTodo);

// 2. get all todos
router.get("/getTodo",getTodo);

// 3. get todo by ID
router.get('/getTodoById/:id',getTodoById);

// 4. update todo
router.put('/updateTodo/:id',updateTodo);

// 5. delete todo
router.delete('/deleteTodoById/:id',deleteTodoById);

// export
module.exports = router;