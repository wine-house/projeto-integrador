const router = require('express').Router();

const multer = require('multer');
const { multerUserStorage } = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoesCadastroUsuario');


const { getForm, createUser } = require('../controller/ClienteController');

const upload = multer({ storage: multerUserStorage });

/* GET users listing. */
router.get('/cadastrar-conta', getForm );
/* CREATE USER */
router.post('/cadastrar-conta', validacoes, upload.any('imgUser'), createUser);

module.exports = router;
