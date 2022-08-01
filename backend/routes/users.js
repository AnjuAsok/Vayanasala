const express=require('express');
const userRouter=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

const User=require('../models/user');

userRouter.get('/',(req,res)=>{
    res.send('User get ')
});

userRouter.post('/adduser',(req,res,next)=>{
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    User.addUser(newUser,(err,user)=>{
        if(err)
        res.json({success:true,msg:'failed to register the user'});
        else
        res.json({success:false,msg:' Add the user'});
    });
});


module.exports=userRouter;