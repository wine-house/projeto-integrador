const { Produto, Fornecedor, Categoria } = require('../models');
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
                include: ["fornecedor", 'categoria']
            });

            return res.render('adminListar', {
                produtos: produtos,
                css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
            });
        } 
        catch (error){
            console.log(error);
            res.status(500).send('Erro ao exibir a tela painel administrativo.');
        };
    },
    
    //exibir tela de criação
    viewForm: async (req, res)=>{
        try
        {
            const fornecedores = await Fornecedor.findAll();
            const categorias = await Categoria.findAll();
            
            res.render('cadastrar', {
                css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css'],
                fornecedores: fornecedores,
                categorias: categorias
            });
        } catch (error){
            console.log(error);
            res.status(500).send('Erro ao exibir a tela cadastro do produto.');
        };
    },

    //Criar novo produto
    createProduct: async (req, res)=>{
        try
        {
            const { nome, valor, fornecedor, safra, categoria } = req.body;

            const avatar = req.files[0].originalname;
            
            const imagem = avatar.substring(0, avatar.indexOf('.'));

            console.log(fornecedor, categoria);
            
        
            const errors = validationResult(req);

            if(errors.isEmpty()){
                console.log(errors.mapped());
            };

            await Produto.create({ nome: nome, valor: valor, imagem: imagem, fornecedor_id: fornecedor, categoria_id: categoria, safra: safra});

            res.redirect('/admin/produtos/');
        } 
        catch (error) {
            console.log(error);
            res.status(500).send('Erro ao criar o produto.');
        };
    },

    editProduct: async (req, res) => {
       try 
       {

        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        const fornecedores = await Fornecedor.findAll();
        const categorias = await Categoria.findAll();

        return res.render('editar', {
            produto: produto,
            fornecedores: fornecedores,
            categorias: categorias,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css']
        });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Erro ao editar o produto.');
        };
    },

    updateProduct: async (req, res) => {
        try
        {
            const { id } = req.params;
            const { nome, valor, fornecedor, categoria, safra } = req.body;
        
            const avatar = req.files[0]?.originalname;
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
            console.log(error);
            res.status(500).send('Erro ao atualizar o produto.');
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
            console.log(error);
            res.status(500).send('Erro ao deletar o produto.');
        }
    },

    exibirCategorias: async (req, res) => {
        try
        {
            const { search } = req.query;

            const categorias = await Categoria.findAll({ 
                where: search ? {
                    nome: {
                        [Op.like]: `%${search}%`
                    }} : null,
            });
            console.log(categorias)
            return res.render('adminCategorias', {
                categorias: categorias,
                css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
            });
        } 
        catch (error){
            console.log(error);
            res.status(500).send('Erro ao filtrar a categoria.');
        };
    },
    
    //exibir tela de criação de categoria
    viewFormCategoria: async (req, res)=>{
        try
        {
            const fornecedores = await Fornecedor.findAll();

            res.render('cadastrarCategorias', {
                css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css'],
                fornecedores: fornecedores
            });
        } catch (error){
            console.log(error);
            res.status(500).send('Erro ao exibir o formulário para criar categoria.');
        };
    },
    //Edita a categoria
    updateCategoria: async (req, res) => {
        try
        {
            const { id } = req.params;
            const { nome } = req.body;
    
            await Categoria.update({
                nome: nome,
            },
            {
                where: { id: id }
            });
            res.redirect('/admin/produtos/categorias/editar/');
        } catch (error){
            console.log(error);
            res.status(500).send('Erro ao atualizar o produto.');
        }
    },
     //Criar nova categoria
     createCategoria: async (req, res)=>{
        try
        {
            const { nome } = req.body;

            console.log(categoria);
            
            const errors = validationResult(req);

            if(errors.isEmpty()){
                console.log(errors.mapped());
            };

            await Categoria.create({ nome: nome});

            res.redirect('/admin/produtos/categorias');
        } 
        catch (error) {
            console.log(error);
            res.status(500).send('Erro ao criar o produto.');
        };
    },

    // Visualiza a categoria
    editCategoria: async (req, res) => {
        try 
        {
 
         const { id } = req.params;
         const categoria = await Categoria.findByPk(id);
 
         return res.render('editarCategorias', {
             categoria,
             css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css','/stylesheets/cadastrar.css']
         });
         }
         catch (error) {
             console.log(error);
             res.status(500).send('Erro ao editar o produto.');
         };
     },

    
}

module.exports = AdminController;