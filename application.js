const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  name: String,
  category: String,
  iconURL : String
});

module.exports = mongoose.model("app", schema);
