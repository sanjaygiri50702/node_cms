var express = require('express');
var router = express.Router();
var Post = require('../../model/Posts')
//get all the post
router.get('/',(req,res,next)=>{
    Post.find({},(err,post)=>{
        if(err) console.log(err);
        res.json(post);
    })
});
//create post
router.post('/',(req,res,next)=>{
    Post.create(req.body,(err,post)=>{
        if(err) return console.log(err);
        res.json(post)
    })
})
module.exports = router;