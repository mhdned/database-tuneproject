/*------<FILES MODEL>------*/
const mongoose = require("mongoose");

/*------<FILES SCHEMA>------*/
const fileSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    formatFile: {
      type: String,
    },
    size: {
      type: Number,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

/*------<MODEL>------*/
const File = mongoose.model("Files", fileSchema);

/*------<EXPORT>------*/
module.exports = File;
