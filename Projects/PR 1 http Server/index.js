let http = require('http');

let port = 8088;
let fs = require('fs');

let requesthandler = (req,res) =>{
    let filename = "";
    switch(req.url){
        case '/':
            filename = "./index.html"
        break;
        case '/home':
            filename = "./home.html"
        break;
        case '/ab':
            filename = "./about.html"
        break;
        case '/pro':
            filename = "./product.html"
        break;
        case '/cont':
            filename = "./contact.html"
        break;
    }
    fs.readFile(filename,(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }
        res.end(data);
    })
}

let server = http.createServer(requesthandler);

server.listen(port,(err)=>{
    console.log(`server is ruunning on : ${port}`);
});