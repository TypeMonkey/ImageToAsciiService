const axios = require("axios");

const serverURL = "http://localhost:9000/";

axios.post(`${serverURL}imagepls`, {
    url: "https://octodex.github.com/images/privateinvestocat.jpg",
    options: {
        concat: false,
        colored: false,
        size: {
            height: 80,
            width:  80
        }
    }
}).then(
    (resp) => {
        console.log("in response "+typeof resp.data.data);
        console.log(resp.data.strArray);
        console.log(resp.data.strArray.length);
    }
).catch(
    (err) => console.log("Error encountered when requesting: "+err)
);