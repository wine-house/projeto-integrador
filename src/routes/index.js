const express = require('express');
const { index, somos, eventos, parceiros, login, carrinho, painelUsuario, conferirItens, selecionarEndereco, fechamentoPagamento, fechamentoPedido } = require('../controller/indexController');

const router = express.Router();

router.get('/', index);

/* pagina quem somos*/
router.get('/somos', somos);

/* página de login */
router.get('/login', login);

/* pagina eventos*/
router.get('/eventos', eventos);

/* pagina Parceiros*/
router.get('/parceiros', parceiros);

/* pagina carrinho*/
router.get('/carrinho', carrinho);

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