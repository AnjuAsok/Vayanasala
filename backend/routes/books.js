const express=require('express');
const bookRouter=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

const Book=require('../models/book');


bookRouter.get('/',(req,res)=>{
    Book.find().then(function(books){
        res.send(books);
    });

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
});
bookRouter.delete('/delete/:id',(req,res)=>{
    id = req.params.id;
    Book.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
})
module.exports=bookRouter;

    bookRouter.put('/update/:id',(req,res,next)=>{
    console.log(req.body);
    id=req.body._id,
    title=req.body.title,
    auther=req.body.auther,
    about=req.body.about,
    image=req.body.image

    Book.findByIdAndUpdate({"_id":id},
    {$set:{"title":title,
            "auther":auther,
            "about":about,
            "image":image
    }}).then(function()
    {
        console.log('success');
        res.send();
    })

});

    //  Book.findById(req.body.id,(error,title)=>{
    //     if(err)
    //      res.status(500).json({msg:err})
    //      Book.title=res.body.title;
    //      Book.auther=res.body.auther;
    //      Book.about=res.body.about;
    //      Book.image=res.body.image;
    //      Book.save()});
    //  });//(err,book)=>{
    //         if(err)
    //         res.status(500).json({msg:err})
    //         else
    //         res.status(200).json({msg:Book})
    //     })
   // })



// bookRouter.delete('/delete/:id',(req,res)=>{
// id=req.params.id;
// Book.findByIdAndDelete({"_id":id}).then(()=>{
//     console.log('Success');
//     res.send();
// })
// })
    
// app.delete('/remove/:id',(req,res)=>{
   
//     id = req.params.id;
//     ProductData.findByIdAndDelete({"_id":id})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })


