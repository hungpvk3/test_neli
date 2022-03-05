const { ApolloServer } = require("apollo-server");
var cors = require('cors')

const db = require("./db")
const typeDefs = require("./schema")
const resolvers = require("./resolver")

// Connect database
db.connect();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ cors: {
  origin: '*',			// <- allow request from all domains
  credentials: true}, // <- enable CORS response for requests with credentials (cookies, http authentication)
  typeDefs, 
  resolvers 
});
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
