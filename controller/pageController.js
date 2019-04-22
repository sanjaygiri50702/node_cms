const Page = require('../model/Pages');
class pageController{
    async createPage(req,res,next){
        var userId = '5cbdc0790b56ef5ccbd58bdf';
        var pageObj={
            title:req.body.title,
            description:req.body.description,
            user:userId
        }
        Page.create(pageObj,(err,page)=>{
            if(err) throw err;
            res.json(page)
        })
    }
    getPageAll(req,res,next){
        var userId = '5cbdc0790b56ef5ccbd58bdf';
        Page.find({user:userId},(err,page)=>{
            if(err) throw err;
            res.json(page)
        })

    }
    getPageById(req,res,next){
        var userId = '5cbdc0790b56ef5ccbd58bdf';
        var pageId = req.params.pageId;
        Page.find({_id:pageId,user:userId},(err,page)=>{
            if(err) throw err;
            res.json(page)
        })
    }
    deletePage(req,res,next){
        var pageId = req.params.pageId;
        Page.findByIdAndDelete(pageId,(err,page)=>{
            if(err) throw err;
            if(!page) return res.json({error:'page not found or already deleted'})
            res.json(page);
        })
    }
    updatePage(req,res,next){
        var pageId = req.params.pageId;
        console.log(pageId)
        Page.findByIdAndUpdate(pageId,req.body,(err,page)=>{
            if(err) throw err;
            res.json(page)
        })
    }
}
module.exports = new pageController;