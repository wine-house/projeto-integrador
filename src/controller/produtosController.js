const { Produto } = require('../../models');
const produtoDataBase = require("../database/produtos.json");


module.exports = {
    index: async (req, res) => {
        // controller comunicando com o model
        const produtos = await Produto.findAll();
        // controller comunicando com a view
        return res.render('produtos', {
            produtos: produtos,
            css: ["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
        });
    },


    show: (req, res) => {
        const { tipo } = req.params;
        var vinhoTipo = produtoDataBase.filter((prod) => prod.tipo == tipo)

        return res.render('produto-listar', {
            vinhoTipo,
            css:["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
        });
    },

     mostrarporId: (req, res) => {
        const { id } = req.params;
        var vinhoTipo = produtoDataBase.filter((prod) => prod.id == id)
        console.log(vinhoTipo)

        return res.render('produto-listar', {

            vinhoTipo,
            css:["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
        });
    },
    getProductById: async(req, res, next) => {
        const { id } = req.params;
        const produto = Produto.findByPk(id);
        // var produto = produtos.filter((prod) => prod.id == id);
        // produto = produto[0]
        // var arrayImg = produto.imagem;
        // var img = arrayImg[0]
        // console.log(produto)
        // produto.imagem = img

        res.render('prod-interno', { produto: produto,
          css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
        });
      }
}
