// REST - representational state transfer

// Creating RESTful API's
//Method    path        Meaning                     
//GET       /posts      to get data for all posts   [INDEX]
//POST      /posts      to add a new post           [CREATE]
//GET       /post/:id   to get one post(using id)   [VIEW]
//PATCH     /post/:id   to update specific post     [UPDATE]
//DELETE    /post/:id   to delete specific post     [DESTROY]

// UUID (Universally unique identifier)
// npm install uuid
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// method-override
// npm i method-override
// const methodOverride = require("method-override")
// app.use(methodOverride("_method"))

