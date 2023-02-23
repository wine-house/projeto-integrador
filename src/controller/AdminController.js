const { Produtos } = require('../../models');
const { validationResult } = require('express-validator');

let AdminController = {
    index: async (req, res) => {
        // controller comunicando com o model
        const produtos = await Produtos.findAll();
        console.log(produtos)
        res.render('produtos', { produtos })
        return res.render('adminListar', {
            produtos,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
        })
    },
    
    //exibir tela de criação
    viewForm:(req, res)=>{
        res.render('cadastrar', { produto:null,
            css: ['/stylesheets/menu-footer.css','/stylesheets/adminListar.css']
        });
    },

    //Criar novo produto
    salvarForm:(req, res)=>{
        let { nome } = req.body;
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return console.log(errors.mapped())
        } 

        if(!req.file) {
            return res.send('Você deve enviar uma imagem.')
        }

        res.send('O produto ' + nome + ' foi cadastrado com sucesso!');
        res.redirect('/admin/produtos');
        
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
    delete:(req, res)=>{
        const { id } = req.params;
        var produto = produtos.filter((prod) => prod.id == id);
        produto = produto[0]
        var arrayImg = produto.imagem;
        var img = arrayImg[0]
        produto.imagem = img
       return res.render('deletar-prod', {
            produto, 
            css: ['/stylesheets/menu-footer.css','/stylesheets/cadastrar.css']
        });
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