const express = require("express");

let code = 8000;


let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index", {
        title: "Index Page",
        pagename: "Index page",
        industry: "Black & White Multimedia Education",
        users: [
            {
                id: 1,
                name: "Jonathan",
                role: "Mvp"
            },
            {
                id: 2,
                name: "Mortal",
                role: "Ruuner Up"
            },
            {
                id: 3,
                name: "ScoutOp",
                role: "2nd Runner Up"
            }
        ]
    });
});
app.get("/home",Admin, (req, res) => {
    return res.render("home", {
        title: "Home Page",
        pagename: "Home page",
        industry: "Black & White Multimedia Education",
    });
});
app.get("/ab",Admin, (req, res) => {
    return res.render("about", {
        title: "About Page",
        pagename: "About page",
        industry: "Black & White Multimedia Education",
    });
});
app.get("/pro", (req, res) => {
    return res.render("product", {
        title: "Product Page",
        pagename: "Product page",
        industry: "Black & White Multimedia Education",
    }); 
});
app.get("/cont", (req, res) => {
    return res.render("contact", {
        title: "Contact Page",
        pagename: "Contact page",
        industry: "Black & White Multimedia Education",
    });
});

app.listen(code, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(` Server Running on : ${code} `);

});