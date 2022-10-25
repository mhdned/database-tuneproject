/*------<PRODUCT MODEL>------*/
const mongoose = require("mongoose")

/*------<PRODUCT SCHEMA>------*/
const productSchema = new mongoose.Schema({
    title : {
        type : String,
        unique : true,
        required : true,
        maxLength : 80
    },
    price:{
        type : Number,
        required : true,
    },
    entities:{
        type : Number,
        required : true
    },
    userId:{
        type : mongoose.Types.ObjectId,
        ref : "User"
    }
},{
    timestamps : true
});

/*------<MODEL>------*/
const Product = mongoose.model("Product",productSchema);

/*------<EXPORT>------*/
module.exports = Product;