/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

// const {registerUser,loginUser} = require('./../../controllers/authController')
const {getUser,allUser,getUserWithUserName,updateUser,updateUserWithUserName,deleteUserWithUserName} = require("./../../controllers/userController")
/*------<BODY ROUTE>------*/
router.route('/:id')
    .get(getUser)
    .patch(updateUser);

router.route('/un/:username')
    .get(getUserWithUserName)
    .put(updateUserWithUserName)
    .delete(deleteUserWithUserName);

router.route('')
    .get(allUser);


/*------<EXPORT ROUTE>------*/
module.exports = router;
