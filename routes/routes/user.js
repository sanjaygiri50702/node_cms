var express = require('express');
var router = express.Router();
var User = require('../../model/Users');
//get all the user
router.get('/',(req,res,next)=>{
    User.find({},(err,user)=>{
        if(err) return console.log(err);
        res.json(user);
    })
});
//create new user
router.post('/register',(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return console.log(err);
        res.json(user);
    })
})
module.exports = router;