const express = require("express");
const router = express.Router();

// const authAdminController = require("../controller/authAdminController");
const validacoes = require('../middlewares/validacoes');

const {login, createUser} = require("../controller/userController");

/* pagina login*/
router.get('/', login);

router.post("/criar", validacoes, createUser);

module.exports = router;
