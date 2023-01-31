const express=require('express');

const route=express.Router();

route.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><button type="submit">Add Product</button></input></form>');
});
route.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin');
});

module.exports=route; 