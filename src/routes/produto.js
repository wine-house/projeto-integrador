const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

/*página produtos*/
router.get('/:categoria?', produtosController.index);

router.get('/produto-interno/:id', produtosController.viewProdInternoById);
router.post('/produto-interno/:id', produtosController.adicionaItemNoCarrinho);

module.exports = router;