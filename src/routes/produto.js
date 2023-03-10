const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

/*página produtos*/
router.get('/', produtosController.index);

router.get('/produto-interno/:id', produtosController.getProductById);

module.exports = router;