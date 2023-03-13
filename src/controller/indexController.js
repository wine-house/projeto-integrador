const {
  Produto,
  ItensCarrinho
} = require('../models');

module.exports = {

    index: async(req, res) => {
        try
        {
          const produtos = await Produto.findAll();
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

    login: (req, res, next) => {
        res.render('login', {
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
        });
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

    viewCarrinho: async (req, res) => {
      try {
        const itensCarrinho = await ItensCarrinho.findAll();
        res.render('carrinho', {
        itensCarrinho: itensCarrinho,
        css: [
          '/stylesheets/menu-footer.css',
          '/stylesheets/carrinho.css'
        ]
      });
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao exibir o carrinho');
      }
    },
 
    adicionaQtdDoItemCarrinho: async (req, res) => {
      try {
        const { id } = req.params;
        const item = await ItensCarrinho.findByPk(id);
        item.quantidade += 1;
  
        const valorTotal = item.valor_unitario * item.quantidade;
        item.valor_total = valorTotal;
  
        await item.save();
        res.redirect('/carrinho');
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar o item ao carrinho');
      }
      
    },
 
    subtraiQtdDoItemCarrinho: async (req, res) => {
      try {
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
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao subtrair um item do produto');
      }
    },
 
    deletaItemCarrinho: async (req, res) => {
      try {
        const { id } = req.params;
        await ItensCarrinho.destroy({
          where: {
            id: id
          }
        });
        res.redirect('/carrinho/');
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao deletar o item do carrinho');
      }
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
    }
}