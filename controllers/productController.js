/*------<File CONTROLLER>------*/
const Product = require("./../models/ProductModel");
const Payment = require('./../models/PaymentModel');
const asyncHandler = require('express-async-handler');

exports.createProduct = asyncHandler(async (req,res,next) => {
    try {
        const product = await Product.create(req.body);
        if (!product) {
            return res.status(401).send("SERVER ERROR :: SOMTHING WRONG | 😥");
        }
        res.status(201).json({
            status: "created",
            product,
        });
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})

exports.allProduct = asyncHandler (async (req,res,next) => {
    try {
        const products = await Product.find();
        if (products) {
            res.status(201).json({
                status: "success",
                products,
            });
        }
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }    
})

exports.singleProduct = asyncHandler (async (req,res,next) => {
    try {
        const product = await Product.findById(req.params.prodId);
        if (product) {
            res.status(201).json({
                status: "success",
                product,
            });
        }
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    } 
})

exports.buyProduct = asyncHandler(async(req,res,next) => {
    try {
        if (!req.body.wallet) {
            return res.send("ok");
        }
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})