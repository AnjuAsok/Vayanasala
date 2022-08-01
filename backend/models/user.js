const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const db=require('../config/database');

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

module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}

