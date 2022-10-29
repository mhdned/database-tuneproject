const asyncHandler = require('express-async-handler');
const Payment = require('../models/PaymentModel');

exports.createPay = asyncHandler(async (req,res,next) => {
    try {
        if(req.wallet){
            const payment = await Payment.create({
                amount : req.product.price,
                walletId : req.wallet._id,
                type : "wallet",
                productId : req.product._id,
                productPrice : req.product.price,
                userId : req.body.userId,
                uniqueKey : req.uniqueKey
            });
            if (payment) {
                req.paymentProduct = await payment;
                next();
            }
        }
        else{
            const payment = await Payment.create({
                amount : req.product.price,
                type : 'purchase',
                productId : req.product._id,
                productPrice : req.product.price,
                userId : req.body.userId,
                uniqueKey : req.uniqueKey
            });
            req.paymentProduct = await payment;
            next();
        }
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})


// if(req.body.wallet == true){
//     const paymentWithWallet = await Payment.create({
//         amount : req.product.price,
//         walletId : req.walletInfo._id,
//         type : "wallet",
//         productId : req.product._id,
//         productPrice : req.product.price,
//         userId : req.body.userId,
//         uniqueKey : req.uniqueKey
//     });
//     // return res.json(paymentWithWallet);
//     req.payment = paymentWithWallet;
//     return res.json(req.payment);
//     // return next();
// }else{
//     const payment = await Payment.create({
//         amount : req.product.price,
//         type : 'purchase',
//         productId : req.product._id,
//         productPrice : req.product.price,
//         userId : req.body.userId,
//         uniqueKey : req.uniqueKey
//     });
//     req.payment = payment;
//     return next();
// }
// return res.json(req.payment);