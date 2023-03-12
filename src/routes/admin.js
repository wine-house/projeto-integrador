const express = require("express");
const router = express.Router();

// const authAdminController = require("../controller/authAdminController");
const multer = require('multer');
const multerDiskStorage = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoes');

const { index, editProduct, updateProduct, createProduct, viewForm, deleteProduct, exibirCategorias, viewFormCategoria, createCategoria } = require("../controller/AdminController");

const upload = multer({ storage: multerDiskStorage });

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