const path=require('path');


const db=require('./util/database');

const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

db.execute('SELECT*FROM product')
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
});

const errorController=require('./Controller/error404');

const adminRoute=require('./route/admin');

const shopRoute=require('./route/shop');

const contactRoute=require('./route/contact');



app.use(adminRoute);
app.use(contactRoute);
app.use(shopRoute);

app.use(errorController.errorPage)
   
app.listen(1000);
  