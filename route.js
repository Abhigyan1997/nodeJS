const fs=require('fs');

const requestHandler=(req , res)=>{
    const url=req.url;
    const method=req.method;
    const body=[];
    if(url==='/') {
        
        fs.readFile("message.text",{encoding:"utf-8"},(err,data)=>{
            if (err){
                console.log(err);
            }
            console.log(`data from file` +data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}</body>`)
            res.write(`<body><form action="message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)  ;
            res.write('</html>');
            return res.end();
        })
       
         }else if(url==="/message" && method==="POST"){
        
        req.on('data',(chunk)=>{
            console.log(chunk);
        body.push(chunk);
            });
          return req.on('end',()=>{
              const parsedBody=Buffer.concat(body).toString();
              const message=parsedBody.split('=')[1];
              fs.writeFile('message.text', message,(err)=>{
                if (err){
                    console.log(err);
                }
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
              });
            })
        
       
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from Node JS server</h1></body>')
        res.write('</html>');
        res.end();
    }
}
module.exports={
    handler:requestHandler,
    someText:'Some Hard code Text'
}
