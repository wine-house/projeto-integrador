const express = require('express');
const {
    index,
    somos,
    eventos,
    parceiros,
    viewCarrinho,
    adicionaQtdDoItemCarrinho,
    subtraiQtdDoItemCarrinho,
    deletaItemCarrinho,
    painelUsuario, 
    viewFinalizarPedido, 
    selecionaMetodoPagamento,
    criaPedido
} = require('../controller/indexController');

const router = express.Router();

router.get('/', index);

/* pagina quem somos*/
router.get('/somos', somos);

/* pagina eventos*/
router.get('/eventos', eventos);

/* pagina Parceiros*/
router.get('/parceiros', parceiros);

/* pagina carrinho*/
router.get('/carrinho', viewCarrinho);
router.put('/carrinho/adiciona/:id', adicionaQtdDoItemCarrinho);
router.put('/carrinho/subtrai/:id', subtraiQtdDoItemCarrinho);
router.delete('/carrinho/:id', deletaItemCarrinho);

/* pagina painel de usuário*/
router.get('/painel-usuario', painelUsuario);

/* rotas para finalizar pedido*/
router.get('/carrinho/finalizar', viewFinalizarPedido);
router.post('/carrinho/finalizar', selecionaMetodoPagamento);
router.post('/carrinho/finalizar/criaPedido', criaPedido);

module.exports = router;