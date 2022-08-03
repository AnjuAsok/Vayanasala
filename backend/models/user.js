const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const db=require('../config/database');
const userRouter = require('../routes/users');

const UserSchema=mongoose.Schema({
    'name':{
        type:String,
    },
    'email':{
        type:String,
        required:true
    },
    'password':{
        type:String,
        required:true
    }
});

//const User=module.exports=mongoose.model('User',UserSchema);

const User=mongoose.model('User',UserSchema);
module.exports=User;

module.exports.getUserById=function(name,callback){
    User.findById(id,callback);
}

module.exports.getUserByName=function(name,callback){
    const query={name:name}
    User.findOne(query,callback);
}

module.exports.getUserByEmail=function(email,callback){
    const query={email:email}
    User.findOne(query,callback);
}

module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}
module.exports.comparePassword=function(candidatepassword,hash,callback){
    bcrypt.compare(candidatepassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch)
    });
}

