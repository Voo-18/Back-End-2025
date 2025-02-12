const express = require("express");
const moment = require("moment");
const users = require("./users");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("This is the home page");
});

app.get("/about", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "response success",
    description: "exercise #02",
    date: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.use((req, res) => {
  res.status(404).send("404 Users Not Found");
});

app.listen(port, () => {
  console.log(`server running at http://127.0.0.1:${port}`);
});
