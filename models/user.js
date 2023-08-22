const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  message: String,
});

module.exports = mongoose.model("User", userSchema);
