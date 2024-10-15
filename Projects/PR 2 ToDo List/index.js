const express = require("express");

let code = 9090;


let app = express();

app.set("view engine" , "ejs");

let toDo = [] ;

app.use(express.urlencoded());

app.get("/", (req,res)=>{
    return res.render("index",{
        all:toDo
    });
});

// Add Task

app.post("/addTask", (req,res)=>{
    const {work,status,end} = req.body;
    let task ={
        id: Math.floor(Math.random()*100000),
        work: work,
        status: status,
        end:end
    }

    toDo.push(task);

    console.log("Task Added successfully");
    return res.redirect("/");
    
});

// Delete Task

app.get("/delTask", (req,res)=>{
    
    let id = req.query.delId;
    let d = toDo.filter(val => val.id != id)
    toDo = d;
    console.log("Task Deleted Successfully");
    return res.redirect("/");
  
})

// Edit Task

app.get('/editTask',(req,res)=>{
    let single = toDo.find(val => val.id == req.query.editId);
    return res.render('edit',{
        single
    })
});

// Update Task

app.post('/updTask',(req,res)=>{

    let {editId,work,status,end} = req.body;
    let update=toDo.map((val)=>{
        if(val.id == editId){
            val.work=work,
            val.status=status,
            val.end=end
        }
        return val;
    })
    toDo=update;
    return res.redirect('/');
});

app.listen(code,(err) => {if(err) {
        console.log(err); 
        return false;
    }
    console.log(` Server Running on : ${code} `);
    
});