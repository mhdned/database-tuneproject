/*------<PAYMENT MODEL>------*/
const mongoose = require("mongoose")

/*------<PAYMENT SCHEMA>------*/
const paymenSchema = new mongoose.Schema({
    amount : {
        type : Number
    },
    walletId:{
        type : mongoose.Types.ObjectId,
        ref : "Wallet"
    },
    type : {
        type : String,
        enum : ['wallet',"purchase"]
    },
    productPrice:{
        type : Number,
    },
    productId:{
        type : mongoose.Types.ObjectId,
        ref : "Product"
    },
    userId:{
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    uniqueKey : {
        type : String,
    }
},{
    timestamps : true
});

/*------<MODEL>------*/
const Payment = mongoose.model("Payment",paymenSchema);

/*------<EXPORT>------*/
module.exports = Payment;