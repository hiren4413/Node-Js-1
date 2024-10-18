const express = require("express");

let code = 8000;

let app = express();

const db = require("./config/db")

app.set("view engine","ejs")

const User = require("./model/UserModel")

app.use(express.urlencoded());

// View User

app.get("/", (req, res) => { 
    User.find({})
    .then((data) => {
        return res.render("view", {
            record : data
        })
    }).catch((err) => {
        console.log(err);
        return false     
    })
})

// Add User
app.get("/add", (req, res) => {
    return res.render("add")
})

// Delete User

app.get("/delUser",(req,res)=>{
    let id = req.query.delId;
    User.findByIdAndDelete(id)
    .then((data)=>{
        console.log("User Deleted SuccessFully");
        return res.redirect("/")
    }).catch((err)=>{
        console.log("err");
        return false;
    })
})

// Edit user

app.get("/editUser",(req,res)=>{
    let id = req.query.editId;
    User.findById(id)
    .then((single)=>{
        return res.render("edit",{
            data : single 
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

// Update User

app.get("/updateUser",(req,res)=>{
    
})

const UserModel = require("./model/UserModel")


app.post("/insertUser", (req, res) => {
    const { name, email, password, gender, hobby, city, number } = req.body;

    UserModel.create({
        name: name,
        email: email,
        password: password,
        gender: gender,
        hobby: hobby,
        city: city,
        number: number
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log("User Added");
        return res.redirect("/add")
    })
});

app.listen(code, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(` Server Running on : ${code} `);

});