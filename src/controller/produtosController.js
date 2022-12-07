const produtosModel = require('../models/produtosModel');

module.exports = {
    index: (req, res) => {
        // controller comunicando com o model
        const produtos = produtosModel.index();
        // controller comunicando com a view
        return res.render('produtos', {produtos: produtos, 
            css1: "/stylesheets/produtos.css", 
            css2: "/stylesheets/menu-footer.css"
        });
    }
}