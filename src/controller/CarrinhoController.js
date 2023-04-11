const { 
  ItensCarrinho, 
  Produto, 
  FormaPagamento, 
  InformacoesEntrega,
  Pedido,
  Cliente
} = require('../models');
  
  module.exports = {
    adicionaItemNoCarrinho: async (req, res) => {
      try {
        const { id } = req.params;
        const qtdInicial = 1;
        const clienteLogado = req.session.usuario;

        const produto = await Produto.findByPk(id);

        await ItensCarrinho.create({
            nome: produto.nome,
            valor_unitario: produto.valor,
            valor_total: produto.valor,
            imagem: produto.imagem,
            quantidade: qtdInicial,
            produto_id: id,
            cliente_id: clienteLogado.id
        });

        res.redirect('/carrinho/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao adicionar o item ao carrinho.');
        }
      },

      viewCarrinho: async (req, res) => {
        const { usuario } = req.session;
        try {
          const clienteLogado = req.session.usuario;

          const itensCarrinho = await ItensCarrinho.findAll({
            where: {
              cliente_id: clienteLogado.id
            }
          });

          res.render('carrinho', {
          usuario,
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
    
          if (item.quantidade <= 1) {
            await ItensCarrinho.destroy({
              where: {
                id: id
              }
            });
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
          const listaMetodosPagamentos = await FormaPagamento.findAll();

          let valorTotalPedido;
          
          if(itensCarrinho.length > 0) {
            const arrValorTotalItens = itensCarrinho.map(item => item.valor_total);
            const reducer = (accumulator, curr) => accumulator + curr;
            valorTotalPedido = arrValorTotalItens.reduce(reducer);
          } else {
            valorTotalPedido = 0;
          }
          
          res.render('finalizar-pedido', {
            usuario: req.session.usuario,
            itensCarrinho: itensCarrinho,
            valorTotalPedido: valorTotalPedido,
            listaMetodosPagamentos: listaMetodosPagamentos,
            formaPagamento: formaPagamento,
            css: ['/stylesheets/menu-footer.css','/stylesheets/finalizar-pedido.css']
          });
        } catch (error) {
          console.log(error);
          res.status(500).send('Erro ao exibir a tela para finalziar o pedido.');
        }
      },

      salvaInformaçõesEntrega: async (req, res) => {
        const { cep, endereco, numero, complemento, telefone } = req.body;
        const clienteMock = 1;
        
        try {
          await InformacoesEntrega.create({
              cep: cep,
              endereco: endereco,
              numero: numero,
              complemento: complemento,
              telefone: telefone,
              cliente_id: clienteMock
          });

          res.status(200);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao salvar os dados da entrega.');
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
          const { valorTotal } = req.body;
          const { id } = req.params;
          const clienteLogado = req.session.usuario;

          const pagamento = await FormaPagamento.findByPk(id);

          await Pedido.create({
            data_criacao: new Date(),
            valor_total: valorTotal,
            metodo_pagamento: pagamento.metodo_pagamento,
            cliente_id: clienteLogado.id
          });

          await ItensCarrinho.destroy({ where: {} });

          res.redirect('/painel-usuario');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao criar o pedido.');
        }
      }
  }