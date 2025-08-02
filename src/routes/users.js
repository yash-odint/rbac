const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const authoriseRole = require("../middlewares/authorise_role");

router.get("/owner", authoriseRole("owner"), userController.owner);
router.get("/admin", authoriseRole("owner", "admin"), userController.admin);
router.get(
  "/user",
  authoriseRole("owner", "admin", "user"),
  userController.user
);

module.exports = router;
