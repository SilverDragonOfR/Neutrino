const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) =>
{
    res.sendFile("index.html");
})

app.post('/click', (req, res) =>
{
    let data = req.body;
    let arr = data.image;

    const {spawn} = require("child_process");
    const pyProg = spawn("python3.9" , ["./manage.py",arr.toString()]);
    pyProg.stdout.on("data", (data) =>
    {
        res.send({num : Number(data.toString())});
    })
})

app.listen(port, () =>
{
    console.log("Server listening to port : "+port);
})