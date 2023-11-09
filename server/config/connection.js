const mongoose = require("mongoose");

//connect to mongoose databse
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Project3DB"
);

module.exports = mongoose.connection;
