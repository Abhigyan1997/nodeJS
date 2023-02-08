const rootDir=require('../util/path')
const Product=require('../models/products')
const path=require('path');


exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join( rootDir,'views','add-product.html'));
}

exports.postAddproduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    console.log(req.body);
    res.redirect('/');
}

exports.addProduct=(req,res,next) => {
   Product.fetchAll(product=>{
    res.sendFile(path.join( rootDir,'views','shop.html'));
   });
    
}

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
}
exports.postContact=(req, res) => {
    res.send('Form successfully filled');
  }

