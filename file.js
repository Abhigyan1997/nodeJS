
const express=require('express');
const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><button type="submit">Add Product</button></input></form>');
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    console.log('I am another Middleware');
    res.send('<h1>Hello from Express JS!</h1>')
});

app.listen(5000);