const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

/*página produtos*/
router.get('/', produtosController.index);

/*pagina tipo de produtos*/
router.get('/produtos/:tipo', produtosController.show);
router.get('/produtos/teste/:id', produtosController.mostrarporId);

module.exports = router;