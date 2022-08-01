const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const db=require('../config/database');

const BookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
});

const Book=mongoose.model('Book',BookSchema);
module.exports=Book;

module.exports.addBook=function(newBook,callback){
            
            Book.save(callback);
       
}