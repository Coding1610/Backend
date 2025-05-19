// create instance of express
const express = require('express');

// make router
const router = express.Router();

// import controllers
const {imageUpload} = require('../controllers/imageUpload');
const {videoUpload} = require('../controllers/videoUpload');
const {localFileUpload} = require('../controllers/localFileUpload');
const {imageSizeReducer} = require('../controllers/imageSizeReducer');

// create routes
router.post('/image-upload',imageUpload);
router.post('/video-upload',videoUpload);
router.post('/local-file-upload',localFileUpload);
router.post('/image-size-reducer',imageSizeReducer);

// export router
module.exports = router;