/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {findWallet,chargeWallet} = require('./../../controllers/walletController');

/*------<BODY ROUTE>------*/
router.route('/:userId')
    .get(findWallet)
    .put(chargeWallet)


/*------<EXPORT ROUTE>------*/
module.exports = router;
