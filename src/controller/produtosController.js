const {
    Produto,
    Categoria,
    ItensCarrinho
} = require('../models');
const { Sequelize, Op } = require('sequelize');

module.exports = {
    index: async (req, res) => {
        try
        {
            const { categoria } = req.params;

            const produtos = await Produto.findAll({
                include: [{
                    model: Categoria,
                    as: 'categoria',
                    where: categoria ? {
                        nome: {
                            [Op.like]: `${categoria}`
                        }
                    } : null
                }]
            });

            const categorias = await Categoria.findAll({
                attributes: [[
                    Sequelize.fn('DISTINCT', Sequelize.col('nome')), 'nome'
                ]]
            });


            return res.render('produtos', {  produtos, categorias,
                css: ["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
            });
        } catch (error) {
            console.log(error);
            res.status(500).send('Erro ao exibir a listagem dos produtos.');
        }
    },

    viewProdInternoById: async(req, res, next) => {
        try
        {
            const { id } = req.params;
            const produto = await Produto.findByPk(id);
    
            res.render('prod-interno', { produto: produto,
                css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
            });
        } catch (error){
            console.log(error);
            res.status(500).send('Erro ao exibir a tela do produto selecionado.');
        }
    },

    adicionaItemNoCarrinho: async (req, res) => {
        try {
            const { id } = req.params;
            const qtdInicial = 1;
            const clienteMock = 1;
    
            const produto = await Produto.findByPk(id);
    
            await ItensCarrinho.create({
                nome: produto.nome,
                valor_unitario: produto.valor,
                valor_total: produto.valor,
                imagem: produto.imagem,
                quantidade: qtdInicial,
                produto_id: id,
                cliente_id: clienteMock
            });
    
            res.redirect('/carrinho/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao adicionar o item ao carrinho.');
        }
    }
}
