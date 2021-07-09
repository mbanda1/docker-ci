// User.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  }
});

const User = mongoose.model("DemoUser", userSchema);

module.exports = User;