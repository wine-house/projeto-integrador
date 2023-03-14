const { Cliente } = require('../models');
const { validationResult } = require('express-validator');

const ClienteController = {
  getForm: async (req, res) => {
    try{

      return res.render('cadastrar-conta', {
        css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
      });

    } catch (err) {
      console.log(err);
      return res.render('error', {
        css: ['/stylesheets/menu-footer.css']
      });
    }
  },

  createUser: async (req, res) => {
    try
    {
      const { name, email, date, password, ciente, maiorque18 } = req.body;
    
      const errors = validationResult(req);

      if(!errors.isEmpty()){
        console.log(errors.mapped());
      } 

      const cliente = await Cliente.create({
        nome: name,
        email: email,
        senha: password,
        dataDeNascimento: date
      });

      req.session.usuario = cliente;

      return res.redirect('/painel-usuario');
    
    } catch (error) {
      console.log(error);
    }

  }
};


module.exports = ClienteController;