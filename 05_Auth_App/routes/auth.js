// express instance
const express = require('express');

// create router
const router = express.Router();

// import controllers
const {SignIn} = require('../controllers/signIn');
const {SignUp} = require('../controllers/signUp');

// make routes
router.post('/sign-in',SignIn);
router.post('/sign-up',SignUp);

// export router
module.exports = router;