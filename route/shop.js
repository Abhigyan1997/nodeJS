const express=require('express');

const route=express.Router();

route.get('/',(req,res,next)=>{
    res.send('<h1>Hello from Express JS!</h1>')
});


module.exports=route;