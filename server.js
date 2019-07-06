

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var friends = [
    {
        "name": "Bill",
        "photo": "",
        "scores": [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
    }
];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// app.post("/:name/andy", function (req, res) {
//     var data = req.body;

//     console.log(data);
//     res.json(data);
// });
