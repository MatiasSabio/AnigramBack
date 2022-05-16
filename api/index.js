const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const express = require('express');
const { connectDB } = require('./adapter');
const { typeDefs } = require('./schema/typeDefs');
const { resolvers } = require('./schema/resolvers');
const { authenticate, authen } = require('./middlewares/auth');

const { PORT, DB_URL } = process.env;
connectDB(DB_URL);

const app = express();
app.use('*', authenticate);
app.get('/', (req, res) => {
  res.send(`user :  ${req.verifiedUser.email}`);
});

async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req) => {
      return {
        user: authen(req.req),
      };
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.get('*', (req, res) => res.send('NotFound'));
  app.listen(PORT, () => {
    console.log('Server on port', PORT);
  });
}
start();
module.exports = { app };
