const express = require("express");
const router = express.Router();

const userController = require("../controllers/usersController");

router.get("/owner", userController.owner);
router.get("/admin", userController.admin);
router.get("/user", userController.user);

module.exports = router;
