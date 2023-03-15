const { body } = require("express-validator");

const validacoesCadastroUsuario = [
  body('name')
    .notEmpty().withMessage('Você deve preencher o campo do nome.').bail(),
  body('imageProfile')
    .notEmpty().withMessage('Você deve inserir uma imagem'),
  body('email')
  .isEmail().withMessage('Você deve preencher o campo email com um email')
  .notEmpty().withMessage('O campo email está vazio!'),
  body('date')
    .notEmpty().withMessage('Você deve selecionar o campo categoria.'),
  body('password')
    .isLength({min: 5}).withMessage(`Sua senha deve conter no mínimo: 5 caracteres`),
  body('passwordConfirmation')
    .custom((value, { req }) => {
      if(value !== req.body.password){
        throw new Error('As senhas não coincidem');
      }
      return true;
    })
];

module.exports = validacoesCadastroUsuario;