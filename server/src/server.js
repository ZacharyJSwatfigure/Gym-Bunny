const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const utils = require("./utils");
const { resolvers, typeDefs } = require("./schemas");
const db = require("./config/connection");
const { User, Token } = require("./models");
const path = require("path");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: async ({ req }) => {
    let token;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }
    const blackListedToken = await Token.findOne({ token });
    if (blackListedToken) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, utils.secret);
      req.user = data;
      req.user.token = token;
    } catch (e) {
      return { error: "Invalid token" };
    }
    return req;
  },
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

db.once("open", async () => {
  await server.start();

  server.applyMiddleware({ app });
  app.listen(PORT, () => console.log("Server running on PORT 3001"));
});
