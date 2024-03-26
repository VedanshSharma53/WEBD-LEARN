//Steps to make new folder
//1. make folder and type npm init
//2. type npm i express
//3. type npm i ejs

// ejs is not require("ejs") because express does that by default

const express = require("express");
const app = express()
const path = require("path");//For express to take views folder to search ejs

const port = 8080;

app.set("view engine","ejs");//to render or show ejs as engine


app.set("views", path.join(__dirname, "/views"));//For express to take views folder to search ejs

app.get("/", (req,res) => {//*render* = *send files*
    res.render("home.ejs");//express take views folder to take home.ejs file
})

app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) +1;
    res.render("rolldice.ejs", {diceVal});//creating key for the data required(diceVal)
})//Called the key h

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

//****Refer ejs.co website to see ejs tags*****//

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    console.log(username);
    res.render("insta.ejs",{username});
})










