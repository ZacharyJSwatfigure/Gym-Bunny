const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost:27017/gym-bunny";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
