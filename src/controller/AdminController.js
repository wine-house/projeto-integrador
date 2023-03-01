const { Produto } = require('../models');
const { validationResult } = require('express-validator');

const AdminController = {
    index: async (req, res) => {
        // controller comunicando com o model
        const produtos = await Produto.findAll();

        return res.render('adminListar', {
            produtos: produtos,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
        });
    },
    
    //exibir tela de criação
    viewForm: async (req, res)=>{

        res.render('cadastrar', {
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
        });
    },

    //Criar novo produto
    createProduct: async (req, res)=>{
        const { nome, valor, categoria} = req.body;

        const avatar = req.files[0].originalname;
        const imagem = avatar.substring(0, avatar.indexOf('.'));
        
        const errors = validationResult(req);

        if(errors.isEmpty()){
            console.log(errors.mapped());
        };

        await Produto.create({ nome: nome, valor: valor, categoria: categoria, imagem: imagem });

        res.redirect('/admin/produtos/');
    },

    edit: (req, res) => {
        const { id } = req.params;
        var produto = produtos.filter((prod) => prod.id == id);
        produto = produto[0]
        var arrayImg = produto.imagem;
        var img = arrayImg[0]
        produto.imagem = img
        return res.render('cadastrar', {
            produto,
            css1: ['/stylesheets/menu-footer.css','/stylesheets/cadastrar.css']
        });
    },

    update:(req, res)=>{
        //logica para atualizar
        res.redirect('/admin/produtos')
    },

    //exibir a tela para mostrar o produto
    delete: async (req, res)=>{
        const { id } = req.params;
        await Produto.destroy({
            where: {
                id: id
            }
        });
        
    res.redirect('/admin/produtos');
    },

    
}

module.exports = AdminController;