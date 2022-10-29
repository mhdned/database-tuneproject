/*------<File CONTROLLER>------*/
const Product = require("./../models/ProductModel");
// const Payment = require('./../models/PaymentModel');
const asyncHandler = require('express-async-handler');

exports.createProduct = asyncHandler(async (req,res,next) => {
    try {
        const product = await Product.create(req.body);
        if (!product) {
            return res.status(401).json({
                status: "failed",
            });
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
        }else{
            return res.json({
                status: "failed",
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
        if (req.wallet) {
            return res.json({
                wallet : req.wallet.amount,
                product : {
                    name : req.product.title,
                    entities : req.product.entities,
                },
                payment : req.paymentProduct
            });
        }else{
            return res.json({
                product : {
                    name : req.product.title,
                    entities : req.product.entities,
                },
                payment : req.paymentProduct
            }); 
        }
    } catch (error) {
        /*------<X><SERVER ERROR>------*/
        console.log(error);
        return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
})