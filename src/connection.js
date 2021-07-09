// connection.js
const mongoose = require("mongoose");
const User = require("./User.model");

const connection = process.env.CONNECTIONSTRING

const connectDb = () => {
  return mongoose.connect(connection, {useNewUrlParser:true, useUnifiedTopology:true});
};

module.exports = connectDb;