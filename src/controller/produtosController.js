const {
    Produto,
    Categoria
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
                usuario: req.session.usuario,
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
                usuario: req.session.usuario,
                css: ['/stylesheets/menu-footer.css', '/stylesheets/prod-interno.css']
            });
        } catch (error){
            console.log(error);
            res.status(500).send('Erro ao exibir a tela do produto selecionado.');
        }
    }
}
