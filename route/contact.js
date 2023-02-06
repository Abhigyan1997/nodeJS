const express=require('express');

 const path=require('path');

const route=express.Router();

route.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join( __dirname ,'../','views','contact.html'));
});
route.post('/success', (req, res) => {
    res.send('Form successfully filled');
  });
module.exports=route; 