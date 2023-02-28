const { Produto } = require('../models');
const { validationResult } = require('express-validator');

let AdminController = {
    index: async (req, res) => {
        // controller comunicando com o model
        const produtos = await Produto.findAll();
        console.log(produtos);
        return res.render('adminListar', {
            produtos: produtos,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
        });
    },
    
    //exibir tela de criação
    viewForm: async (req, res)=>{
        const produtos = await Produto.findAll();

        res.render('cadastrar', { produtos: produtos,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
        });
    },

    //Criar novo produto
    createProduct: async (req, res)=>{
        const { nome, preco, categoria } = req.body;
        console.log(categoria);
        const errors = validationResult(req);

        if(errors.isEmpty()){
            return console.log(errors.mapped())
        } 

        if(!req.file) {
            return res.send('Você deve enviar uma imagem.')
        }

        await Produto.create({ nome: nome, preco: preco, categoria: categoria});

        res.redirect('/admin/');
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
        await Produto.destroy(
            { where:  id }
        );
        // var produto = produtos.filter((prod) => prod.id == id);
        // produto = produto[0]
        // var arrayImg = produto.imagem;
        // var img = arrayImg[0]
        // produto.imagem = img
    //    return res.render('deletar-prod', {
    //         css: ['/stylesheets/menu-footer.css','/stylesheets/cadastrar.css']
    //     });
    res.redirect('/admin/produtos')
    },

    //apagar o item do banco
    destroy:(req, res)=>{
        const { id } = req.params;
        var produto = produtos.filter((prod) => prod.id != id);
        const stringifyData = JSON.stringify(produto);
        fs.writeFileSync('produtos.json', stringifyData)

        //depois que implentar faz redirect
        res.redirect('/admin/produtos');
    },
}

module.exports = AdminController;