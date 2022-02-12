const express = require("express");
const bodyParser = require('body-parser');
const config = require("../configs");
const port = config.server.port;
const apiRouter = require("../routes");
const cors = require("cors");
const { ApolloServer, gql } = require('apollo-server-express');
const schemas = require('../apollo/schemas/movie.schema');
const resolvers = require('../apollo/resolvers/movie.resolver');

const app = express()

const graphQlServer = new ApolloServer({
  typeDefs:schemas,
  resolvers
})
graphQlServer.applyMiddleware({ app, path: '/graphql' })

app.use(bodyParser.json());
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