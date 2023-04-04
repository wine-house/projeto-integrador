
function usuarioLogado (req, res, next) {
    if(!req.session.usuario) res.redirect('/cliente')
    next();
}

module.exports = usuarioLogado;