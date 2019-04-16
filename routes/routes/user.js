var express = require('express');
var router = express.Router();
var User = require('../../model/Users');
var passport = require('./passport');
var {isLoggedIn} = require('../auth')
//get all the user


router.get('/',(req,res,next)=>{
    User.find({},(err,user)=>{
        if(err) return console.log(err);
        res.json(user);
    })
});


router.get('/test',isLoggedIn,(req,res,next)=>{
    console.log('You are logged in' )
    res.send('test')
})
router.get('/:id',(req,res,next)=>{
    console.log(req.headers)
    User.findById(req.params.id,(err,user)=>{
        if(err) return res.json(err);
        user.password = '';
        res.json(user)
    })
})
//logout user
router.get('/logout',(req,res,next)=>{
    req.logOut();
    res.send('logout')

})

//create new user
router.post('/register',(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return console.log(err);
        res.json(user);
    })
})
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',function(err,user,info){
        if(err) return next(err);
        if(!user) return res.status(401).json(info);
        else{
            req.logIn(user,(err)=>{
                if(err) throw err;
                console.log("Request Login  successful.");
                user.password='';
                res.set('id',user._id).json(user)
            })
        }
    })(req,res,next);
})
module.exports = router;