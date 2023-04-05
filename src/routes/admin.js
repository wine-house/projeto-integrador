const express = require("express");
const router = express.Router();

const multer = require('multer');
const { multerProductStorage } = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoes');

const { indexUsers, indexAdmin, index, editProduct, updateProduct, createProduct, viewForm, deleteProduct, exibirCategorias, createCategoria, updateCategoria, viewFormUsuarios, createUsuario } = require("../controller/AdminController");

const upload = multer({ storage: multerProductStorage });

// listar
router.get("/", indexAdmin);
router.get("/produtos", index);
router.get("/usuarios", indexUsers);
router.get('/produtos/categorias', exibirCategorias);
router.get("/produtos/categorias/editar/:id", updateCategoria);

// editar
router.get("/produtos/editar/:id", editProduct);
router.put("/produtos/editar/:id", validacoes, upload.any("imagem"), updateProduct);
router.put("/produtos/categorias/editar/:id", validacoes, updateCategoria);

// criar
router.get ("/produtos/criar", viewForm);
router.post("/produtos/criar", validacoes, upload.any("imagem"), createProduct);
router.get ("/usuarios/criar", validacoes, viewFormUsuarios);
router.post("/usuarios/criar", validacoes, upload.any("imagem"), createUsuario);
router.post ("/produtos/categorias/criar", createCategoria);


router.delete("/produtos/:id", deleteProduct);

module.exports = router;