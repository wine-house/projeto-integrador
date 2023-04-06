const express = require('express');
const {
    viewCarrinho,
    adicionaQtdDoItemCarrinho,
    subtraiQtdDoItemCarrinho,
    deletaItemCarrinho,
    viewFinalizarPedido, 
    selecionaMetodoPagamento,
    criaPedido,
    salvaInformaçõesEntrega
} = require('../controller/CarrinhoController');

const validacaoDeUsuario = require('../middlewares/validacaoDeUsuario')

const router = express.Router();
const usuarioLogado = require('../middlewares/validacaoDeUsuario');

/* rotas do carrinho*/
router.get('/', viewCarrinho);
router.put('/adiciona/:id', adicionaQtdDoItemCarrinho);
router.put('/subtrai/:id', subtraiQtdDoItemCarrinho);
router.delete('/:id', deletaItemCarrinho);

/* rotas para finalizar pedido*/
router.get('/finalizar', viewFinalizarPedido);
router.post('/finalizar', selecionaMetodoPagamento);
router.post('/finalizar/criaPedido/:id', usuarioLogado, criaPedido);
router.post('/finalizar/entrega', salvaInformaçõesEntrega);



module.exports = router;