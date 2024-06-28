const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override")

app.use(express.urlencoded({ extended: true }));//parsing url encoded data
app.use(methodOverride("_method"))

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username : "ApnaCollege1",
        content : "I love coding3000"
    },
    {
        id: uuidv4(),
        username : "ApnaCollege2",
        content : "I love coding"
    },
    {
        id: uuidv4(),
        username : "ApnaCollege3",
        content : "I love coding zero"
    }
]

app.get("/posts/new", (req,res) => {
    res.render("new.ejs")
})

app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts})
})   

app.post("/posts", (req,res) => {
    // console.log(req.body);//print the information which comes in body in case of post req
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts")// to send to the client (page)
})

app.get("/posts/:id", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("show.ejs",{post})
});

app.patch("/posts/:id", (req,res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    console.log(post);
    res.redirect("/posts")
});

app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs")
})

app.delete("/posts/:id", (req,res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id );
    res.redirect("/posts")
    //
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});




