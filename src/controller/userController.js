const { Cliente } = require('../models');
const { validationResult } = require('express-validator');

const UserController = {
    //renderiza a página login
    login: (req, res, next) => {
        res.render('login', {
          css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
        });
    },
    //Criar um novo usuário
    createUser: async (req, res)=>{
        const { nome, email, cpf, dataNascimento, senha} = req.body;
        
        const errors = validationResult(req);

        if(errors.isEmpty()){
            console.log(errors.mapped());
        };

        await Cliente.create({ nome: nome, email: email, cpf: cpf, dataNascimento: dataNascimento, senha: senha});

        console.log("Usuário criado no banco com sucesso")
        res.redirect('/admin/produtos/');
    }
}

module.exports = UserController;