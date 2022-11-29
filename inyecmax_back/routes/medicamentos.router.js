const express = require("express");
const router = express.Router();
const medicamentosController = require("../controllers/medicamentos.controller");

router.post("/", medicamentosController.create)
router.get("/", medicamentosController.find)
router.get("/:id", medicamentosController.findOne)
router.put("/:id", medicamentosController.update)
router.delete("/:id", medicamentosController.remove)

module.exports = router