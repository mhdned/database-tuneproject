const express = require("express");
const router = express.Router();

/*------<ROUTES>------*/
const authRoute = require("./user/AuthRoute");
router.use("/auth", authRoute);

const userRoute = require("./user/UserRoute");
router.use("/user", userRoute);

const walletRoute = require("./user/WalletRoute");
router.use("/wallet", walletRoute);

const fileRoute = require("./user/FileRoute");
router.use("/file", fileRoute);

const productRoute = require("./user/ProductRoute");
router.use("/product", productRoute);

const ticketRoute = require("./user/TicketRoute");
router.use("/ticket", ticketRoute);

module.exports = router;