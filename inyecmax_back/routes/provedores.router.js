const express = require("express");
const router = express.Router();
const provedoresController = require("../controllers/provedores.controller");

router.post("/", provedoresController.create)
router.get("/", provedoresController.find)
router.get("/:id", provedoresController.findOne)
router.put("/:id", provedoresController.update)
router.delete("/:id", provedoresController.remove)

module.exports = router