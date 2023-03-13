const { Produto } = require('../models');

module.exports = {
    index: async(req, res) => {
        // controller comunicando com o model
        const produtos = await Produto.findAll();
        // controller comunicando com a view
        return res.render('index', {produtos: produtos,
            css: ['/stylesheets/home.css', '/stylesheets/menu-footer.css']
        });
    },
    somos: (req, res, next) => {
        res.render('somos', {
          css: ['/stylesheets/somos.css', '/stylesheets/menu-footer.css']
        });
    },
    eventos: (req, res, next) => {
        res.render('eventos', {
            css: ['/stylesheets/menu-footer.css', '/stylesheets/eventos.css']
          });
    },
    parceiros: (req, res, next) => {
        res.render('parceiros', {
          css: ['/stylesheets/parceiros.css', '/stylesheets/menu-footer.css']
        });
    },
    login: (req, res, next) => {
        res.render('login', {
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
        });
    },
    carrinho: (req, res) => {
        res.render('carrinho', {
          css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
        });
    },

    fechamentoPedido: (req, res) => {
      res.render('fechamentoPedido', {
        css: ['/stylesheets/fechamentoPedido.css','/stylesheets/menu-footer.css']
      });
  }
}