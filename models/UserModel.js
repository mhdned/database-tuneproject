/*------<USER MODEL>------*/
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

/*------<USER SCHEMA>------*/
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      maxLength: 80,
      required: true,
      unique : true
    },
    fullName: {
      type: String,
      maxLength: 80,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      maxLength: 250,
      minLength: 8,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    nationalCode: {
      type: String,
      required: true,
      unique: true,
    },
    birth :{
      type : Number,
      required : true
    },
    role: {
      type: String,
      enum: ["admin", "user", "support"],
      default: "user",
    },
    deletedAt : {type : Boolean, default: false},
    status: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

/*------<MIDDLEWARE>------*/
// userSchema.methods.comparePassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await bcrypt.compare(candidatePassword, userPassword);
// };

/*------<MODEL>------*/
const User = mongoose.model("User", userSchema);

/*------<EXPORT>------*/
module.exports = User;
