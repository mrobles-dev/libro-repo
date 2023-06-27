const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://miltonjrobles1996:rox@classactivities.rrunbux.mongodb.net//googlebooks"
);

module.exports = mongoose.connection;
