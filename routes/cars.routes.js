const express = require("express");
const router = express.Router();

const carsController = require("../controllers/cars.controller");
const carsValidation = require("../validations/cars.validations");
const validate = require("../middlewares/validate");

router.get("/", carsController.getCars);
router.post(
  "/",
  validate(carsValidation.createCarSchema),
  carsController.createCar
);
router.get("/users", carsController.purchasedCar);
router.get("/users/:id", carsController.getPurchasedCarsId);

router.get("/count", carsController.getCountCars);
router.get("/count/:id", carsController.getCountCarsId);

module.exports = router;
