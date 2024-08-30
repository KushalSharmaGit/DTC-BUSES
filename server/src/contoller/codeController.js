const asyncHandler = require("express-async-handler");
const CodeFile = require("../model/CodeFile");
const User = require("../model/User");

// Create code files without content 

const createCodeFile =asyncHandler ( async (req , res) =>{
    const {FileName, language} = req.body;
    const UserId= req.user.id
    const Access ={
        "Access": [UserId]
    }
    if(!FileName || !language){
        return res.status(400).json({
            message: "All feilds are required"
        })
    }
    const codeFile = await CodeFile.create({
        FileName,
        language,
        UserId,
        Access: [UserId]
    })
    res.status(201).json(codeFile);
});

// Update code file 

const updateCodeFile = asyncHandler( async (req,res) =>{
    const codeFile = await CodeFile.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true},
    )
    if(!codeFile){
        return res.status(404).json({
            message:"Code file not found"
        })
    }
    return res.status(202).json({
        message:"File updated"
    })
})

//Save the content in the codeFile

const saveContent = asyncHandler(async (req, res) =>{
    const {content} = req.body;
    if(!content){
        return res.status(400).json({
            message:"No content to save"
        })
    }
    const code = await CodeFile.findById(req.params.id)
    const Access = code.Access;
    if(!Access.includes(req.user.id)){
        return res.status(401).json({
            message:"You are not autherized to make changes"
        })
    }
    const codeFile = await CodeFile.findByIdAndUpdate(req.params.id, 
        req.body,
        { new: true },
    )
    res.status(201).json(codeFile)
})

//Give access to others of codeFile
const giveAccess = asyncHandler(async (req,res)=>{
    const {email} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }
    const codeFile= await CodeFile.findByIdAndUpdate(req.params.id,
        { $addToSet: { Access: user._id } },
        { new: true } 
    )
    if(!codeFile){
        return res.status(404).json({
            message:"No Code file found"
        })
    }
    res.status(200).json(codeFile)
})

// Remove the access from the code file 

const removeAccess = asyncHandler( async (req, res) =>{
    let codeFile = await CodeFile.findById(req.params.id);
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    if(codeFile.UserId != req.user.id){
        return res.status(401).json({
            message: "Only creater can remove access "
        })
    }
    codeFile = await CodeFile.findByIdAndUpdate(req.params.id,
        { $pull: { Access: user._id } },
        { new: true }
    )
    if(!codeFile){
        return res.status(404).json({
            message: "Code File not found"
        })
    }
    res.status(201).json({
        message: "Access removed sucessfully"
    })
})

//Get the code file of the user 

const getCodeFiles= asyncHandler(async (req,res)=>{
    const userId= req.user.id
    const codeFiles= await CodeFile.find({UserId: userId});
    if(!codeFiles){
        return res.status(204).json({
            message:"No code file present"
        })
    }
    res.status(200).json(codeFiles)
})

// Get the particular code file

const getCodeFile = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const codeFile = await CodeFile.findById(id);
    if(!codeFile){
        return res.status(404).json({
            message: "Code file not fouond"
        })
    }
    res.status(200).json(codeFile);
})

// Deleting a code file 

const deleteCodeFile = asyncHandler( async(req,res)=>{
    const codeFile = await CodeFile.findById(req.params.id);
    if(!codeFile){
        res.status(404);
        throw new Error("File not found");
    }
    await CodeFile.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message:"Code file deleted"
    });
})

module.exports = {createCodeFile, saveContent, giveAccess, getCodeFiles, getCodeFile, deleteCodeFile, removeAccess, updateCodeFile};