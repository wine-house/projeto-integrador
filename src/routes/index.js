const express = require('express');
const {
    index,
    somos,
    eventos,
    parceiros,
    painelUsuario
} = require('../controller/indexController');

const router = express.Router();

router.get('/', index);

/* pagina quem somos*/
router.get('/somos', somos);

/* pagina eventos*/
router.get('/eventos', eventos);

/* pagina Parceiros*/
router.get('/parceiros', parceiros);

/* pagina painel de usuário*/
router.get('/painel-usuario', painelUsuario);

module.exports = router;