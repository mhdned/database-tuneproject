const asyncHandler = require('express-async-handler');
const Wallet = require('../models/WalletModel');

exports.decWallet = asyncHandler(async (req,res,next) => {
    try {
        if(req.body.wallet == true){
            const wallet = await Wallet.findOne({userId : req.body.userId});
            if (!wallet || wallet.amount < req.product.price) {
                return res.status(200).json({
                    status : 'failed | 401',
                    message : 'please charge wallet'
                })
            }
            wallet.amount -= req.product.price;
            wallet.save();
            req.wallet = wallet;
        }
        next();

       } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})