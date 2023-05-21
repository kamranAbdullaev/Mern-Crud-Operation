const express = require("express");
const verifySignUp = require("../middleware/verifySignUp");

const router = express.Router();

const controller = require("../controllers/auth.controller");

router.post("/signup", [verifySignUp.checkDuplicateEmail], controller.signUp);
router.post("/signin", controller.signIn);
router.get("/signin", (req, res, next) => {
    res.status(200).send("ok");
});

module.exports = router;
