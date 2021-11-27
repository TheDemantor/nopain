const http=require("http");
const fs=require("fs");
const indexfile=fs.readFileSync("index.html");

const server=http.createServer((req, res)=>{
    res.writeHead(300, {'Content-type':'text/html'});
    res.end(indexfile);
});
server.listen(800, '127.0.0.1:800', ()=>console.log("Listening to port 800"));