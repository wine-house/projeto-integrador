const { Produto, Fornecedor } = require('../models');
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

        const fornecedores = await Fornecedor.findAll();

        res.render('cadastrar', {
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css'],
            fornecedores: fornecedores
        });
    },

    //Criar novo produto
    createProduct: async (req, res)=>{
        const { nome, valor, categoria, fornecedor, safra} = req.body;

        const avatar = req.files[0].originalname;
        const imagem = avatar.substring(0, avatar.indexOf('.'));
        
        const errors = validationResult(req);

        if(errors.isEmpty()){
            console.log(errors.mapped());
        };

        await Produto.create({ nome: nome, valor: valor, imagem: imagem, fornecedor_id: fornecedor, categoria: categoria, safra: safra});

        res.redirect('/admin/produtos/');
    },

    editProduct: async (req, res) => {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);
        const fornecedores = await Fornecedor.findAll();

        return res.render('editar', {
            produto: produto,
            fornecedores: fornecedores,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css']
        });
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const { nome, valor, fornecedor, categoria, safra } = req.body;
        
        const avatar = req.files[0].originalname;
        const imagem = avatar.substring(0, avatar.indexOf('.'));

        await Produto.update({
            nome: nome,
            valor: valor,
            imagem: imagem,
            fornecedor_id: fornecedor,
            categoria: categoria,
            safra: safra
        },
        {
            where: { id: id }
        }
        );

        res.redirect('/admin/produtos/')
    },

    //exibir a tela para mostrar o produto
    deleteProduct: async (req, res)=>{
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