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
            // controller comunicando com o model

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

            console.log(produtos);

            const categorias = await Categoria.findAll({
                attributes: [[
                    Sequelize.fn('DISTINCT', Sequelize.col('nome')), 'nome'
                ]]
            });


            return res.render('produtos', {  produtos, categorias,
                css: ["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
            });
        } catch (err) {
            console.log(err);
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
        } catch (err){
            console.log(err);
        }
    }
}
