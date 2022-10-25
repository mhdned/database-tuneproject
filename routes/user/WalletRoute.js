/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {findWallet,chargeWallet} = require('./../../controllers/walletController');
const {createUniqueCode} = require("./../../middlewares/code/UniqueCode");

/*------<BODY ROUTE>------*/
router.route('/:userId')
    .get(findWallet)
    .put(createUniqueCode,chargeWallet)


/*------<EXPORT ROUTE>------*/
module.exports = router;
