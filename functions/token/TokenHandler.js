const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

exports.createToken = async (userID) => {
  try {
    let token = jwt.sign({ userID }, process.env.JWT_SECURE_PK, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send(error);
  }
};