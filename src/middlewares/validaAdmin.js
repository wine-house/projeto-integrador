
function usuarioAdmin (req, res, next) {
    if(!req.session.usuario || !req.session.usuario?.isAdmin) res.redirect('/cliente')
    next();
}

module.exports = usuarioAdmin;