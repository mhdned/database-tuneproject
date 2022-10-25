/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {createProduct,allProduct,singleProduct,buyProduct} = require('./../../controllers/productController')

/*------<BODY ROUTE>------*/
router.route('/')
    .get(allProduct)
    .post(createProduct);
router.route('/:prodId')
    .get(singleProduct)
    .post(buyProduct)

/*------<EXPORT ROUTE>------*/
module.exports = router;
