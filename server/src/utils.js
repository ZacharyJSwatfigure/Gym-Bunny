require("dotenv").config();

const jwt = require("jsonwebtoken");
const secret = process.env.SESSION_SECRET;
// 1 hour
const expiration = 1000 * 60 * 60;
module.exports = {
  signToken: function (username, _id) {
    const payload = { username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  secret,
};
