const asyncHandler = require("express-async-handler");
const Post = require("../model/Post");

//Create Post 
const createPost = asyncHandler( async(req,res) =>{
    const {title, content, tags} = req.body;
    if(!title || !content){
        return res.status(400).json({
            message:"All feilds are required"
        })
    }
    const post = await Post.create({
        title,
        content,
        tags
    })
    res.status(201).json({
        message:"Post Create sucessfully"
    })
})

// Update Post 
const updatePost = asyncHandler( async (req,res) =>{
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
    );
    if(!post){
        return res.status(404).json({
            message:"Post not found"
        })
    }
    res.status(201).json({
        message:"Post updated"
    })
})

//Read all the posts

const readPosts = asyncHandler( async(req,res) =>{
    const posts = await Post.find();
    if(!posts){
        return res.status(404).json({
            message:"No post found"
        })
    }
    res.status(201).json(posts);
})

//Read the post 

const readPost = asyncHandler( async(req,res) =>{
    const post = await Post.findById(req.params.id);
    if(!post){
        return res.status(404).json({
            message:"Post not found"
        })
    }
    res.status(200).json(post);
})

// Delete the post 

const deletePost = asyncHandler( async(req,res) =>{
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(404);
        throw new Error("Post not found");
    }
    await Post.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message:"Post file deleted"
    });
})

module.exports = {createPost, updatePost, readPosts, readPost, deletePost};