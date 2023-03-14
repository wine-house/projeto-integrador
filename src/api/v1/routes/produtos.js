const router = require('express').Router();
const { getWines, getWine } = require('../controller/ProdutosController');

// /api/wines GET ALL WINES
router.get('/wines', getWines);

// /api/wines/{id} GET 1 WINE
router.get('/wines/:id', getWine);

module.exports = router;