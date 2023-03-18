const express = require("express");
const router = express.Router();

const multer = require('multer');
const { multerProductStorage } = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoes');

const { index, editProduct, updateProduct, createProduct, viewForm, deleteProduct, exibirCategorias, createCategoria, updateCategoria } = require("../controller/AdminController");

const upload = multer({ storage: multerProductStorage });

// listar
router.get("/", index);
router.get('/categorias', exibirCategorias);
router.get("/categorias/editar/:id", updateCategoria);

// editar
router.get("/editar/:id", editProduct);
router.put("/editar/:id", validacoes, upload.any("imagem"), updateProduct);
router.put("/categorias/editar/:id", validacoes, updateCategoria);

// criar
router.get ("/criar", viewForm);
router.post("/criar", validacoes, upload.any("imagem"), createProduct);
router.post ("/categorias/criar", createCategoria);


router.delete("/:id", deleteProduct);

module.exports = router;