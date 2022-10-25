const asyncHandler = require('express-async-handler');
const Payment = require('../models/PaymentModel');

exports.createPay = asyncHandler(async (req,res,next) => {
    try {
        if(req.body.wallet){
            // const paymen = Payment.create({});
            next();
        }else{
            // const paymen = Payment.create({});
            next();
        }
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})