const express = require("express");
const bodyParser = require('body-parser');
const config = require("../configs");
const port = config.server.port;
const apiRouter = require("../routes");
const cors = require("cors");
const { ApolloServer, gql } = require('apollo-server-express');
const Movieschemas = require('../apollo/schemas/movie.schema');
const Movieresolvers = require('../apollo/resolvers/movie.resolver');
const Catalogueschemas = require('../apollo/schemas/catalogue.schema');
const Catalogueresolvers = require('../apollo/resolvers/catalogue.resolver');

const app = express()

const graphQlServer = new ApolloServer({
  typeDefs:[Movieschemas, Catalogueschemas],
  resolvers: [Movieresolvers, Catalogueresolvers]
})
graphQlServer.applyMiddleware({ app, path: '/graphql' })

/* app.use(bodyParser.json()); */
app.use(function (req, res, next) {
  if (req.originalUrl === "/api/v1/webhooks/stripe") {
    next();
  } else {
    express.json()(req, res, next);
  }
})
app.use(cors())
app.use("/api/v1/", apiRouter)

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`)
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  })
}