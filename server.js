

//server.js

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// var html_routes = require("./app/routing/html_routes");
// var api_routes = require("./app/routing/api_routes");

var friends_list = require("./app/data/friends.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(friends_list);
});

app.get('*',function (req, res) {
    res.redirect('/');
});

app.post("/api/friends", function (req, res) {
    // JSON post sent from the user
    var new_entry = req.body;
    new_entry.routeName = new_entry.name.replace(/\s+/g, "").toLowerCase();

    friends_list.push(new_entry);

    console.log(new_entry);
    res.json(new_entry);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

