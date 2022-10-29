/*------<Wallet CONTROLLER>------*/
const Wallet = require("./../models/WalletModel");
const Payment = require("./../models/PaymentModel");
const asyncHandler = require('express-async-handler');

/*------<METHOD WALLET CONTROLLER>------*/
exports.findWallet = asyncHandler(async (req,res,next)=>{
    try {
        const wallet = await Wallet.findOne({userId : req.params.userId})
        .populate('userId')
        .exec();
        if(!wallet){
            const newWallet = await Wallet.create({
                amount : 0.0,
                userId : req.params.userId
            });
            if (newWallet) {
                newWallet.populate('userId').exec();
                return res.json(newWallet)
            }
        }
        return res.json(wallet)
    } catch (error) {
        res.status(500).json({
            status : `failed`,
            route : req.baseUrl,
            error
        })
    }
})

exports.chargeWallet = asyncHandler(async (req,res,next)=>{
    try {
        let wallet  = await Wallet.findOne({userId : req.params.userId})
        .populate('userId')
        .exec();
        wallet.amount = wallet.amount + req.body.amount;
        await wallet.save();
        if(wallet){
            const payment = await Payment.create({
                amount : req.body.amount,
                type : 'wallet',
                userId : req.params.userId,
                walletId : wallet._id,
                uniqueKey : req.uniqueKey,
            });
            return res.json(wallet)
        }
    } catch (error) {
        res.status(500).json({
            status : `failed`,
            route : req.baseUrl,
            error
        })
    }
})