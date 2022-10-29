/*------<USER CONTROLLER>------*/
const User = require("./../models/UserModel");
// const Files = require("./../model/filesModel");
// /*------<DEPENDENCY>------*/
// const fs = require("node:fs");
const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcrypt");
/*------<MRTHODS>------*/
exports.getUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if(user){
      res.json({
        status : "success",
        user
      })
    }else{
      res.json({
        status : 'failed'
      })
    }
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
  }
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true});
    res.json(user)
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
  }
})

exports.allUser = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find()
    .where({deletedAt : false})
    .exec();
    res.json(users)
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
  }
});

exports.getUserWithUserName = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findOne({userName : req.params.username});
    if(user){
      res.json({
        status : "success",
        user
      })
    }else{
      res.json({
        status : "failed",
      })
    }
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
  }
});

exports.updateUserWithUserName = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({userName : req.params.username},req.body,{new : true});
    res.json(user)
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
  }
});

exports.deleteUserWithUserName = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({userName : req.params.username},{deletedAt : true},{new : true});
    res.json(user)
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
  }
});