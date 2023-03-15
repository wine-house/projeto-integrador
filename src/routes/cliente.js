const router = require('express').Router();

const multer = require('multer');
const { multerUserStorage } = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoesCadastroUsuario');


const { getFormLogin, getForm, createUser, login } = require('../controller/ClienteController');

const upload = multer({ storage: multerUserStorage });

router.get('/', getFormLogin);

router.post('/login', login);

/* GET users listing. */
router.get('/cadastrar-conta', getForm );
/* CREATE USER */
router.post('/cadastrar-conta', validacoes, upload.any("imageProfile"), createUser);

module.exports = router;
