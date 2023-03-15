const { Cliente } = require('../models');
const { validationResult } = require('express-validator');

const ClienteController = {
  getForm: async (req, res) => {
    try{
      return res.render('cadastrarCliente', {
        css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
      });

    } catch (err) {
      console.log(err);
      res.status(500).send('Erro ao exibir a tela de cadastro do cliente.');
    }
  },

  createUser: async (req, res) => {
    try
    {
      const { name, email, CPF, date, password } = req.body;
    
      const imageProfile = req.files[0].originalname;

      const errors = validationResult(req);

      if(!errors.isEmpty()){
        console.log(errors.mapped());
      } 

      const cliente = await Cliente.create({
        nome: name,
        imageProfile: imageProfile,
        email: email,
        cpf: CPF,
        senha: password,
        data_nascimento: date
      });

      req.session.usuario = cliente;

      return res.redirect('/painel-usuario');
    
    } catch (error) {
      console.log(error);
      res.status(500).send('Erro ao criar o usuário.');
    }
  }
};


module.exports = ClienteController;