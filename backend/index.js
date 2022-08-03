const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport');
const path=require('path');
const session=require('express-session');


const app=new express();

app.use(session({ secret: 'SECRET',resave:true,saveUninitialized:true }));

const userRouter=require('./routes/users');
const bookRouter=require('./routes/books');

const port=3000;

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',userRouter);
app.use('/books',bookRouter);

app.get('/',(req,res)=>{
    res.send('invalid end point')
});

const db=require('./config/database');

mongoose.connect(db.dburl);
mongoose.connection.on('connected',()=>{
    console.log('connected to '+db.dburl)
});
mongoose.connection.on('error',(err)=>{
    console.log('Error in connection')
});


app.listen(port,()=>{
    console.log("sever started on "+port)
});