var express = require('express');
var router = express.Router();
var isAdmin = require('../auth')
var Post = require('../../model/Posts')
var User = require('../../model/Users') //get all the post
var Media = require('../../model/Medias')
var upload = require('../../config/multer')

router.get('/',(req,res,next)=>{
    Post.find({}).populate('user').exec((err,post)=>{
        if(err) console.log(err);
        res.json(post);
    })
});
router.get('/:id',(req,res,next)=>{
    if(!req.headers.id){
        return res.status(401).json({'error':' id not found'})
    }
    Post.findById(req.params.id,(err,post)=>{
        if(err) return res.json(err);
        res.json(post)
    })
})
//create post
router.post('/',upload.single('image'),(req,res,next)=>{
    // return res.json(req.file);
    User.findById(req.headers.id,(err,user)=>{
        var post = req.body;
        if(err) return res.json(err)
        if(!user)return res.status.apply(401).json({'err':'user not authorize'})
        if(req.file){    
            console.log('body',req.body) 
            Media.create({image:req.file.filename},(err,media)=>{
                if(err) throw err;
                console.log('media',media)
                Post.create({...post,media:media},(err,post)=>{
                    if(err) throw err;
                    res.json(post)
                })
            }) 
        }
        else{
        Post.create({...req.body,user:user},(err,post)=>{
            if(err) return console.log(err);
            res.json(post)
            })
        }
    })
});
router.delete('/:id',(req,res,next)=>{
    Post.findByIdAndDelete(req.params.id,(err,post)=>{
        if(err) throw err;
        if(!post) return res.json({'err':'invalid post'})
        res.json({...post._doc,'message':'sucessfully deleted'})
    })
})

router.put('/:id',(req,res,next)=>{
    Post.findByIdAndUpdate({_id:req.params.id},req.body,(err,post)=>{
        if(err) throw err;
        if(!post) return res.json({'err':'post not found'})
        res.json(post)
    })
})

module.exports = router;