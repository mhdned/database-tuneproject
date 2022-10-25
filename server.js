/*------<SERVER>------*/
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const Configs = require("./configs/config");

/*------<CONFIG>------*/
// new Configs();
dotenv.config({ path: "./configs/config.env" });
/*------<ENV>------*/
const DB = process.env.DATABASE_LOCAL;
/*------<DATABASE>------*/
mongoose
  .connect(DB)
  .then(() => console.log(`DATABASE :: SUCCESSFULLY CONNECTED ${DB}`))
  .catch((error) => {
    console.log(`ERROR:: ${error}`);
  });

/*------<LESTEN>------*/
const port = process.env.PORT || 6300;
app.listen(port, "127.0.0.1", () => {
  console.log(`APP RUN :: http://localhost:${port}`);
});
