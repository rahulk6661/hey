const http=require('http');

const server=http.createServer((req,res)=>
{
    if(req.url==='/home')
    {
        
        res.end("Welcome home")
    }
    else if(req.url==='/about')
    {
        
        res.end("Welcome to About Us page");
    }
    else  if(req.url==='Welcome to my Node Js project')
    {
        console.log("you are at contact page");
        res.end("you are at contact page");
    }
    
});

server.listen(4000,'127.0.0.1',()=>
{
    console.log("server is running")
});
