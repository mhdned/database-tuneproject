const asyncHandler = require('express-async-handler');
const Product = require('../models/ProductModel');

exports.checkProd = asyncHandler(async (req,res,next) => {
    try {
        const prod = await Product.findById(req.params.prodId);
        if(!prod){
            return res.send("این محصول وجود خارجی ندارد")
        }
        req.prod = prod;
        next();
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})