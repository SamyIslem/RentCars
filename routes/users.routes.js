const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.contoller");
const userValidation = require("../validations/users.validations");
const validate = require("../middlewares/validate");

router.get(
  "/",
  usersController.getUsers
);
router.post(
  "/",
  validate(userValidation.createUserSchema),
  usersController.createUser
);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
