const express = require("express");

let code = 8000;

let app = express();

app.set("view engine", "ejs");

let path = require("path");

app.use("/",express.static(path.join(__dirname,"/public")));

app.get("/", (req, res) => {
    return res.render("index");
});
app.get("/chart", (req, res) => {
    return res.render("chart");
});
app.get("/widgets", (req, res) => {
    return res.render("widgets");
});
app.get("/tables", (req, res) => {
    return res.render("tables");
});
app.get("/grid", (req, res) => {
    return res.render("grid");
});
app.get("/form-basic", (req, res) => {
    return res.render("form-basic");
});
app.get("/form-wizard", (req, res) => {
    return res.render("form-wizard");
});
app.get("/buttons", (req, res) => {
    return res.render("buttons");
});
app.get("/material", (req, res) => {
    return res.render("material");
});
app.get("/font", (req, res) => {
    return res.render("font");
});
app.get("/elements", (req, res) => {
    return res.render("elements");
});
app.get("/dash", (req, res) => {
    return res.render("dash");
});
app.get("/galary", (req, res) => {
    return res.render("galary");
});
app.get("/calender", (req, res) => {
    return res.render("calender");
});
app.get("/invoice", (req, res) => {
    return res.render("invoice");
});
app.get("/chat", (req, res) => {
    return res.render("chat");
});
app.get("/login", (req, res) => {
    return res.render("login");
});
app.get("/register", (req, res) => {
    return res.render("register");
});
app.get("/error403", (req, res) => {
    return res.render("error403");
});
app.get("/error404", (req, res) => {
    return res.render("error404");
});
app.get("/error405", (req, res) => {
    return res.render("error405");
});
app.get("/error500      ", (req, res) => {
    return res.render("error500      ");
});

app.listen(code, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(` Server Running on : ${code} `);

});