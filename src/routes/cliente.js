const express = require('express');
const router = express.Router();
const { getForm, createUser } = require('../controller/ClienteController');
const validacoes = require('../middlewares/validacoesCadastroUsuario');

/* GET users listing. */
router.get('/cadastrar-conta', getForm );

router.post('/cadastrar-conta', validacoes, createUser);

module.exports = router;
