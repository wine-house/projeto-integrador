var express = require('express');
var router = express.Router();
var servicoModel = [
  {
    id: 1,
    nome: 'Barone Montalto',
    valor: 'R$ 77,80',
    classificacao: 'Vinho Tinto',
    safra: 2021,
    imagem: '1-red-wine'
  },
  {
    id: 2,
    nome: 'Matetic Corralillo',
    valor: 'R$ 75,50',
    classificacao: 'Vinho Tinto',
    safra: 2016,
    imagem: '2-red-wine'
  },
  {
    id: 3,
    nome: 'Corte de unhas',
    valor: 'R$ 5,00',
    descricao: 'Corte de unhas, todas as patas',
    imagem: 'corte-unha'
  },
  {
    id: 4,
    nome: 'Creche',
    valor: 'R$ 50,00',
    descricao: 'Cuidamos do seu pet',
    imagem: 'corte-unha'
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send(JSON.stringify(servicoModel));
});

module.exports = router;
