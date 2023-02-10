const produtosModel = require('../models/produtosModel');
const produtoDataBase = require("../database/produtos.json");


module.exports = {
    index:  (req, res) => {
        // controller comunicando com o model
        const produtos = produtosModel.index();
        // controller comunicando com a view
        return res.render('produtos', {
            produtos: produtos,
            css1: "/stylesheets/produtos.css",
            css2: "/stylesheets/menu-footer.css"
        });
    },


    show: (req, res) => {
        const { tipo } = req.params;
        var vinhoTipo = produtoDataBase.filter((prod) => prod.tipo == tipo)

        return res.render('produto-listar', {
            vinhoTipo,
            css1: "/stylesheets/produtos.css",
            css2: "/stylesheets/menu-footer.css"
        });
    },

     mostrarporId: (req, res) => {
        const { id } = req.params;
        var vinhoTipo = produtoDataBase.filter((prod) => prod.id == id)
        console.log(vinhoTipo)

        return res.render('produto-listar', {

            vinhoTipo,
            css1: "/stylesheets/produtos.css",
            css2: "/stylesheets/menu-footer.css"
        });
       
    
    }
}
