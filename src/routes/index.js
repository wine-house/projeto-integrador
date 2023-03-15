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
    conferirItens, 
    selecionarEndereco, 
    fechamentoPagamento, 
    fechamentoPedido,
    login
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

/* pagina confira itens*/
router.get('/confira-itens', conferirItens);

/* pagina selecionar endereço*/
router.get('/selecionar-endereco', selecionarEndereco);

/* pagina fechamento pagamento*/
router.get('/fechamento-pagamento', fechamentoPagamento);

/* pagina fechamento pedido*/
router.get('/fechamento-pedido', fechamentoPedido);

module.exports = router;