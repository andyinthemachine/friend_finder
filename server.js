

var express = require("express");
var path = require("path");



var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
};

var darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
};


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.post("/:name/andy", function(req, res) {
    var data = req.body;
  
    console.log(data);
    res.json(data);
  });

app.get("/yoda", function (req, res) {
    res.json(yoda);
});

app.get("/darthmaul", function (req, res) {
    res.json(darthmaul);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
