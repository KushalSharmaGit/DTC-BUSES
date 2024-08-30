const asyncHandler = require("express-async-handler");
const User = require('../model/User');
const {hashPassword} = require("../utils/helpers")

const createUser =asyncHandler ( async (req , res) =>{
    let { name, email, password, type}= req.body;
    if(!name || !email || !password || !type){
        return res.status(400).json({
            message: "All feilds are required"
        })
    }
    const check = await User.findOne({email});
    if(check){
        return res.status(400).json({
            message: "User already registered"
        })
    }
    password = hashPassword(password);
    const user = await User.create({
        name,
        email,
        password,
        type
    })
    res.status(201).json(user,{
        message:"Account Created"
    });
});

const logoutUser = (req, res) =>{
    req.logout(()=>{
        res.status(200).json({
            message:"User logged out sucesfully"
        })
    });

}

const currentUser = (req,res) =>{
    if(!req.user){
        return res.status(401).json({
            message: "Kindly Log in"
        })
    }
    res.status(200).send(req.user);
}

module.exports = {createUser, logoutUser, currentUser};