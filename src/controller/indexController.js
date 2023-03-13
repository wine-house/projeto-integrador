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

  adicionaQtdDoItemCarrinho: async (req, res) => {
    const { id } = req.params;
    const item = await ItensCarrinho.findByPk(id);
    item.quantidade += 1;

    const valorTotal = item.valor_unitario * item.quantidade;
    item.valor_total = valorTotal;

    await item.save();
    res.redirect('/carrinho');
  },

  subtraiQtdDoItemCarrinho: async (req, res) => {
    const { id } = req.params;

    const item = await ItensCarrinho.findByPk(id);

    if (item.quantidade <= 0) {
      return
    } else {
      item.quantidade -= 1;

      const valorTotal = item.valor_unitario * item.quantidade;
      item.valor_total = valorTotal;
    }

    await item.save();

    res.redirect('/carrinho/')
  },

  deletaItemCarrinho: async (req, res) => {
    const { id } = req.params;

    await ItensCarrinho.destroy({
      where: {
        id: id
      }
    });

    res.redirect('/carrinho/');
  }
}