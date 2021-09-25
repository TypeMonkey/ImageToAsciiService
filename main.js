console.log("Hello world");
/*
// Dependencies
const imageToAscii = require("image-to-ascii");
 
// Passing options
imageToAscii("https://octodex.github.com/images/privateinvestocat.jpg", {
    colored: false,
    concat: false,
    size: {
        height: 80,
        width:  80
    }
}, (err, converted) => {
    const stringArray = converted.map(x => x.join(""));
    console.log(typeof converted);
    console.log(stringArray.length);
    console.log(stringArray)
});
*/

const express = require("express");
const app = express();

const PORT = 80;

//app.post();

//Sets the route for "ping"
app.get("/ping", (req, res, next) => {
    res.status(200).json({success: true});
});


//Starts the server on the provided port
const server = app.listen(PORT, () => {
    console.log("Running server on p ort: "+PORT);
});

//We export "server" for testing purposes
module.exports = server;