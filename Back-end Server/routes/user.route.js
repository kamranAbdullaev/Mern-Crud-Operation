const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const authJwt = require("../middleware/authJwt");

router.get("/me", [authJwt.verifyToken], UserController.getUser);
router.get("/", UserController.getUserList);
router.get("/:userId", UserController.getUser);

module.exports = router;
