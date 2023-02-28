const { body } = require("express-validator");

const validacoes = [
  body('nome')
    .notEmpty().withMessage('Você deve preencher o campo do nome.').bail()
    .isNumeric().withMessage('Não é permitido caracteres numéricos.'),
  body('imagem')
    .notEmpty().withMessage('Você deve inserir uma imagem para o produto.'),
  body('preco')
    .notEmpty().withMessage('Você deve preencher o campo do preço.'),
  body('categoria')
    .notEmpty().withMessage('Você deve selecionar o campo tipo.')
];

module.exports = validacoes;