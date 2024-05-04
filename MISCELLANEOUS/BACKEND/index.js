const express = require("express");
const app = express();
const port = 9090;

app.use(express.urlencoded({ extended: true }));// To parse data for express to understand
app.use(express.json());

app.get("/register", (req,res) => {
    let {user, password} = req.query; //Data is stored in res.query
    res.send(`Standard get response. Welcome ${user}!`)
})

app.post("/register", (req,res) => {//first we have to request route and the parse the data to post
    console.log(req.body);
    let {user, password} = req.body; //Data is stored in res.body
    res.send(`Standard get response. Welcome ${user}!`)
})

//For usl encoded form
// -- app.use(express.urlencoded({ extended: true }));
//For Json
// -- app.use(express.json());

app.listen(port, () => {
    console.log("Listening on port 9090");
})

