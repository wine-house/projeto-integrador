const { ItensCarrinho, Produto } = require('../models');
  
  module.exports = {
    adicionaItemNoCarrinho: async (req, res) => {
        try {
            const { id } = req.params;
            const qtdInicial = 1;
            const clienteMock = 1;
    
            const produto = await Produto.findByPk(id);
    
            await ItensCarrinho.create({
                nome: produto.nome,
                valor_unitario: produto.valor,
                valor_total: produto.valor,
                imagem: produto.imagem,
                quantidade: qtdInicial,
                produto_id: id,
                cliente_id: clienteMock
            });
    
            res.redirect('/carrinho/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao adicionar o item ao carrinho.');
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