const express = require("express");
const bodyParser = require('body-parser');
const config = require("../configs");
const port = config.server.port;
const apiRouter = require("../routes");
const cors = require("cors");


const app = express()
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