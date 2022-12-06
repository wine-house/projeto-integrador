const produtosModel = require('../../views/produtosModel');

module.exports = {
    index: (req, res) => {
        // controller comunicando com o model
        const produtos = produtosModel.index();
        // controller comunicando com a view
        return res.render('index', {produtos: produtos});
    }
}