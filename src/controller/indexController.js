const {
  Produto,
  Pedido
} = require('../models');

module.exports = {

    index: async(req, res) => {
        try
        {
          const produtos = await Produto.findAll();
          return res.render('index', {
            produtos: produtos,
            usuario: req.session.usuario,
            css: ['/stylesheets/home.css', '/stylesheets/menu-footer.css']
          });
        } catch (error) {
          console.log(error);
          res.status(500).send('Erro ao exibir a tela inicial.');
        };
    },

    somos: (req, res, next) => {
        try{
          res.render('somos', {
          usuario: req.session.usuario,
          css: ['/stylesheets/somos.css', '/stylesheets/menu-footer.css']
        });
        } catch (error) {
          console.log(error);
          res.status(500).send('Erro ao exibir a tela somos.');
        } 
    },

    eventos: (req, res, next) => {
        try
        {
          res.render('eventos', {
            usuario: req.session.usuario,
            css: ['/stylesheets/menu-footer.css', '/stylesheets/eventos.css']
          });
        } catch (error){
          console.log(error);
          res.status(500).send('Erro ao exibir a tela de eventos.');
        }
    },

    parceiros: (req, res, next) => {
       try
      { 
        res.render('parceiros', {
          usuario: req.session.usuario,
          css: ['/stylesheets/parceiros.css', '/stylesheets/menu-footer.css']
        });
      } catch (error){
        console.log(error);
        res.status(500).send('Erro ao exibir a tela parceiros.');
      }
    },

    painelUsuario: async(req, res, next) => {
      try {
        const clienteLogado = req.session.usuario;

        const pedidos = await Pedido.findAll({
          where: {
            cliente_id: clienteLogado.id
          }
        });
        res.render('painel-usuario',  {
          pedidos: pedidos,
          usuario: clienteLogado,
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css', '/stylesheets/painel-usuario.css']
        });
      } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao exibir o painel do usuário.');
      }
    },

    viewDetalhesDoPedido: async(req, res, next) => {
      try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        const ids = await Pedido.findAll();
        console.log(ids, '@@@@@@@@@@@@@@@@')  


        res.render('detalhesDoPedido',  {
          pedido: pedido,
          usuario: req.session.usuario,
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css', '/stylesheets/detalhesDoPedido.css']
        });
      } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao exibir o detalhes do pedido.');
      }
    },
}