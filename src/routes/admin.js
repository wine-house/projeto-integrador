const express = require("express");
const router = express.Router();
const adminController = require ("../controller/adminController")
// const authAdminController = require("../controller/authAdminController");
const produtos = require("../database/produtos.json");
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../../public/imgProd");
    callback(null, folder);
	},
	filename: (req, file, callback) => {
    const imageName = Date.now() + path.extname(file.originalname);
    callback(null, imageName);
  },
});

const upload = multer({ storage: multerDiskStorage });

// router.get("/", authAdminController.index);
router.get("/produto", adminController.index);
router.get("/produto/editar/:id",adminController.edit);
router.post("/produto/editar/:id", upload.single("inptImageProd"), adminController.update);
router.get("/produto/deletar/:id", adminController.delete);
router.delete("/produto/deletar/:id", adminController.destroy);
router.get ("/produto/novo", adminController.create);
router.post("/produto/novo", upload.single("inptImageProd"), adminController.store);




module.exports = router;