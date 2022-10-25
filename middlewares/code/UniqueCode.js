const asyncHandler = require("express-async-handler")
const Option = require("./../../models/OptionModel");
const moment = require('moment-jalaali');

module.exports = {
    createUniqueCode : asyncHandler (async (req,res,next) =>{
        let uniqueCode = await Option.findOne({ key: req.body.key });
        if (!uniqueCode) {
            uniqueCode = await Option.create({ key : req.body.key, value: "0" });
            finalCode = uniqueCode.value;
        } else {
            uniqueCode = await Option.findOneAndUpdate(
            { key : req.body.key },
            { value: uniqueCode.value + 1 },
            { new: true }
            );
            finalCode = uniqueCode.value;
        }
        let today = moment().format('jYYYY-jMM-jDD');
        let uniqueKey;
        uniqueKey = `${today}`;
        uniqueKey +=`-${req.body.key}`;
        uniqueKey += `-${finalCode}`;
        req.uniqueKey = uniqueKey;
        next()
    })
}