// express instance
const express = require('express');

// create router
const router = express.Router();

// import controllers
const {SignIn} = require('../controllers/signIn');
const {SignUp} = require('../controllers/signUp');

// import middlewares
const authenticationMid = require('../middlewares/authenticationMid');
const studentMid = require('../middlewares/studentMid');
const adminMid = require('../middlewares/adminMid');

// make routes
router.post('/auth/sign-in',SignIn);
router.post('/auth/sign-up',SignUp);

// make middleware routes : protected routes (authorization)
router.get("/test", authenticationMid, (req,res) => {
    res.status(200).json(
        {
            success:true,
            message:"Welcome to Test Protected Route"
        }
    );
});

router.get('/student', authenticationMid, studentMid, (req,res) => {
    res.status(200).json(
        {
            success:true,
            message:"Welcome to Student Protected Route"
        }
    )
});

router.get('/admin', authenticationMid, adminMid, (req,res) => {
    res.status(200).json(
        {
            success:true,
            message:"Welcome to Admin Protected Route"
        }
    )
});

// export router
module.exports = router;