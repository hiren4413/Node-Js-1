const { response } = require("express")

let Admin = ()=>{

    const Role = req.query.role;

    if (role=="admin") {
        return next();
    }else{
       return response.redirect("/")
    }
}

module.exports={
    Admin
}



