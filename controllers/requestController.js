/*------<File CONTROLLER>------*/
const Request = require("./../models/RequestModel");
const asyncHandler = require('express-async-handler');

exports.createRequest = asyncHandler (async (req,res,next) => {
    try {
        req.body.uniqueKey = req.uniqueKey;
        const request = await Request.create(req.body);
        if (!request) {
            return res.status(401).json({
                status: "failed",
                request,
            });
        }
        /*------<5><RESPONSE USER>------*/
        res.status(201).json({
            status: "success",
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
        // return res.send(`${req.params.userId}`);
        const request = await Request.find({userId : req.params.userId});
        if (!request) {
            return res.send(`${req.params.userId}`);
            // return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        /*------<5><RESPONSE USER>------*/
        res.status(200).json({
        status: "find all",
        request,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})

exports.getAllTicketAdmin = asyncHandler(async (req,res,next) => {
    try {
        const request = await Request.find();
        if (!request) {
            return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        /*------<5><RESPONSE USER>------*/
        res.status(200).json({
        status: "find",
        request,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})

exports.getTicketAdmin = asyncHandler(async (req,res,next) => {
    try {
        const request = await Request.findById(req.params.reqId);
        if (!request) {
            return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        /*------<5><RESPONSE USER>------*/
        res.status(200).json({
        status: "find",
        request,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})

exports.answerTicketAdmin = asyncHandler(async (req,res,next) => {
    try {
        const request = await Request.findById(req.params.reqId);
        if (!request) {
            return res.status(401).send("this ticket is exist | 😥");
        }
        if(request.status === req.body.status){
            return res.json({
                message : `این تیکت قبلا ${req.body.status} شده است`,
                request,
            });
        }else{
            request.status = req.body.status;
            request.uniqueKey = req.uniqueKey;
            request.date = req.body.date;
            request.save();
        }
        res.status(200).json({
        status: "change status",
        request,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})