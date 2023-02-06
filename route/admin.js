const express=require('express');

 const path=require('path');
 
const productController=require('../Controller/product');

const route=express.Router();

route.get('/add-product',productController.getAddProduct);
route.post('/add-product',productController.postAddproduct);

module.exports=route; 