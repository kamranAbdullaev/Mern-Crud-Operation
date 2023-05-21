const express = require("express");
const router = express.Router();

const Controller = require("../controllers/quality.controller");

router.get("/", Controller.getList);
router.get("/:id", Controller.get);
router.post("/", Controller.add);
router.put("/:id", Controller.update);
router.delete("/:id", Controller.delete);

module.exports = router;
