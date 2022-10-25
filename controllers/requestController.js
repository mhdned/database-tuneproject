/*------<File CONTROLLER>------*/
const Request = require("./../models/RequestModel");
const asyncHandler = require('express-async-handler');

exports.createRequest = asyncHandler (async (req,res,next) => {
    try {
        const request = await Request.create(req.body);
        if (!request) {
            return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        /*------<5><RESPONSE USER>------*/
        res.status(201).json({
        status: "created",
        request,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})

exports.getAllTicket = asyncHandler(async (req,res,next) => {
    try {
        const request = await Request.find({userId : req.params.userId});
        if (!request) {
            return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        /*------<5><RESPONSE USER>------*/
        res.status(201).json({
        status: "created",
        request,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})