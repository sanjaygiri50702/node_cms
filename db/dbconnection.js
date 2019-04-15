var mongoose = require('mongoose');
var dbUrl = require('../config/config')
mongoose.connect(dbUrl,{useNewUrlParser:true})
.then(()=>{
    console.log('db connection establish');
})
.catch((err)=>{
    console.log('db connection err',err)
})
module.exports = mongoose