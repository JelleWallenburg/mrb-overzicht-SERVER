const { isAuthenticated } = require("../middlewares/jwt.middleware");

const vehicleController = require('../controller/vehicleController')


const router = require("express").Router();

router
  .route("/")
  .get(isAuthenticated, vehicleController.seeVehicles)
  .post(isAuthenticated, vehicleController.addVehicle)
  .delete(isAuthenticated, vehicleController.delVehicle)
;

module.exports = router;


