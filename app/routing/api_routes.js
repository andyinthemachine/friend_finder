

// api_rountes.js


var friends_list = require("./app/data/friends.js");


app.get("/api/friends", function (req, res) {
    return res.json(friends_list);
});
