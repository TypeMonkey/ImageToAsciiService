const imageToAscii = require("image-to-ascii");
const express = require('express');
const { json } = require("express");

const app = express();
const PORT = 9000;

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.post("/imagepls", (req, res, next) => {
    const url = req.body.url;

    if(req.body.options === undefined){
        imageToAscii(url, (err, converted) => {
            console.log("=====> FINISHED CONVERTING");
            const stringArray = converted.map(x => x.join(""));
            res.status(200).json({
                strArray: stringArray
            });
        });
    }
    else{
        imageToAscii(url, req.body.options, (err, converted) => {
            const stringArray = converted.map(x => x.join(""));
            console.log("=====> FINISHED CONVERTING with options ", stringArray.length);
            console.log(stringArray)
            res.status(200).json({
                strArray: stringArray
            });
        });
    }
});

//Sets the route for "ping"
app.get("/ping", (req, res, next) => {
    res.status(200).json({success: true});
});


//Starts the server on the provided port
const server = app.listen(PORT, () => {
    console.log("Running server on port: "+PORT);
});

//We export "server" for testing purposes
module.exports = server;