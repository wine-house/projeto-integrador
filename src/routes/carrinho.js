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

/* rotas do carrinho*/
router.get('/', viewCarrinho);
router.put('/adiciona/:id', adicionaQtdDoItemCarrinho);
router.put('/subtrai/:id', subtraiQtdDoItemCarrinho);
router.delete('/:id', deletaItemCarrinho);

/* rotas para finalizar pedido*/
router.get('/finalizar',validacaoDeUsuario, viewFinalizarPedido);
router.post('/finalizar',validacaoDeUsuario, selecionaMetodoPagamento);
router.post('/finalizar/criaPedido/:id',validacaoDeUsuario, criaPedido);
router.post('/finalizar/entrega',validacaoDeUsuario, salvaInformaçõesEntrega);



module.exports = router;