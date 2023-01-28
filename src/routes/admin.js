const express = require("express");
const router = express.Router();
const adminController = require ("../controller/AdminController")
const authAdminController = require("../controller/AuthAdminController");
const produtos = require("../database/produtos.json");

router.get("/", authAdminController.index);
router.get("/produto", adminController.index);
router.get("/produto/editar/:id",adminController.edit);
router.post("/produto/editar/:id", adminController.update);
router.get("/produto/deletar/:id", adminController.delete);
router.delete("/produto/deletar/:id", adminController.destroy);
router.get ("/produto/novo", adminController.create);
router.post("/produto/novo", adminController.store);




module.exports = router;