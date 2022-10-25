const asyncHandler = require('express-async-handler');
const Wallet = require('../models/WalletModel');

exports.decWallet = asyncHandler(async (req,res,next) => {
    try {
        if(req.body.wallet){
            const wallet = await Wallet.findOne({userId : req.body.userId});
            const newWalllet = await Wallet.findByIdAndUpdate(
                wallet._id,{amount : wallet.amount - req.prod.price},{new : true});
            req.walletAmount = newWalllet.amount;
            next();
        }
        next();
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})