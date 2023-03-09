const { Produto, Fornecedor } = require('../../../models');

const apiController = {
  getWines: async (req, res) => {
    const produtos = await Produto.findAll({
      attributes: ['id', 'nome', 'valor', 'categoria', 'safra', 'fornecedor_id'],
      include: [{
        attributes: ['nome', 'email'],
        model: Fornecedor, 
        as: 'fornecedor'}]
    });
    /** 
     * Procura por todos os vinhos na base de dados
     * @param request @param response
     * @return {Object json}
     * 
    */
    res.status(200).json({
      data: produtos,
      status: 200
    });
    },

  getWine: async (req, res) => {
    const { id } = req.params;
    const produto = await Produto.findOne({
      attributes: ['id', 'nome', 'valor', 'categoria', 'safra', 'fornecedor_id'],
      include: [{
        attributes: ['nome', 'email'],
        model: Fornecedor,
        as: 'fornecedor'
      }],
      where: {
        id: id
      }
    });

    res.status(200).json({
      data: produto,
      status: 200
    });
  }
};

module.exports = apiController;