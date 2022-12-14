const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User=require('../models/user');
const db=require('../config/database');

module.exports=function(passport){
    let opts={};
    //ExtractJwt.fromAuthHeaderWithScheme("jwt")
    opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme("jwt")
    //opts.jwtFromRequest=ExtractJwt.fromAuthHeader();
    opts.secretOrKey=db.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        User.getUserById(jwt_payload._id,(err,user=>{
            if(err){
                return done(err,false);
            }
            if(user){
                return done(null,user);
            }
            else
            {
                return done(null,false);
            }
        }))
    }))

}