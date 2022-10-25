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
        let oldWallet  = await Wallet.findOne({userId : req.params.userId});
        if(oldWallet){
            const wallet = await Wallet.findOneAndUpdate(
                {userId : req.params.userId}
                ,{amount : oldWallet.amount + req.body.amount}
                ,{new : true})
            .populate('userId')
            .exec();
            const payment = await Payment.create({
                amount : req.body.amount,
                type : 'wallet',
                userId : req.params.userId,
                walletId : wallet._id,
            });
            return res.json({
                walletAmount : wallet.amount,
                user : wallet.userId.userName,
                paymentAmount : payment.amount
            })
        }
    } catch (error) {
        res.status(500).json({
            status : `failed`,
            route : req.baseUrl,
            error
        })
    }
})