/*------<File CONTROLLER>------*/
const File = require("./../models/FileModel");
const asyncHandler = require('express-async-handler');

exports.createFile = asyncHandler (async (req,res,next) => {
    try {
        /*------<3><CREATE FILE IN DATABASE>------*/
        const file = await File.create(req.body);
        /*------<4><CHECK FILE>------*/
        if (!file) {
            return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        /*------<5><RESPONSE USER>------*/
        res.status(201).json({
        status: "created",
        file,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
});

exports.deleteFile = asyncHandler (async (req,res,next) => {
    try {
        /*------<3><CREATE FILE IN DATABASE>------*/
        await File.findOneAndDelete(req.body);
        /*------<5><RESPONSE USER>------*/
        res.status(201).json({
            status: "deleted",
            file : req.body,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
});