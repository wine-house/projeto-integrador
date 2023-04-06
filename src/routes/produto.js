const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');
const usuarioLogado = require('../middlewares/validacaoDeUsuario');

/*página produtos*/
router.get('/:categoria?', produtosController.index);

router.get('/produto-interno/:id', produtosController.viewProdInternoById);
router.post('/produto-interno/:id', usuarioLogado, produtosController.adicionaItemNoCarrinho);

module.exports = router;