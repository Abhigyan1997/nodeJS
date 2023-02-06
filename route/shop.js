const path=require('path');

const express=require('express');

const productController=require('../Controller/product');

const route=express.Router();

route.get('/',productController.addProduct);

module.exports=route;