
//external modules
const express = require("express");
const userRouter = express.Router();

// local modules
const  homesController = require("../controllers/homes");


userRouter.get("/", homesController.getIndex);
userRouter.get("/bookings", homesController.getBookings);
userRouter.get("/homes", homesController.getHomes);
userRouter.get("/favourite", homesController.getFavouriteList);
userRouter.get("/homes/:homeId", homesController.getHomeDetail);
userRouter.post("/favourite", homesController.postFavouriteList);


module.exports = userRouter;
