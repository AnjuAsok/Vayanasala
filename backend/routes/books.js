const express=require('express');
const bookRouter=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

const Book=require('../models/book');


bookRouter.get('/',(req,res)=>{
    res.send('Book router')
});

bookRouter.post('/addbook',(req,res)=>{
    let newBook=new Book({
        title:req.body.title,
        auther:req.body.auther,
        about:req.body.about,
        image:req.body.image
    });
    const book=new Book(newBook);
    book.save();
    // Book.addBook(newBook,(err,book)=>{
    //     if(err)
    //     res.json({success:true,msg:'failed to register the user'});
    //     else
    //     res.json({success:false,msg:' Add the user'});
    // });

});

module.exports=bookRouter;
