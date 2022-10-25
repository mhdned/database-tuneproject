/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {createFile,deleteFile} = require('./../../controllers/fileController')

/*------<BODY ROUTE>------*/
router.route('/')
    .post(createFile)
    .delete(deleteFile);


/*------<EXPORT ROUTE>------*/
module.exports = router;
