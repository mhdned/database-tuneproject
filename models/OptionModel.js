/*------<OPTION MODEL>------*/
const mongoose = require("mongoose");

/*------<OPTION SCHEMA>------*/
const optionSchema = new mongoose.Schema({
    key : {
        type: String,
    },    
    value : {
        type: Number,
    }
});

/*------<MODEL>------*/
const Option = mongoose.model("Option",optionSchema);

/*------<EXPORT>------*/
module.exports = Option;
