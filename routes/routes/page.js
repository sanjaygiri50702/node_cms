var express = require('express');
var router = express.Router();
var Page = require('../../model/Pages')
var upload = require('../../config/multer')
router.get('/',(req,res,next)=>{
   Page.find({},(err,page)=>{
       if(err) throw err;
       res.json(page);
   }) 
});
router.get('/:id',(req,res,next)=>{
    Page.findById(req.params.id,(err,page)=>{
        if(err) throw err;
        if(!page) return res.json({err:'invalid id'})
        res.json(page)
    })
});
router.post('/',(req,res,next)=>{
    Page.create(req.body,(err,page)=>{
        if(err) throw err;
        res.json(page);
    })
});
router.delete('/:id',(req,res,next)=>{
    Page.findByIdAndDelete(req.params.id,(err,page)=>{
        if(err) throw err;
        res.json(page);
    })
});
router.put('/:id',(req,res,next)=>{
    Page.findByIdAndUpdate(req.params.id,req.body,(err,page)=>{
        if(err) throw err;
        res.json(page);
    })
});

module.exports = router;