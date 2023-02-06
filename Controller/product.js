const product=[];
const path=require('path');
exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join( __dirname ,'../','views','add-product.html'));
}

exports.postAddproduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.addProduct=(req,res,next) => {
    res.sendFile(path.join( __dirname ,'../','views','shop.html'));
}

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join( __dirname ,'../','views','contact.html'));
}
exports.postContact=(req, res) => {
    res.send('Form successfully filled');
  }

