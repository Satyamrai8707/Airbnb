
//external modules
const express = require("express");
const userRouter = express.Router();

// local modules
const  homesController = require("../controllers/homes");


userRouter.get("/index", homesController.getIndex);
userRouter.get("/bookings", homesController.getBookings);
userRouter.get("/", homesController.getHomes);
userRouter.get("/favourite", homesController.getFavouriteList);


module.exports = userRouter;
