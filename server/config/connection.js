const mongoose = require("mongoose");

//connect to mongoose databse
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://hansdoderlein99:Nicholas99@hello-software.j1zavbx.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = mongoose.connection;
