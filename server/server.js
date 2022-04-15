const express = require('express');
const path = require('path');

//import ApolloServer
const { ApolloServer } = require('apollo-server-express');
//add middleware
const { authMiddleware } = require('./utils/auth');

//import our typeDefs and our resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//create new Apollo server and pass in schema data and auth
const startServer = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();

  server.applyMiddleware({ app });
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//!confirm what these lines of code are doing **Joey**
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

startServer();