

//server.js

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app"));

require("./app/routing/api_routes.js")(app);
require("./app/routing/html_routes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

