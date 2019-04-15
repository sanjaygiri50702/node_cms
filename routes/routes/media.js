var express = require('express');
var router = express.Router();
var Media = require('../../model/Medias')
router.get('/',(req,res,next)=>{
   Media.find({},(err,media)=>{
       if(err) throw err;
       res.json(media);
   }) 
});
router.get('/:id',(req,res,next)=>{
    Media.findById(req.params.id,(err,media)=>{
        if(err) throw err;
        if(!media) return res.json({err:'invalid id'})
        res.json(media)
    })
});
router.post('/',(req,res,next)=>{
    Media.create(req.body,(err,media)=>{
        if(err) throw err;
        res.json(media);
    })
});
router.delete('/:id',(req,res,next)=>{
    Media.findByIdAndDelete(req.params.id,(err,media)=>{
        if(err) throw err;
        res.json(media);
    })
});
router.put('/:id',(req,res,next)=>{
    Media.findByIdAndUpdate(req.params.id,req.body,(err,media)=>{
        if(err) throw err;
        res.json(media);
    })
});

module.exports = router;