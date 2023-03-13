const { Produto } = require('../models');

module.exports = {

    index: async(req, res) => {
        try
        {
          // controller comunicando com o model
          const produtos = await Produto.findAll();
          // controller comunicando com a view
          return res.render('index', {produtos: produtos,
              css: ['/stylesheets/home.css', '/stylesheets/menu-footer.css']
          });
        } catch (error) {
          console.log(error);
        };
    },

    somos: (req, res, next) => {
        try{
          res.render('somos', {
          css: ['/stylesheets/somos.css', '/stylesheets/menu-footer.css']
        });
        } catch (error) {
          console.log(error);
        } 
    },

    eventos: (req, res, next) => {
        try
        {
          res.render('eventos', {
            css: ['/stylesheets/menu-footer.css', '/stylesheets/eventos.css']
          });
        } catch (error){
          console.log(error);
        }
    },
    parceiros: (req, res, next) => {
       try
      { 
        res.render('parceiros', {
          css: ['/stylesheets/parceiros.css', '/stylesheets/menu-footer.css']
        });
      } catch (error){
        console.log(error);
      }
    },

    carrinho: (req, res) => {
      try
      {
        res.render('carrinho', {
          css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
        });
      } catch (error){
        console.log(error);
      };
    },

    painelUsuario: (req, res, next) => {
      res.render('painel-usuario', {
        css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css', '/stylesheets/painel-usuario.css']
      });
    },

    conferirItens: (req, res) => {
      res.render('confira-itens', {
        css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
      });
    },

    selecionarEndereco:  (req, res) => {
      res.render('selecionar-endereco', {
        css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css'],
      });
    },

    fechamentoPagamento: (req, res) => {
      res.render('fechamento-pagamento', {
        css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
      });
    },

    fechamentoPedido: (req, res) => {
      res.render('fechamento-pedido', {
        css: ['/stylesheets/menu-footer.css','/stylesheets/carrinho.css']
      });
    },
    
    login: (req, res, next) => {
      try
      {
        res.render('login', {
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
        });
      } catch (error){
        console.log(error);
      };
    }
}