const produtos = require("../database/produtos.json");


module.exports = {
    index: (req, res) => {
        return res.render("adminListar", {
            produtos,
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/adminListar.css",
        })
    },
    
    //exibir tela de criação
    create:(req, res)=>{
        res.render('cadastro-prod', { produto:null,
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/adminListar.css",
        });
    },

    //Criar novo produto
    store:(req, res)=>{
        //virá a lógica
        res.redirect("/admin/produto");
    },

    edit: (req, res) => {
        const { id } = req.params;
        var produto = produtos.filter((prod) => prod.id == id);
        produto = produto[0]
        var arrayImg = produto.imagem;
        var img = arrayImg[0]
        produto.imagem = img
       return res.render('cadastro-prod', {
            produto,
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/cadastro-prod.css",
        });
    },

    update:(req, res)=>{
        //logica para atualizar
        res.redirect("/admin/produto")
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
            css1: "/stylesheets/menu-footer.css",
            css2: "/stylesheets/cadastro-prod.css",
        });
    },

    //apagar o item do banco
    destroy:(req, res)=>{
        const { id } = req.params;
        var produto = produtos.filter((prod) => prod.id != id);
        const stringifyData = JSON.stringify(produto);
        fs.writeFileSync('produtos.json', stringifyData)

        //depois que implentar faz redirect
        res.redirect("/admin/produto");
    },
}
