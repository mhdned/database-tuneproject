/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {createRequest,getAllTicket} = require('./../../controllers/requestController')

/*------<BODY ROUTE>------*/
router.route('/')
    .post(createRequest)

router.get('/:userId',getAllTicket);

/*------<EXPORT ROUTE>------*/
module.exports = router;
