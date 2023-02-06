const path=require('path');

const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

const errorController=require('./Controller/error404')

const adminRoute=require('./route/admin');

const shopRoute=require('./route/shop');

const contactRoute=require('./route/contact');



app.use(adminRoute);
app.use(contactRoute);
app.use(shopRoute);

app.use(errorController.errorPage)
   
app.listen(9000);
  