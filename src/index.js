const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const serverConfig = require("./config/serverConfig");
const connectDb = require("./config/dbConfig");
const User = require("./Schema/schema");

//For JSON Format
app.use(bodyParser.json());
//For TEXT Format
app.use(bodyParser.text());
//For URL ENCODED Format
app.use(bodyParser.urlencoded());

app.post("/ping", (req, res) => {
  console.log(req.body);
  return res.json({ message: "pong" });
});

app.listen(serverConfig.PORT, async () => {
  connectDb();
  console.log(`Server Started At port ${serverConfig.PORT}`);

  // const newUser = await User.create({
  //   firstname: "Sams",
  //   lastname: "jackson",
  //   mobilenumber: "9520003046",
  //   email: "sams2000ku@gmail.com",
  //   password: "jackson13589",
  // });

  console.log(`New User Created ${newUser}`);
});

// yOk8t0sFeLGoBp03

// L1e3OOwWNeA3KXTG
