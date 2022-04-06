const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { resolvers, typeDefs,  } = require('./schemas');
const db = require('./config/connection');

const server = new ApolloServer({
	resolvers,
	typeDefs,
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once('open', async () => {
	await server.start();
	// creates a /graphql endpoint for our server
	server.applyMiddleware({ app });
	app.listen(PORT, () => console.log('Server running on PORT 3001'));

});
