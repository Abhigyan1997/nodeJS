const express=require('express');

 const path=require('path');

 const productController=require('../Controller/product');
const route=express.Router();

route.get('/contact-us',productController.getContact);
route.post('/success', productController.postContact);
module.exports=route; 