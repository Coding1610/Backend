// instance of express
const express = require('express');

// create router
const router = express.Router();

// import controllers
const {dummmyRoute} = require('../controllers/dummy');
const {createComment} = require('../controllers/createComment');
const {createPost} = require('../controllers/createPost');
const {getPosts} = require('../controllers/getPosts');
const {hitLike} = require('../controllers/hitLike');
const {unlike} = require('../controllers/unlike');

// route mapping

// 1. dummy route
router.get("/dummy-route",dummmyRoute);

// 2. create post
router.post("/createPost",createPost);

// 3. get post
router.get("/getPosts",getPosts);

// 4. comment post
router.post("/createComment",createComment);

// 5. like post
router.post("/likePost",hitLike);

// 6. unlike post
router.post("/unlikePost",unlike);

// export router
module.exports = router;