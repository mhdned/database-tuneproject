/*------<WALLET MODEL>------*/
const mongoose = require("mongoose")

/*------<WALLET SCHEMA>------*/
const walletSchema = new mongoose.Schema({
    amount : {
        type : Number,
        default : 0.0,
    },
    userId:{
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
},{
    timestamps : true
});

/*------<MODEL>------*/
const Wallet = mongoose.model("Wallet",walletSchema);

/*------<EXPORT>------*/
module.exports = Wallet;