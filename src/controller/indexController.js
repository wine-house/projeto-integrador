const produtosModel = require('../models/produtosModel');

module.exports = {
    index: (req, res) => {
        // controller comunicando com o model
        const produtos = produtosModel.index();
        // controller comunicando com a view
        return res.render('index', {produtos: produtos,
            css: ['/stylesheets/home.css', '/stylesheets/menu-footer.css']
        });
    }
}