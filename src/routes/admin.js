const express = require("express");
const router = express.Router();

const multer = require('multer');
const { multerProductStorage } = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoes');

const { index, editProduct, updateProduct, createProduct, viewForm, deleteProduct, exibirCategorias, viewFormCategoria, createCategoria } = require("../controller/AdminController");

const upload = multer({ storage: multerProductStorage });

// listar
router.get("/", index);
router.get('/categorias', exibirCategorias);


// editar
router.get("/editar/:id", editProduct);
router.put("/editar/:id", validacoes, upload.any("imagem"), updateProduct);


// criar
router.get ("/criar", viewForm);
router.post("/criar", validacoes, upload.any("imagem"), createProduct);
router.get ("/categorias/criar", viewFormCategoria);
router.post("/categorias/criar", validacoes, createCategoria);



  
router.delete("/:id", deleteProduct);
module.exports = router;