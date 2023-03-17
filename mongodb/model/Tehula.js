const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Tehula = new Schema(
  {
    account: {
      type: String,
    },
    username: {
      type: String,
    },
    testEnvironment: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "tehulot",
  }
);

module.exports = mongoose.model("Tehula", Tehula);
