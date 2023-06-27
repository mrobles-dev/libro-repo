const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://miltonjrobles1996:<password>@cluster0.jlluofa.mongodb.net/googlebooks"
);

module.exports = mongoose.connection;
