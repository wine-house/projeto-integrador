var express = require('express');
const IndexController = require('../controller/indexController');
const produtos = require('../database/produtos.json');

var router = express.Router();

router.get('/', IndexController.index);

/* pagina quem somos*/
router.get('/somos', function(req, res, next) {
  res.render('somos', {
    css: ['/stylesheets/somos.css', '/stylesheets/menu-footer.css']
  });
});

/* pagina eventos*/
router.get('/eventos', function(req, res, next) {
  res.render('eventos',
    {
      css: ['/stylesheets/menu-footer.css', '/stylesheets/eventos.css']
    })
});

/* pagina Parceiros*/
router.get('/parceiros', function(req, res, next) {
  res.render('parceiros', {
    css: ['/stylesheets/parceiros.css', '/stylesheets/menu-footer.css']
  });
});

/* pagina login*/
router.get('/login', function(req, res, next) {
  res.render('login', {
    css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
  });
});

/* pagina painel de usuário*/
router.get('/painel-usuario', (req, res, next) => {
  res.render('painel-usuario', {
    css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
  });
});

/* pagina produto interno*/
router.get('/produto-interno', function(req, res, next) {
  res.render('prod-interno', {
    css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
  });
});

router.get('/produto-interno/:id', function (req, res, next) {
  const { id } = req.params;
  var produto = produtos.filter((prod) => prod.id == id);
  produto = produto[0]
  var arrayImg = produto.imagem;
  var img = arrayImg[0]
  console.log(produto)
  produto.imagem = img
  res.render('prod-interno', {produto,
    css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
  });
});

/* pagina carrinho*/
router.get('/carrinho', (req, res) => {
  res.render('carrinho', {
    css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
  });
});

/* pagina confira itens*/
router.get('/confira-itens', (req, res) => {
  res.render('confira-itens', {
    css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
  });
});

/* pagina selecionar endereço*/
router.get('/selecionar-endereco', (req, res) => {
  res.render('selecionar-endereco', {
    css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css'],
  });
});

/* pagina fechamento pagamento*/
router.get('/fechamento-pagamento', (req, res) => {
  res.render('fechamento-pagamento', {
    css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
  });
});

/* pagina fechamento pedido*/
router.get('/fechamento-pedido', (req, res) => {
  res.render('fechamento-pedido', {
    css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
  });
});

module.exports = router;