let express = require("express");

let router = express.Router();
const path = require('path');
const AdminController = require("../controller/AdminController");
// const authAdminController = require("../controller/authAdminController");
const multer = require('multer');
const multerDiskStorage = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoes');

const upload = multer({ storage: multerDiskStorage });

// router.get("/", authAdminController.index);
router.get("/", AdminController.index);

router.get("/editar/:id",AdminController.edit);
router.post("/editar/:id", upload.single("imagem"), AdminController.update);

router.delete("/:id", AdminController.delete);

router.get ("/criar", AdminController.viewForm);
router.post(
  "/criar", 
  validacoes,
  upload.single("imagem"),
  AdminController.createProduct
);

module.exports = router;