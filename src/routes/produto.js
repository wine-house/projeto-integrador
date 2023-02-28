const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

/*página produtos*/
router.get('/', produtosController.index);

/*pagina tipo de produtos*/
router.get('/:tipo', produtosController.show);
router.get('/teste/:id', produtosController.mostrarporId);
router.delete('/:id', produtosController.deletar)

/* pagina produto interno*/
router.get('/produto-interno', function(req, res, next) {
  res.render('prod-interno', {
    css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
  });
});

router.get('/produto-interno/:id', produtosController.getProductById);

module.exports = router;