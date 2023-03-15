const { Cliente } = require('../models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');


const ClienteController = {
  getForm: async (req, res) => {
    try{

      return res.render('cadastrarCliente', {
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
      const { name, email, CPF, date, password } = req.body;

      console.log(password);
    
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
    }
  },

  getFormLogin: (req, res) => {
    return res.render('login', {
      css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
    });
  },

  login: async (req, res) => {

    try
    {
      const { email, senha } = req.body;

      const cliente = await Cliente.findAll({
        where: {
          email: {
            [Op.like]: `${email}`
          },
          senha: {
            [Op.like]: `${senha}`
          }
        }
      });

      if(cliente[0].email == email && cliente[0].senha == senha){
        req.session.usuario = cliente[0];
        return res.redirect('/painel-usuario');
      } else {
        return res.render('error', {
          message: "O usuário não está cadastrado no banco de dados"
        });
      }
      

    } catch (err) {
      return res.render('error', {
        message: err
      });
    }

  }
};


module.exports = ClienteController;