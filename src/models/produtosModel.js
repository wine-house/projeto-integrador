const produtosJSON = require('../database/produtos.json');

module.exports = {
    index: () => {
      // return [
      //   {
      //     id: 1,
      //     nome: 'Barone Montalto',
      //     valor: 'R$ 77,80',
      //     classificacao: 'Vinho Tinto',
      //     safra: 2021,
      //     imagem: ['1-barone-montalto', '1-red-wine']
      //   },
      //   {
      //     id: 2,
      //     nome: 'Matetic Corralillo',
      //     valor: 'R$ 75,50',
      //     classificacao: 'Vinho Tinto',
      //     safra: 2016,
      //     imagem: ['2-corralillo', '2-red-wine']
      //   },
      //   {
      //     id: 3,
      //     nome: 'Vistamar Brisa',
      //     valor: 'R$ 85,80',
      //     classificacao: 'Vinho Seco',
      //     safra: 2020,
      //     imagem: ['3-vistamar-brisa', '3-red-wine']
      //   },
      //   {
      //     id: 4,
      //     nome: 'Rio Flor Douro',
      //     valor: 'R$ 80,50',
      //     classificacao: 'Vinho Seco',
      //     safra: 2018,
      //     imagem: ['4-rio-flor', '4-red-wine']
      //   },
      //   {
      //     id: 5,
      //     nome: 'Estandon Heritage',
      //     valor: 'R$ 92,80',
      //     classificacao: 'Vinho Rose',
      //     safra: 2016,
      //     imagem: ['5-estandon', '1-white-wine']
      //   },
      //   {
      //     id: 6,
      //     nome: 'Tramari',
      //     valor: 'R$ 95,50',
      //     classificacao: 'Vinho Rose',
      //     safra: 2015,
      //     imagem: ['6-tramari', '2-white-wine']
      //   },
      //   {
      //     id: 7,
      //     nome: 'Victoria Geisse',
      //     valor: 'R$ 75,00',
      //     classificacao: 'Espumante',
      //     safra: 2021,
      //     imagem: ['7-victoria-geisse', '3-white-wine']
      //   },
      //   {
      //     id: 8,
      //     nome: 'Gramona Cuvee',
      //     valor: 'R$ 75,80',
      //     classificacao: 'Espumante',
      //     safra: 2020,
      //     imagem: ['8-gramona-cuvee', '4-white-wine']
      //   },
      //   {
      //     id: 9,
      //     nome: 'Patrick Clerget',
      //     valor: 'R$ 80,50',
      //     classificacao: 'Vinho Tinto',
      //     safra: 2012,
      //     imagem: ['9-patrick-clerget', '']
      //   },
      //   {
      //     id: 10,
      //     nome: 'Barone Montalto',
      //     valor: 'R$ 95,80',
      //     classificacao: 'Vinho Tinto',
      //     safra: 2017,
      //     imagem: ['10-barone-montalto', '']
      //   },
      //   {
      //     id: 11,
      //     nome: 'Vallado Douro',
      //     valor: 'R$ 82,50',
      //     classificacao: 'Vinho Seco',
      //     safra: 2022,
      //     imagem: ['11-valladodouro', '']
      //   },
      //   {
      //     id: 12,
      //     nome: 'Leyda Chardonnay',
      //     valor: 'R$ 78,00',
      //     classificacao: 'Vinho Seco',
      //     safra: 2013,
      //     imagem: ['12-leyda-reserva', '']
      //   },
      //   {
      //     id: 13,
      //     nome: 'Henri LeBlanc',
      //     valor: 'R$ 77,00',
      //     classificacao: 'Espumante',
      //     safra: 2020,
      //     imagem: ['13-henri-leblanc', '']
      //   },
      //   {
      //     id: 14,
      //     nome: 'Gramona Imperial',
      //     valor: 'R$ 93,50',
      //     classificacao: 'Espumante',
      //     safra: 2015,
      //     imagem: ['14-gramona-imperial', '']
      //   },
      //   {
      //     id: 15,
      //     nome: 'Stardust',
      //     valor: 'R$ 85,50',
      //     classificacao: 'Vinho Rose',
      //     safra: 2018,
      //     imagem: ['15-stardust', '']
      //   },
      //   {
      //     id: 16,
      //     nome: 'Lumière',
      //     valor: 'R$ 88,00',
      //     classificacao: 'Vinho Rose',
      //     safra: 2020,
      //     imagem: ['16-lumière', '']
      //   }
      // ]

      return produtosJSON;
    }
}