var fs=require('fs');
const http=require('http');

const app=http.createServer();
//old method here first we download data then show
/*app.on("request",(req,res)=>
{
fs.readFile('/home/rahul/Desktop/nodejs/firstpracticse/foldercreate/stream/input.txt','utf-8',(err,data)=>{
if (err) return console.error(err);
res.end(data);
});
});

app.listen(3500,'127.0.0.1',()=>
{
console.log("server start");
});*/
//here we write bunch of code

/*app.on("request",(req,res)=>{
    const readstream=fs.createReadStream("/home/rahul/Desktop/nodejs/firstpracticse/foldercreate/stream/input.txt");
    readstream.on("data",(chunkdata)=>
    {
        res.write(chunkdata);
    })
    readstream.on('end',()=>
    {
        res.end();
    })
});
app.listen(3500,'127.0.0.1',()=>
{
console.log("server start");
});*/
app.on("request",(req,res)=>{
    const readstream=fs.createReadStream("/home/rahul/Desktop/nodejs/firstpracticse/foldercreate/stream/input.txt");//which file you want read
    readstream.pipe(res);//where you want to write
});
app.listen(3500,'127.0.0.1',()=>
{
console.log("server start");
})