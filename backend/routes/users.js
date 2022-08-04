const express=require('express');
const userRouter=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

const User=require('../models/user');
const db=require('../config/database');

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
        res.json({success:false,msg:'failed to register the user'});
        else
        res.json({success:true,msg:' Add the user'});
    });
});
userRouter.post('/authenticate',(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.getUserByEmail(email,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false,msg:'user not found'})
        }
        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token=jwt.sign(user.toJSON(),db.secret,{expiresIn:604800});//1 week
                res.json({
                    success:true,
                    token:'jwt'+token,
                    user:{
                        id:user._id,
                        name:user.name,
                        email:user.email
                    }
                });
            }
            else{
                return res.json({success:false,msg:'wrong password'});
            }
        });
    });
});
function verifyToken(req,res,next){
    if(!req.headers.autherization){
        return res.status(401).send('unautherised request ');
    }
 let token=req.headers.autherization.split('')[1];
 if(token==null){
    return res.status(401).send('unautherised request ');
 }
 let payload=jwt.verify(token,'secretkey')
 console.log(payload);
 if(!payload){
    return res.status(401).send('unautherised request ');
 }
 req.userId=payload.suject;
 next();
}

module.exports=userRouter;