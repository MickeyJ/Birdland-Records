const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/index');
const api = require('./routes/api');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('jsx', require('express-react-views').createEngine({ beautify: true}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api', api);

app.use( (req, res, next) =>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if(app.get('env') === 'development') {
  app.use((err, req, res, next) =>{
    res.status(err.status || 500);
  console.error(err);
  res.render('error', {
    message: err.message,
    error: err
  });
});
}

app.use( (err, req, res, next) =>{
  res.status(err.status || 500);
console.error(err);
res.render('error', {
  message: err.message,
  error: {}
});
});

module.exports = app;