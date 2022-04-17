const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI || null,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;