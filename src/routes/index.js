const express = require('express');
const { index, somos, eventos, parceiros, login, carrinho } = require('../controller/indexController');
const produtos = require('../database/produtos.json');

const router = express.Router();

router.get('/', index);

/* pagina quem somos*/
router.get('/somos', somos);

/* pagina eventos*/
router.get('/eventos', eventos);

/* pagina Parceiros*/
router.get('/parceiros', parceiros);

/* pagina carrinho*/
router.get('/carrinho', carrinho);

/* pagina painel de usuário*/
router.get('/painel-usuario', (req, res, next) => {
  res.render('painel-usuario', {
    css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css', '/stylesheets/painel-usuario.css']
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