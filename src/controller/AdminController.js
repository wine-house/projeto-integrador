const { Produto, Fornecedor } = require('../models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const AdminController = {
    index: async (req, res) => {
        try
        {
            const { search } = req.query;

            const produtos = await Produto.findAll({ 
                where: search ? {
                    nome: {
                        [Op.like]: `%${search}%`
                    }} : null,
                include: ["fornecedor"]
            });

            return res.render('adminListar', {
                produtos: produtos,
                css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
            });
        } 
        catch (error){
            return res.status(500).json({
                mensagem: error,
                status: 500
            });
        };
    },
    
    //exibir tela de criação
    viewForm: async (req, res)=>{
        try
        {
            const fornecedores = await Fornecedor.findAll();

            res.render('cadastrar', {
                css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css'],
                fornecedores: fornecedores
            });
        } catch (error){
            return res.status(500).json({
                mensagem: "Não foi possível carregar essa página, tente novamente"
            })
        };
    },

    //Criar novo produto
    createProduct: async (req, res)=>{
        try
        {
            const { nome, valor, categoria, fornecedor, safra } = req.body;

            const avatar = req.files[0].originalname;
            console.log(avatar);
            const imagem = avatar.substring(0, avatar.indexOf('.'));
            console.log(imagem);
        
            const errors = validationResult(req);

            if(errors.isEmpty()){
                console.log(errors.mapped());
            };

            await Produto.create({ nome: nome, valor: valor, imagem: imagem, fornecedores_id: fornecedor, categoria: categoria, safra: safra});

            res.redirect('/admin/produtos/');
        } 
        catch (error) {
            return res.status(500).json({
                mensagem: "Não foi póssivel criar um usuário",
                data: error
            });
        };
    },

    editProduct: async (req, res) => {
       try 
       {

        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        const fornecedores = await Fornecedor.findAll();

        return res.render('editar', {
            produto: produto,
            fornecedores: fornecedores,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css']
        });
        }
        catch (error) {
            return res.status(500).json({
                data: error
            });
        };
    },

    updateProduct: async (req, res) => {
        try
        {
            const { id } = req.params;
            const { nome, valor, fornecedor, categoria, safra } = req.body;
        
            const avatar = req.files[0].originalname;
            const imagem = avatar.substring(0, avatar.indexOf('.'));


            await Produto.update({
                nome: nome,
                valor: valor,
                imagem: imagem,
                fornecedores_id: fornecedor,
                categoria: categoria,
                safra: safra
            },
            {
                where: { id: id }
            });
            res.redirect('/admin/produtos/');
        } catch (error){
            return res.status(500).json({
                data: error
            });
        }
    },

    deleteProduct: async (req, res)=>{
        try
        {    
            const { id } = req.params;
            await Produto.destroy({
                where: {
                    id: id
                }
            });
            
            res.redirect('/admin/produtos');
        } catch (error){
            return res.status(500).json({
                data: error
            });
        }
    },

    
}

module.exports = AdminController;