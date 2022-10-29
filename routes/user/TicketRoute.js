/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {createRequest,getAllTicket,getAllTicketAdmin,getTicketAdmin,answerTicketAdmin} = require('./../../controllers/requestController')
const {createUniqueCode} = require('./../../middlewares/code/UniqueCode')
/*------<BODY ROUTE>------*/
router.route('/')
    .post(createUniqueCode,createRequest)
    .get(getAllTicketAdmin)

router.route('/:reqId')
    .get(getTicketAdmin)
    .put(createUniqueCode,answerTicketAdmin)

router.get('/user/:userId',getAllTicket);
/*------<EXPORT ROUTE>------*/
module.exports = router;
