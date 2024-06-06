const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const serverConfig = require("./config/serverConfig");
const connectDb = require("./config/dbConfig");


//For JSON Format
app.use(bodyParser.json())
//For TEXT Format
app.use(bodyParser.text())
//For URL ENCODED Format
app.use(bodyParser.urlencoded())

app.post("/ping", (req, res) => {
  console.log(req.body);
  return res.json({ message: "pong" });
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server Started At port ${serverConfig.PORT}`);
  connectDb();
});

// yOk8t0sFeLGoBp03

// L1e3OOwWNeA3KXTG