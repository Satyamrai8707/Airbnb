
// external modules
const express = require("express");
const hostRouter = express.Router();

// local modules

const  homesController = require("../controllers/homes");


hostRouter.get("/add-home", homesController.getAddHome);
  


hostRouter.post("/add-home", homesController.postAddHome);

hostRouter.get("/host-home-list", homesController.getHostHomes);

exports.hostRouter = hostRouter
