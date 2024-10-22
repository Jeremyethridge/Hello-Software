const mongoose = require("mongoose");
require('dotenv').config();

//connect to mongoose databse
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error('Database connection error:', err));


module.exports = mongoose.connection;
