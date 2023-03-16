const express = require('express');
const {
    viewCarrinho,
    adicionaQtdDoItemCarrinho,
    subtraiQtdDoItemCarrinho,
    deletaItemCarrinho,
    viewFinalizarPedido, 
    selecionaMetodoPagamento,
    criaPedido
} = require('../controller/CarrinhoController');

const router = express.Router();

/* rotas do carrinho*/
router.get('/', viewCarrinho);
router.put('/adiciona/:id', adicionaQtdDoItemCarrinho);
router.put('/subtrai/:id', subtraiQtdDoItemCarrinho);
router.delete('/:id', deletaItemCarrinho);

/* rotas para finalizar pedido*/
router.get('/finalizar', viewFinalizarPedido);
router.post('/finalizar', selecionaMetodoPagamento);
router.post('/finalizar/criaPedido', criaPedido);

module.exports = router;