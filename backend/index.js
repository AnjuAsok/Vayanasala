const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('body-parser');
const path=require('path');

const app=new express();

const port=3000;

const userRouter=require('./routes/users');
const bookRouter=require('./routes/books');

const db=require('./config/database');

mongoose.connect(db.dburl);
mongoose.connection.on('connected',()=>{
    console.log('connected to '+db.dburl)
});
mongoose.connection.on('error',(err)=>{
    console.log('Error in connection')
});



app.use(cors());
app.use(bodyparser.json());

app.use('/users',userRouter);
app.use('/books',bookRouter);

app.get('/',(req,res)=>{
    res.send('invalid end point')
});

app.listen(port,()=>{
    console.log("sever started on "+port)
});