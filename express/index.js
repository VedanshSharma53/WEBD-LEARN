const express = require("express");//gives a vales
const app = express();//value is stored in app

console.dir(app);

let port = 8080; //8080 (can be used for custom server)
// port is a logical end-point of a network connection that is used--
//--to exchange information between a web server and web client.

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});//check if port is active

// app.use((req, res) => {
//     // console.log(req);//check arguments related to req
//     console.log("request recieved");
//     let code = "<h1>Hello</h1> <ul><li>Apple</li></ul>";
//     // res.send({
//     //     name: "apple",
//     //     color: "red",//you can send data in any type...HTML tages or json data etc...
//     // });
//     res.send(code);
// });//listen your request and send response.....
// //******NOTE: app.use wills send same response to all routes*******

app.get("/", (req, res) => {
    res.send("you contacted root path");
});
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});
// app.get("*", (req, res) => {//default value if any other path is selected...
//     res.send("this page does not exist");
// });

app.post("/", (req, res) => {
    res.send("you post a req to root");
});

//installed nodemon for faster changes in server
//===============================================================================================
//========Parameters========

app.get("/:username/:id", (req, res) => {
    let { username, id} = req.params;
    let htmlStr = `<h1>Hello @${username}</h1>`;
    res.send(htmlStr);
});