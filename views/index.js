var express = require('express');
const IndexController = require('../src/controller/indexController');
const produtosController = require('./produtosController');

var router = express.Router();

// const produtosModel = require('../models/produtosModel');

/* GET Home Page */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send(JSON.stringify(produtosModel.index()));
//   // res.render('index');
// });
// router.get('/', function (req, res, next) {
//   res.render('index',
//     {
//       css1: "/stylesheets/home.css",
//       css2: "/stylesheets/menu-footer.css"
//     })
// });

router.get('/', IndexController.index);

router.get('/somos', function(req, res) {
  res.render('somos');
});

router.get('/eventos', function(req, res) {
  res.render('eventos');
});

router.get('/produtos', produtosController.index);

router.get('/parceiros', (req, res) => {
  res.render('parceiros');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/painel-usuario', (req, res) => {
  res.render('painel-usuario');
});

router.get('/produto-interno', (req, res) => {
  res.render('prod-interno');
});

router.get('/cadastro-produto', (req, res) => {
  res.render('cadastro-prod');
});

router.get('/carrinho', (req, res) => {
  res.render('carrinho');
});

router.get('/confira-itens', (req, res) => {
  res.render('confira-itens');
});

router.get('/selecionar-endereco', (req, res) => {
  res.render('selecionar-endereco');
});

router.get('/fechamento-pagamento', (req, res) => {
  res.render('fechamento-pagamento');
});

router.get('/fechamento-pedido', (req, res) => {
  res.render('fechamento-pedido');
});

module.exports = router;