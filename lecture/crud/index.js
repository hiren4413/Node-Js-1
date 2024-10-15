const express = require("express");

let code = 9090;


let app = express();

app.set("view engine" , "ejs");

let users = [] ;

app.use(express.urlencoded());

app.get("/", (req,res)=>{
    return res.render("index",{
        all:users
    });
});

app.post("/addRecord", (req,res)=>{
    const {name,role} = req.body;
    let user ={
        id: Math.floor(Math.random()*100000),
        name: name,
        role: role
    }

    users.push(user);

    console.log("User Added successfully");
    return res.redirect("/");
    
});

// Delete User

app.get("/delUser", (req,res)=>{
    
    let id = req.query.delId;
    let d = users.filter(val => val.id != id)
    users = d;
    console.log("user Deleted Successfully");
    return res.redirect("/");
  
})

app.listen(code,(err) => {if(err) {
        console.log(err); 
        return false;
    }
    console.log(` Server Running on : ${code} `);
    
});