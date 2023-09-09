const { isAuthenticated } = require("../middlewares/jwt.middleware");

const vehiclesController = require('../controller/vehiclesController')


const router = require("express").Router();

router
  .route("/")
  .get(isAuthenticated, vehiclesController.seeVehicles)
  .post(isAuthenticated, vehiclesController.addVehicle)
  .delete(isAuthenticated, vehiclesController.delVehicle)
;

module.exports = router;


