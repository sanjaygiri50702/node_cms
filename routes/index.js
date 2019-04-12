var express = require('express');
var userRouter = require('./routes/user');
var postRouter = require('./routes/post');
var pageRouter = require('./routes/page')

var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/page',pageRouter);


module.exports = app;
