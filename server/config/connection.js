const mongoose = require("mongoose");

//connect to mongoose databse
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://jeremyethridge6:Jdogging6!@hellosoftware.alrawre.mongodb.net/"
);


module.exports = mongoose.connection;
