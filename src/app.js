const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const indexRouter = require('./routes/index');
const clienteRouter = require('./routes/cliente');
const adminRouter = require('./routes/admin');
const produtosRouter = require('./routes/produto');
const apiProdutosRouter = require('./api/v1/routes/produtos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret: "hiyou", resave: true, saveUninitialized: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/api', apiProdutosRouter);
app.use('/cliente', clienteRouter);
app.use('/produtos', produtosRouter);
app.use('/admin/produtos', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  
  // render the error page
  res.status(err.status || 500);
  res.render('error',{
    css1: "/stylesheets/menu-footer.css",
    css2: "/stylesheets/adminListar.css"
  });
});

module.exports = app;
