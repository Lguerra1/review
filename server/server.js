var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var randArr = [{id: 1, zombie: "Frank"}, { id: 2, zombie: "Larry"}];
var id = 3

app.get("/api/zombies", (req, res) => {
    res.status(200).send(randArr)
})

app.post("/api/zombies", (req, res) => {
    console.log(req.body.zombie)
    randArr.push({id: id, zombie: req.body.zombie})
    id ++;
    res.status(200).send(randArr)

})


app.listen(3030, console.log("Zombies to fight on port 3030"))