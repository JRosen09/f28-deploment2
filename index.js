//setup the server boilerplate
const express = require("express");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

//frontend  routes
app.use(express.json());

//THIS IS MIDDLEWARE TO SEND WHOLE FOLDER
app.use("/", express.static(path.join(__dirname, "./client/index.html")));

app.use(express.static(path.join(__dirname, "./client")));

//end points

//port range
app.listen(port, () => {
  console.log("Docked at port" + port);
});
