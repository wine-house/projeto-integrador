var express = require('express');
var router = express.Router();
const produtosController =require('../controller/produtosController');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
//   // res.send(JSON.stringify(servicoModel));
// });

/*pagia HOME*/

router.get('/', function (req, res, next) {
  res.render('index',
    {
      css1: "/stylesheets/home.css",
      css2: "/stylesheets/menu-footer.css"
    })
});


/* pagina somos*/
router.get('/somos', function (req, res, next) {
  res.render('somos', {
    css1: "/stylesheets/somos.css", 
    css2: "/stylesheets/menu-footer.css",
  });
});

/* pagina eventos*/
router.get('/eventos', function (req, res, next) {
  res.render('eventos',
    {
      css1: "/stylesheets/menu-footer.css",
      css2: "/stylesheets/eventos.css"
    })
});

/* pagina LOGIN*/
router.get('/login', function (req, res, next) {
  res.render('login', {
    css1: "/stylesheets/menu-footer.css", css2: "/stylesheets/login.css",
  });
});

/* pagina Parceiros*/
router.get('/parceiros', function (req, res, next) {
  res.render('parceiros', {
    css1: "/stylesheets/parceiros.css", css2: "/stylesheets/menu-footer.css",
  });
});


/* pagina port-interno*/
router.get('/prod-interno', function (req, res, next) {
  res.render('prod-interno', {
    css1: "/stylesheets/menu-footer.css",
     css2: "/stylesheets/prod-interno.css",
  });
});

/* pagina cadastro-prod*/
router.get('/cadastro-prod', function (req, res, next) {
  res.render('cadastro-prod', {
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/cadastro-prod.css",
  });
});


/* pagina painel-usuario*/
router.get('/painel-usuario', function (req, res, next) {
  res.render('painel-usuario', {
    css1: "/stylesheets/painel-usuario.css",
    css2: "/stylesheets/menu-footer.css",
  });
});

/* pagina produtos*/
// router.get('/produtos', function (req, res, next) {
//   res.render('produtos', {
   
//   });
// });

router.get('/produtos', produtosController.index);


router.get('/carrinho', (req, res) => {
  res.render('carrinho');
});
module.exports = router;

