const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const tehulaModel = require("./model/Tehula.js");
const mockdata = require("./mockdata/mockdata.json");

mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB successfully!");

  tehulaModel.insertMany(mockdata, function (err, docs) {
    if (err) {
      console.error("Error inserting documents:", err);
      return;
    }
    console.log("Documents inserted successfully!");
  });
});

const tehulaRoute = require("./routes/tehula.routes");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, "dist/skyTestUsersDB")));

// API root
app.use("/api", tehulaRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/skyTestUsersDB/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
