const userModel = require('../model/user.model');
const express = require('express');
const router = express.Router();  

const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');


const registerUser=async (req,res)=>{

   
    const { name, email, password,role='user'} = req.body;

   
    
    const alreadyUser = await userModel.findOne({
        $or: [{name}, 
            {email}]  // to check if the user already exists with the same name or email
    });

    if (alreadyUser) {
        return res.status(400).json({ message: 'User already exists' });
    }


    const passwordHash= await bcrypt.hash(password,10);
    const user=await userModel.create({
        name,
        email,
        password: passwordHash,
        role
    });

    const token=jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie('token',token);

    res.status(201).json({
        message:'User registered successfully',
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },

        token
    });
}

async function loginUser(req,res){
    const {name,email,password}=req.body;

    const user=await userModel.findOne({
        $or:[
            {name},
            {email}
        ]
    });

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    res.json({
        message: 'Login successful',
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        token
    });
}

async function logoutUser(req,res){
    res.clearCookie('token');
    res.json({message:'Logout successful'});
}
//actual industrial way is Token Blacklisting


module.exports = { registerUser, loginUser, logoutUser};
