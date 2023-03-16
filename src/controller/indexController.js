const {
  Produto,
  ItensCarrinho,
  Pedido
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
          res.status(500).send('Erro ao exibir a tela inicial.');
        };
    },

    somos: (req, res, next) => {
        try{
          res.render('somos', {
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
          css: ['/stylesheets/parceiros.css', '/stylesheets/menu-footer.css']
        });
      } catch (error){
        console.log(error);
        res.status(500).send('Erro ao exibir a tela parceiros.');
      }
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
        res.status(500).send('Erro ao aumentar a quantidade do item no carrinho.');
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

    painelUsuario: async(req, res, next) => {
      try {
        const pedidos = await Pedido.findAll();

        res.render('painel-usuario',  {
          pedidos: pedidos,
          usuario: req.session.usuario,
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css', '/stylesheets/painel-usuario.css']
        });
      } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao exibir o painel do usuário.');
      }
    },

    viewFinalizarPedido: async(req, res) => {
      try {
        const { formaPagamento } = req.query;

        const itensCarrinho = await ItensCarrinho.findAll();
        let valorTotalPedido;
        
        if(itensCarrinho.length > 0) {
          const arrValorTotalItens = itensCarrinho.map(item => item.valor_total);
          const reducer = (accumulator, curr) => accumulator + curr;
          valorTotalPedido = arrValorTotalItens.reduce(reducer);
        } else {
          valorTotalPedido = 0;
        }
        
        res.render('finalizar-pedido', {
          itensCarrinho: itensCarrinho,
          valorTotalPedido: valorTotalPedido,
          formaPagamento: formaPagamento,
          css: ['/stylesheets/menu-footer.css','/stylesheets/finalizar-pedido.css']
        });
      } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao exibir a tela para finalziar o pedido.');
      }
    },

    selecionaMetodoPagamento: async(req, res) => {
      try {
        const { formaPagamento } = req.body;
        res.redirect(`/carrinho/finalizar?formaPagamento=${formaPagamento}`);
      } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao selecionar forma de pagamento.');
      }
    },

    criaPedido: async (req, res) => {
      try {
          res.redirect('/painel-usuario');
      } catch (error) {
          console.error(error);
          res.status(500).send('Erro ao criar o pedido.');
      }
    }
}