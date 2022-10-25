/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {createProduct,allProduct,singleProduct,buyProduct} = require('./../../controllers/productController')
const {createUniqueCode} = require("./../../middlewares/code/UniqueCode");
const {checkProd} = require('./../../middlewares/checkProduct');
const {decWallet} = require('./../../middlewares/decreaseWallet');
const {createPay} = require('./../../middlewares/createPayment');
/*------<BODY ROUTE>------*/
router.route('/')
    .get(allProduct)
    .post(createProduct);
router.route('/:prodId')
    .get(singleProduct)
    .post(createUniqueCode,checkProd,decWallet,createPay,buyProduct)

/*------<EXPORT ROUTE>------*/
module.exports = router;
