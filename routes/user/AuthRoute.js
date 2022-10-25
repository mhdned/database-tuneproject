/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {registerUser,loginUser} = require('./../../controllers/authController')

/*------<BODY ROUTE>------*/
router.post("/register",registerUser);
router.post("/login",loginUser);


/*------<EXPORT ROUTE>------*/
module.exports = router;
