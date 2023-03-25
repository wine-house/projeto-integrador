const router = require('express').Router();

const multer = require('multer');
const { multerUserStorage } = require('../middlewares/configDisk');
const validacoes = require('../middlewares/validacoesCadastroUsuario');


const { getFormLogin, getForm, createUser, login, editUser } = require('../controller/ClienteController');

const upload = multer({ storage: multerUserStorage });

/* LOGIN DE USUARIO */
router.get('/', getFormLogin);
router.post('/login', login);

/* CADASTRO DE USUARIOS */
router.get('/cadastrar-conta', getForm );
router.post('/cadastrar-conta', validacoes, upload.any("imageProfile"), createUser);

/* EDITAR UM USUARIO */
router.put('/editar/:id', upload.any('imageProfile'), editUser);

module.exports = router;
