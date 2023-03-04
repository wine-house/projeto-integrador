const { Produto } = require('../models');
const produtoDataBase = require("../database/produtos.json");


module.exports = {
    index: async (req, res) => {
        // controller comunicando com o model
        const produtos = await Produto.findAll();
        // controller comunicando com a view
        console.log(produtos)
        return res.render('produtos', {  produtos,
            css: ["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
        });
    },


    show: (req, res) => {
        const { categoria } = req.params;
        var vinhoCategoria = produtoDataBase.filter((prod) => prod.categoria == categoria)

        return res.render('produto-listar', {
            vinhoCategoria,
            css:["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
        });
    },

     mostrarporId: (req, res) => {
        const { id } = req.params;
        var vinhoCategoria = produtoDataBase.filter((prod) => prod.id == id)
        console.log(vinhoCategoria)

        return res.render('produto-listar', {

            vinhoCategoria,
            css:["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
        });
    },
    getProductById: async(req, res, next) => {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        // var produto = produtos.filter((prod) => prod.id == id);
        // produto = produto[0]
        // var arrayImg = produto.imagem;
        // var img = arrayImg[0]
        // console.log(produto)
        // produto.imagem = img

        res.render('prod-interno', { produto: produto,
          css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
        });
      },
      deletar: async(req, res) => {
        const { id } = req.params;
        await Produto.destroy(id);
        
      }
}
