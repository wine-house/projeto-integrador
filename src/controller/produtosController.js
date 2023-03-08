const {
    Produto,
    ItensCarrinho
} = require('../models');
const produtoDataBase = require("../database/produtos.json");


module.exports = {
    index: async (req, res) => {
        // controller comunicando com o model
        const produtos = await Produto.findAll();
        // controller comunicando com a view
        return res.render('produtos', {
            produtos,
            css: ["/stylesheets/produtos.css", "/stylesheets/menu-footer.css"]
        });
    },

    show: (req, res) => {
        const {
            categoria
        } = req.params;
        var vinhoCategoria = produtoDataBase.filter((prod) => prod.categoria == categoria)

        return res.render('produto-listar', {
            vinhoCategoria,
            css: ["/stylesheets/produtos.css", "/stylesheets/menu-footer.css"]
        });
    },

    mostrarporId: (req, res) => {
        const {
            id
        } = req.params;
        var vinhoCategoria = produtoDataBase.filter((prod) => prod.id == id)
        console.log(vinhoCategoria)

        return res.render('produto-listar', {
            vinhoCategoria,
            css: ["/stylesheets/produtos.css", "/stylesheets/menu-footer.css"]
        });
    },

    deletar: async (req, res) => {
        const {
            id
        } = req.params;
        await Produto.destroy(id);
    },

    //exibe tela do produto interno por id
    viewProdInternoById: async (req, res) => {
        const {
            id
        } = req.params;
        const produto = await Produto.findByPk(id);

        res.render('prod-interno', {
            produto: produto,
            css: [
                '/stylesheets/menu-footer.css',
                '/stylesheets/prod-interno.css'
            ]
        });
    },

    adicionaItemNoCarrinho: async (req, res) => {
        const {
            id
        } = req.params;
        const qtdInicial = 1;

        await ItensCarrinho.create({
            nome: id.nome,
            valor_unitario: id.valor_unitario,
            valor_total: id.valor_total,
            imagem: id.imagem,
            quantidade: qtdInicial
        });

        res.redirect('/carrinho/');
    },


}