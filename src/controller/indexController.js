const {
  Produto,
  ItensCarrinho
} = require('../models');

module.exports = {
  index: async (req, res) => {
    // controller comunicando com o model
    const produto = await Produto.findAll();
    // controller comunicando com a view
    return res.render('index', {
      produto: produto,
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

  viewCarrinho: async (req, res) => {

    const itensCarrinho = await ItensCarrinho.findAll();

    res.render('carrinho', {
      itensCarrinho: itensCarrinho,
      css: [
        '/stylesheets/menu-footer.css',
        '/stylesheets/carrinho.css'
      ]
    });
  },

  atualizaQtdItemCarrinho: async (req, res) => {
    const {
      id
    } = req.params;
    const {
      quantidade
    } = req.body;

    await ItensCarrinho.update({
      quantidade: quantidade
    }, {
      where: {
        id: id
      }
    });

    res.redirect('/carrinhos/')
  },


  deletaItemCarrinho: async (req, res) => {
    const {
      id
    } = req.params;

    await ItensCarrinho.destroy({
      where: {
        id: id
      }
    });

    res.redirect('/carrinho/');
  },


}