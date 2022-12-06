const produtosJSON = require('../database/produtos.json');

module.exports = {
    index: () => {
      return produtosJSON;
    }
}