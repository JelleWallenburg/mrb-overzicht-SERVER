const { isAuthenticated } = require("../middlewares/jwt.middleware");

const vehicleController = require('../controller/vehicleController')


const router = require("express").Router();

router
  .route("/")
  .get(isAuthenticated, vehicleController.seeVehicle)
;

module.exports = router;
