const express = require("express");
const path = require("path");

const app = express();


const port = process.env.PORT || 5000;
const path = require('path')


// Serve any static files built by React
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// all my api code goes here

app.get('/api', (req, res) => {
    res.json({
        message: 'This is the api endpoint.'
    })
})

app.listen(port, () => console.log(`server started on port${port}`));
