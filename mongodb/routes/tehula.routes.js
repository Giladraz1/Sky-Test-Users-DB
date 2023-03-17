const express = require("express");
const app = express();

const tehulaRoute = express.Router();
let Tehula = require("../model/Tehula");

// Add Tehula
tehulaRoute.route("/add-tehula").post((req, res, next) => {
  Tehula.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Tehula
tehulaRoute.route("/").get((req, res, next) => {
  Tehula.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Tehula
tehulaRoute.route("/read-tehula/:id").get((req, res, next) => {
  Tehula.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Tehula
tehulaRoute.route("/update-tehula/:id").put((req, res, next) => {
  Tehula.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Tehula updated successfully!");
      }
    }
  );
});

// Delete Tehula
tehulaRoute.route("/delete-tehula/:id").delete((req, res, next) => {
  Tehula.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = tehulaRoute;
