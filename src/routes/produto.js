const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');
const CarrinhoController = require('../controller/CarrinhoController');

/*página produtos*/
router.get('/:categoria?', produtosController.index);

router.get('/produto-interno/:id', produtosController.viewProdInternoById);
router.post('/produto-interno/:id', CarrinhoController.adicionaItemNoCarrinho);

module.exports = router;