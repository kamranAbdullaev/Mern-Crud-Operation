const express = require("express");
const router = express.Router();

const Controller = require("../controllers/profession.controller");

router.get("/", Controller.getList);

module.exports = router;
