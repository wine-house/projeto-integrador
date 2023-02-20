let express = require("express");
const { body } = require("express-validator");
let router = express.Router();
const path = require('path');
const AdminController = require("../controller/AdminController")
// const authAdminController = require("../controller/authAdminController");
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

const validacoes = [
  body('nome')
    .notEmpty().withMessage('Você deve preencher o campo do nome.').bail()
    .isNumeric().withMessage('Não é permitido caracteres numéricos.'),
  body('imagem')
    .notEmpty().withMessage('Você deve inserir uma imagem para o produto.'),
  body('preco')
    .notEmpty().withMessage('Você deve preencher o campo do preço.'),
  body('categoria')
    .notEmpty().withMessage('Você deve selecionar o campo tipo.')
]

// router.get("/", authAdminController.index);
router.get("/", AdminController.index);
router.get("/editar/:id",AdminController.edit);
router.post("/editar/:id", upload.single("imagem"), AdminController.update);
router.get("/deletar/:id", AdminController.delete);
router.delete("/deletar/:id", AdminController.destroy);
router.get ("/criar", AdminController.viewForm);
router.post(
  "/criar", 
  validacoes,
  upload.single("imagem"),
  AdminController.salvarForm
);

module.exports = router;