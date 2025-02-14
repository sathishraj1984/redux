const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res)=> {
    res.json({message: "This is Home page"});
});

app.get("/users", (req, res)=> {
    res.json({message: "Get All the Users"});
});

app.get("/users/", (req, res)=> {
    res.json({message: `Create New Users`});
});

app.get("/users/:id", (req, res)=> {
    res.json({message: `Get Users with id ${req.params.id}`});
});

app.post("/users/", (req, res)=> {
    res.json({message: `Create New Users`});
});


app.put("/users/:id", (req, res)=> {
    res.json({message: `Update Users with id ${req.params.id}`});
});


app.delete("/users/:id", (req, res)=> {
    res.json({message: `Delete Users with id ${req.params.id}`});
});



app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})