const path=require('path');

const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

const adminRoute=require('./route/admin');

const shopRoute=require('./route/shop');

const contactRoute=require('./route/contact');

app.use(adminRoute);
app.use(contactRoute);
app.use(shopRoute);

app.use("/",(req , res , next)=>{
    res.status(404).send("<h1>Page not found</h1>");
});
   
app.listen(9000);
  