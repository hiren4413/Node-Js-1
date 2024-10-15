const http = require("http");

const port = 4000;

const fs = require("fs");



const rqHandler = (req, res) => {
    let fileName = "";
    switch (req, url) {
        case "/":
            fileName = "./index.html"
            break;
        case "/home":
            fileName = "./home.html"
            break;
        case "/about":
            fileName = "./about.html"
            break;
        case "/contact":
            fileName = "./contact.html"
            break;
        default:
            fileName = "./404.html"
            break;
    }

    fs.readFile(fileName,(err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.end(data);
    });
}

const start = http.createServer(rqHandler);

start.listen(port,(err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on ${port}`);
});
