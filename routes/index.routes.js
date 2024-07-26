const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const carsRoutes = require("./cars.routes");

router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);

module.exports = router;
