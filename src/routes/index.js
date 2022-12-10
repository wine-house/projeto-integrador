var express = require('express');
const IndexController = require('../controller/indexController');
const produtosController = require('../controller/produtosController');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   // res.send(JSON.stringify(servicoModel));
// });

router.get('/', IndexController.index);

/* pagina quem somos*/
router.get('/somos', function(req, res, next) {
  res.render('somos', {
    css1: "/stylesheets/somos.css", 
    css2: "/stylesheets/menu-footer.css",
  });
});

/* pagina eventos*/
router.get('/eventos', function(req, res, next) {
  res.render('eventos',
    {
      css1: "/stylesheets/menu-footer.css",
      css2: "/stylesheets/eventos.css"
    })
});

/*página produtos*/
router.get('/produtos', produtosController.index);

/* pagina Parceiros*/
router.get('/parceiros', function(req, res, next) {
  res.render('parceiros', {
    css1: "/stylesheets/parceiros.css",
    css2: "/stylesheets/menu-footer.css",
  });
});

/* pagina login*/
router.get('/login', function(req, res, next) {
  res.render('login', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/login.css",
  });
});

/* pagina painel de usuário*/
router.get('/painel-usuario', (req, res, next) => {
  res.render('painel-usuario', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/painel-usuario.css",
  });
});

/* pagina produto interno*/
router.get('/produto-interno', function(req, res, next) {
  res.render('prod-interno', {
    css1: "/stylesheets/menu-footer.css",
     css2: "/stylesheets/prod-interno.css",
  });
});

/* pagina cadastro-prod*/
router.get('/cadastro-produto', function(req, res, next) {
  res.render('cadastro-prod', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/cadastro-prod.css",
  });
});

/* pagina carrinho*/
router.get('/carrinho', (req, res) => {
  res.render('carrinho', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/carrinho.css",
  });
});

/* pagina confira itens*/
router.get('/confira-itens', (req, res) => {
  res.render('confira-itens', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/carrinho.css",
  });
});

/* pagina selecionar endereço*/
router.get('/selecionar-endereco', (req, res) => {
  res.render('selecionar-endereco', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/carrinho.css",
  });
});

/* pagina fechamento pagamento*/
router.get('/fechamento-pagamento', (req, res) => {
  res.render('fechamento-pagamento', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/carrinho.css",
  });
});

/* pagina fechamento pedido*/
router.get('/fechamento-pedido', (req, res) => {
  res.render('fechamento-pedido', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/carrinho.css",
  });
});

module.exports = router;