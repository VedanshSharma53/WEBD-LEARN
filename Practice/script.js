// splice concept
// let months = ["january","feb","march","june"];
// months.splice(1,2,"hello","coder");
// console.log(months);
//------------------------------------------------------
//reverse and find index
// let lang = ["one","two","three","hello"];
// let output = lang.reverse().indexOf("two");
//------------------------------------------------------
//push element in array(Constant array)
// const arr=[1,2,3];
// arr.push(4);
//------------------------------------------------------
//nested array
//let nums = [[2,4],[3,5],[4,8],[5,0]];
//------------------------------------------------------
//prnt odd nums
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }
//------------------------------------------------------
//print even nos
// for(let i=2;i<=100;i=i+2){
//     console.log(i);
// }
// console.log("reverse");
// for(let i=100;i>=2;i=i-2){
//     console.log(i);
// }
//------------------------------------------------------
//table of 5x1
// let n = prompt("write your numebr");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }
//------------------------------------------------------
//nested loop
// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }
//------------------------------------------------------
//fav movie game
// const favmov = "avengers";
// let guess = prompt("enter movie name");
// while((guess != favmov)){
//    if(guess=="quit"){
//      console.log("you quit");
//        break;
//    }
//     guess = prompt("wrong guess.enter movie name");
//}
//------------------------------------------------------
//loops with arrays
// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }
//-------------------------------------------------------
//loops with nested arrays
//Example1=====
// let heros = [
//     ["ironman","superman","thor"],
//     ["spiderman","wonder woman","flash"]
// ]
// for(let i=0;i<heros.length;i++){
//     console.log(i,heros[i],heros[i].length);
//     for(let j=0;j<heros[i].length;j++){
//         console.log(`j= ${j},${heros[i][j]}`);
//     }
// }
//Example2=====
// let students = [["jdjdjw",100],["cjnjecjne",90],["conejocn",20]];
// for(let i=0;i<students.length;i++){
//     console.log(i,students[i],students[i].length);
//     console.log(`info of student #${i+1}`);
//     for(let j=0;j<students[i].length;j++){
//         console.log(students[i][j]);
//     }
// }
//-------------------------------------------------------------------
//for-of loops
// let fruits = ["mango","banana","orange","apple","litchi"];
// for(friut of fruits){
//     console.log(friut);
// }
//--------------------------------------------------------------------
//TO-DO APP
// let todo = [];
// let req = prompt("enter your requesst");
// while(true){
//     console.log("____________");
//     if(req=="add"){
//         let task = prompt("enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     else if(req=="list"){
//         console.log("____________");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//     }
//     else if(req=="delete"){
//         let idx = prompt("enter task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("wrong request");
//     }
//     req=prompt("enter your requesst");
// }
//-------------------------------------------------------------------
//==Date:18-11-23==//
//object literals
//CREATE A POST
// const post = {
//     username: "vedansh sharma",
//     content: "This is my first post",
//     likes: 150,
//     reposts: 5,
//     tags: ["@apnacollege","@delta"]
// }
//======================================================================
//Guessing game
// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random() * max)+1;
// let guess = prompt("Guess the number");
// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess==random){
//         console.log("correct");
//         break;
//     }
//     else{
//         guess = prompt("wrong.enter again")
//     }
// }
//FUNCTION
// function hello() {
//     console.log("hello");
// }
// hello();
//========================================
//ARROW FUNCTION
// const pow = (n,m) => {
//     return n ** m;
// }
// const power = (n,m) => (
//     n ** m;
// )
//========================================
//set timeout
// console.log("hello");

// setTimeout(() => {
//     console.log("vedansh");
// } , 2000);
// console.log("how are you ")
//=================================
// set interval
// let id = setInterval( () => {
//     console.log("logIn yo mf");
// }, 2000);
// console.log(id);
//to stop the repetion use clearInterval(id)
//=================================================
//"this" in arrow functions 
// const student = {
//     name : "aman",
//     marks: 95, 
//     prop: this,//global scope
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getInfo: function () {
//         setTimeout( () => {
//             console.log(this);//parent's scope
//         }, 2000);
//     }
// }
//============================================================
//for each
// let arr = [1,2,3,4,5];
// arr.forEach(element => {
//     console.log(element*2);
// });
//=====================================================
//map
// let num = [1,2,3,4,5]
// let square = num.map( (el) => {
//     return el * el;
// });
//=====================================================
//write an arrow function name arrayAvg that accepts an array of numbers and return avg of those numbers.
// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total += number ;
//     }
//     return total / arr.length;
// }

// let arr = [1,2,3];
// console.log(arrayAverage(arr));
//====================================================================
//write an arrow function named as isEven() that takes single number as argument and returns if even or not.
// let isEven = (n) => {
//     if(n%2==0)
//     console.log("even");
// }
//=====================================================================
//FILTER
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let ans = nums.filter( (el) => {
//     return el % 2 == 0; //even -> true , odd -> false
// });//filter array with only even nos
//=====================================================================
//access buttons
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// }
//===========================================================================
//to access all buttons
// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
// }

// function sayHello() {
//     alert("hello");
// }
//===========================================================================
//on mouse enter property
// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
// }
// function sayHello() {
//     alert("hello");
// }
//=======================================================================
//ADD EVENT LISTENERS (to use multiple functions at a time)
//(FOR DOUBLE CLICK -> dblclick)
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }
// function sayHello() {
//     alert("hello");
// }
// function sayName() {
//     alert("Vedansh");
// }
//==============================================================================
//+++++++++++_____________ACTIVITY______________++++++++++++++++++++++++++++++
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText= randomColor;
    
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `RGB( ${red}, ${green}, ${blue} )`;
//     return color;
// }
//++++++++++++++++++++++++++__________ACTIVITY__________+++++++++++++++++++
//=====================================================================================
//THIS for event listeners
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let b = document.querySelector("b");
// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// b.addEventListener("click", changeColor);
//==================================================================================
//Keyboad events....
// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function(e) {
//     console.log(e.code);
//     if(e.code == "ArrowUp"){
//         console.log("forward");
//     } else if(e.code == "ArrowDown"){
//         console.log("Backward");
//     } else if(e.code == "ArrowLeft"){
//         console.log("left");
//     } else if(e.code == "ArrowRight"){
//         console.log("right");
//     }
// })
//===============================================================================
//FORM EVENTS
// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     alert("form submitted");
// });
//=============================================================================
//Extracting form data
// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     let user = this.elements[0];//use insted of document.addeventlistener("#user")
//     let pass = this.elements[1];//form.elements[0];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value}, your password is set to ${pass.value}`);
// });
//======================================================================================
//Change event
// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault()
// });
// let user = document.querySelector("#user");
// user.addEventListener("change", function (){
//     console.log("input changed");
//     console.log("final value = ", this.value);
// });
//=========================================================================================
//+++++++++++++++++++++___________________ACTIVITY__________________________++++++++++++++++++++++
// let inp = document.querySelector("#txt");
// let p = document.querySelector("p");
// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });
//+++++++++++++++++++____________________ACTIVITY_____________________________+++++++++++++++++++++++++++
//===================================================================================================
//EVENT BUBBLING(use to prevent overlapping of event listeners)
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (li of lis){
//     li.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("lis was clicked");
// });
// }(use stopPropogation)
//====================================================================================================
//_____________________________________________________________________________________________________________
//FINAL TO-DO APP
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "DELETE";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn)
//     ul.appendChild(item);
//     inp.value = "";//to clear the search boc after adding task..
// });

// ul.addEventListener("click", function(event) {//to delete tasks..
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;//node name gives name of the type(eg."BUTTON")
//         listItem.remove();
//         console.log(listItem);
//     }
// })
//HTML FOR ABOVE TO-DO
// /* <h1>To-Do APP</h1>
//     <input type="text" placeholder="Enter Your Task">
//     <button type="button"> Add Task</button>
//     <ul>
//         <li>Eat<button class="delete">DELETE</button></li>
//     </ul> */
//______________________________________________________________________________________________________________________
//==============================================================================================================================
//CALL STACK
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();
//========================================================================================================================================
//JavaScript is single threaded but the browser does multiple work at same time.
//So browser recieves the function and if there is any delay then browser makes that delay and recieves next
//function and does multiple tasks.
//Eg.-setTimeout function 
//---------------------------------------------------------------------------------------------------------------------------------------------------------
///===============================================================================================================================================
//CallBack Hell(complex program solving)(nesting)(changeColor)nn
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     },delay);
//     h1.style.color = color;
// }

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//             });
//         });
//     });
// });
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//======================================================================================================================================================
//PROMISES //-------//------//------//-------//
/////
/////
/////
/////
/////
/////
/////
/////
//PART DELETED --------------------------------------------++++++=====================
/////
/////
/////
/////
/////
/////
/////
//===================================================================================================================================================
//===================================================================================================================================================
//first API request
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log("Fact1 - ",data.fact);
//     return fetch(url);
// })
// .then((response) => {
//     return response.json();
// })
// .then((data2) => {
//     console.log("Fact2 - ",data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR -",err);
// })
//====================================================================================================================================================
//====================================================================================================================================================
// using ASYNC AND AWAIT with fetch(url)
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }  
//     catch (e) {
//         console.log("error - ",e);
//     }
// }
//====================================================================================================================================================
//====================================================================================================================================================
//using AXIOS to make http requests and display on page
//add axios script tag in HTML
//<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js" integrity="sha512-NQfB/bDaB8kaSXF8E77JjhHG5PM6XVRxvHzkZiwl3ddWCEPBa23T76MuWSwAJdMGJnmQqM0VeY9kFszsrBEFrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//code=======
//To show in HTML
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     console.log("CLICKED");
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }  
//     catch (e) {
//         console.log("error - ",e);
//         return "No fact found";
//     }
// }
//TO SHOW IMAGES API
// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
// })

// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }  
//     catch (e) {
//         console.log("error - ", e);
//         return "No image found";
//     }
// }
//====================================================================================================================================================
//====================================================================================================================================================
//PASSING HEADERS WITH AXIOS REQUEST
// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try {
//         const config = { headers: { Accept: "application/json" } }; //using quesry and setting config
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch (err) {
//         console.log(err);
//     }
// }
//====================================================================================================================================================
//====================================================================================================================================================
//====================================================================================================================================================
//====================================================================================================================================================
//EXAMPLE FOR CALLING API
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;//take county as input
//     console.log(country);

//     let colArr = await getColleges(country);//store name in colArr
//     console.log(colArr);
//     show(colArr);
// })

// function show(colArr){
//     let list = document.querySelector("#list")
//     list.innerText = "";//empty list for every new input

//     for (col of colArr){ //print list of colleges
//         console.log(col.name);
//         let li = document.createElement("li");//create list
//         li.innerText = col.name;
//         list.appendChild(li);//put items
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";//search university by country name


// async function getColleges(country){
//     try{
//         let res = await axios.get(url + country);//concatinating url and county as one string
//         return res.data;
//     }
//     catch(err){
//         console.log(err);
//         return [];
//     }
// }
//====================================================================================================================================================
//====================================================================================================================================================
//====================================================================================================================================================
//====================================================================================================================================================
//============   NODE  ====================================================================
//node REPL ==>> read evaluate print loop
//type node in terminal to start node
// let n = 5;
// for(let i = 0;i<n;i++){
//     console.log("Hello",i);
// }
// console.log("Bye");
// Runs in terminal - type cmnd --- "node script.js"
//=======================================================================================================================
// console.log(process.argv);//create array.....using process.argv after starting node
// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("Hello to ",args[i]);
// }
//ARGUMENTS ARE REQUIRED TO TAKE INPUTS************************
//=================================================================================================================================
//EXPORT IN FILES
//when information of this file is required in another file(script.js) then..
//..module.exports is used in source file and require(path of source file) in..
//..destination file.
// const math = require("./math");//imported value 123
// require is built in function to import
// console.log(math.mul(2,5));
//=================================================================================================================================
//=================================================================================================================================
//======================  Node.js  ===========================================================================================================
//Javascript Runtime Environment
//It is used in server side programming
//*Node.js is not a language, library or framework.
//based on javascript
//=================================================================================================================================
//=================================================================================================================================
//=================================================================================================================================
// How to require directories (export in directories)
// const info = require("./fruits");
// console.log(info);
//Step1 = require function finds index.js file in directory to start process(entry point)
//Step2 = all the files in the directories are called in index.js using module.exports
//Step3 = array of all the elements in created in index.html 
//Step4 = array is exported using module.exports
//refer the folder/directory of fruits and observe
//=================================================================================================================================
//=================================================================================================================================
//.Installing Packages npm install
//node modules installs all dependencies in your projects
//package-lock.json records the exact version of every installed dependency,
//including its sub-dependencies and their versions.
//the package.json file contains descripitive and functional meta data about a project.
//such as name , version, and dependencies.
//-npm init- is used
//press enter to enter details after using npm init
//=================================================================================================================================
//=================================================================================================================================
//IMPORT keyword
//used inplace of require
//do not use require if import is used
// import {sum, PI} from "./math.js";
// console.log(sum(1,2));
// import is better than require because it requires less memory as you can decide
// what to import
// import { generate } from "random-words";
// console.log(generate());
//========================================================================================================================================
//========================================================================================================================================
//==================Expresss=========================
// A node js application framework that helps us to make web applications.
// It is used for server side programming.
// CLIENT ->->->request->->->  SERVER
// CLIENT <-<-<-response<-<-<- SERVER
// 1.Listens for incoming requests
// 2.parse requests(convert to js)
// 3.match reponse with routes(like google.com/search.....where /search is path)
// 4.response
// move to express folder for further details........
//folder inside of apna college webd in open in desktop
// let btn = document.querySelector("button");
// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     p = document.querySelector("#result");
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){

//     }
// }
