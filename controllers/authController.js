/*------<INTIATE USER CONTROLLER>------*/
const User = require('./../models/UserModel');
const bcrypt = require('bcrypt')
const {createToken} = require("./../functions/token/TokenHandler")
/*------<IMPORTS USER CONTROLLER>------*/
const asyncHandler = require('express-async-handler');
/*------<METHOD USER CONTROLLER>------*/
exports.registerUser = asyncHandler(async (req,res,next)=>{
    try {
        const newuser = await User.create(req.body);
        if(newuser){
            let userToken = await createToken(newuser._id);
            res.status(201).json({
                status : `success`,
                route : req.baseUrl,
                token : userToken || 'none',
                user : newuser
            })
        }
    } catch (error) {
        res.status(200).json({
            status : `failed`,
            route : req.baseUrl,
            error
        })
    }
})

exports.loginUser = asyncHandler(async (req,res,next)=>{
    try {
        let userInfo = req.body;
        const newuser = await User.findOne({phoneNumber : userInfo.phoneNumber});
        if (newuser && bcrypt.compareSync(userInfo.password,newuser.password)) {
            let userToken = await createToken(newuser._id);
            res.status(200).json({
                status : `success`,
                route : req.baseUrl,
                token : userToken || 'none',
                user : newuser
            })
        }else{
            res.status(401).json({
                status : `failed`,
                route : req.baseUrl,
                user : 'کاربر وجود ندارد یا پسورد اشتباه است'
            })
        }
    } catch (error) {
        res.status(401).json({
            status : `failed`,
            route : req.baseUrl
        })
    }
})