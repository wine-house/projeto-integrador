const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

/*página produtos*/
router.get('/', produtosController.index);

/*pagina categoria de produtos*/
router.get('/:categoria', produtosController.show);
router.get('/teste/:id', produtosController.mostrarporId);
router.delete('/:id', produtosController.deletar)

/* pagina produto interno*/
router.get('/produto-interno/:id', produtosController.viewProdInternoById);
router.post('/produto-interno/:id', produtosController.adicionaItemNoCarrinho);


module.exports = router;