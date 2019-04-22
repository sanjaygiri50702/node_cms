const express = require('express');
var Post = require('../model/Posts');
var Page = require('../model/Pages')
var Media = require('../model/Medias');

class Postcontroller{
    async createPost(req,res,next){
        var pageId = req.params.pageId;
        var userId = '5cbdc0790b56ef5ccbd58bdf';
        var mediaId = null;
        if(req.file){
            console.log('file',req.file)
            const media = await Media.create({image:req.file.filename})
            mediaId = media._id;
        }    
        var postObj={
            title:req.body.title,
            description:req.body.description,
            media:mediaId,
            user:userId,
            page:pageId,
    
        }
        const post = await Post.create(postObj)
        const page = await Page.findById(pageId);
        page.post.push(post)
        page.save(function(err,result){
            res.json({result,post})
        })
    }
    async getPostByPage(req,res,next){
        var pageId = req.params.pageId;
        var page = await Page.findById(pageId).populate('post')
        res.json(page)
    }
    getPostAll(req,res,next){
        // var userId = req.session.passport.user
        var userId = '5cbdc0790b56ef5ccbd58bdf';
        Post.find({user:userId},(err,post)=>{
            if(err) throw err;
            res.json(post)
        })
    }
    deletePost(req,res,next){
        var postId = req.params.postId;
        Post.findByIdAndDelete(postId,(err,post)=>{
            if(err) throw err;
            if(!post) return res.json({error:'post not found or already deleted'})
            res.json(post);
        })
    }
    updatePost(req,res,next){
        var postId = req.params.postId;
        console.log(postId)
        Post.findByIdAndUpdate(postId,req.body,(err,post)=>{
            if(err) throw err;
            res.json(post)
        })
    }

}
module.exports= new Postcontroller 