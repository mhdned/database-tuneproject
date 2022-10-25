/*------<APP>------*/
const express = require("express");
const app = express();
const path = require("path");

/*------<MOMENT>------*/
// require("moment-timezone");

/*------<MIDDLEWARE>------*/
app.use(express.json());

/*------<STATIC FILES>------*/
// app.use(express.static(path.join(__dirname, "/public")));

/*------<ROUTES>------*/
const indexRoute = require("./routes/IndexRoute");

/*------<ROUTES RUN>------*/
app.use("/api/v3/", indexRoute);

/*------<MIDDLEWARE>------*/
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

/*------<404 ERROR | API>------*/
app.all("*", (req, res, next) => {
  const err = new Error(`Not found ${req.originalUrl} page | 404 ⛔`);
  err.status = "failed";
  err.statusCode = 404;
  next(err);
});

/*------<EXPORT>------*/
module.exports = app;
