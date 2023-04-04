const express = require('express');
const {
    index,
    somos,
    eventos,
    parceiros,
    painelUsuario
} = require('../controller/indexController');

const usuarioLogado = require('../middlewares/validacaoDeUsuario')

const router = express.Router();

router.get('/', index);

/* pagina quem somos*/
router.get('/somos', somos);

/* pagina eventos*/
router.get('/eventos', eventos);

/* pagina Parceiros*/
router.get('/parceiros', parceiros);

/* pagina painel de usuário*/
router.get('/painel-usuario',usuarioLogado, painelUsuario);

module.exports = router;