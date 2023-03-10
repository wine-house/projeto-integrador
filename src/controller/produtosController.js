const { Produto } = require('../models');
const { Sequelize, Op } = require('sequelize');



module.exports = {
    index: async (req, res) => {
        try
        {
            const { categoria } = req.query;
            // controller comunicando com o model
            const produtos = await Produto.findAll({
                where: categoria ? {
                    categoria: {
                        [Op.like]: `${categoria}`
                    }
                } : null
            });
            // controller comunicando com a view

            const categorias = await Produto.findAll({
                attributes: [[
                    Sequelize.fn('DISTINCT', Sequelize.col('categoria')), 'categoria'
                ]]
            });

            return res.render('produtos', {  produtos, categorias,
                css: ["/stylesheets/produtos.css","/stylesheets/menu-footer.css"]
            });
        } catch (err) {
            console.log(err);
        }
    },
    getProductById: async(req, res, next) => {
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
