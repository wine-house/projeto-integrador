const { Cliente } = require('../models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');


const ClienteController = {
  getForm: async (req, res) => {
    try{
      return res.render('cadastrarCliente', {
        usuario: req.session.usuario,
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

    
      const imageProfile = req.files[0]?.originalname;

      const errors = validationResult(req);

      if(!errors.isEmpty()){
        console.log(errors.mapped());
      } 

      const passwordHash = bcrypt.hashSync(password, 10)

      console.log(passwordHash);

      const cliente = await Cliente.create({
        nome: name,
        imageProfile: imageProfile,
        email: email,
        cpf: CPF,
        senha: passwordHash,
        data_nascimento: date
      });

      req.session.usuario = cliente;

      return res.redirect('/painel-usuario');
    
    } catch (error) {
      console.log(error);
      res.status(500).send('Erro ao criar o usuário.');
    }
  },

  getFormLogin: (req, res) => {
    try {
      return res.render('login', {
        usuario: req.session.usuario,
        css: ['/stylesheets/menu-footer.css', '/stylesheets/login.css']
      });
    } catch (error) {
      console.log(error);
      res.status(500).send('Erro exibir a tela de login.');
    }
  },

  login: async (req, res) => {

    try
    {
      const { email, senha } = req.body;

      const cliente = await Cliente.findOne({
        where: {
          email: email
        }
      });

      const senhaCorreta = bcrypt.compareSync(senha, cliente.senha);

      if (cliente && senhaCorreta) {
          req.session.usuario = cliente;
          return res.redirect('/painel-usuario');
      }

      res.status(500).send('Ops, você ainda não possui um cadastro no no site.');

  
    } catch (error) {
      console.log(error);
      res.status(500).send('Erro ao tentar logar.');
    }
  },

  editUser: async (req, res) => {
    const { id } = req.params;
    const { name, email, CPF, date, password } = req.body;

    const imageProfile = req.files[0]?.originalname;

    const updateCliente = await Cliente.update({
      nome: name,
      imageProfile: imageProfile,
      email: email,
      cpf: CPF,
      data_nascimento: date,
      senha: password
    },
    {
      where: {
        id: id
      }
    });

    
    
    return res.redirect('/painel-usuario');

  }
};


module.exports = ClienteController;