

// api_rountes.js


var friends_list = require("../data/friends.js");

module.exports = function (app) {

    function diff(person1, person2) {
        var total_diff = 0;
        for (var j = 0; j < 10; j++)
            total_diff += Math.abs(parseInt(person1.scores[j]) - parseInt(person2.scores[j]));

        return (total_diff);
    }

    function closest_match(new_entry) {
        match_index = 0;
        var low_diff = diff(friends_list[0], new_entry);

        for (var i = 1; i < friends_list.length; i++) {
            var cur_diff = diff(friends_list[i], new_entry);
            if (cur_diff < low_diff) {
                low_diff = cur_diff;
                match_index = i;
            }
        }
        return (match_index);
    }

    app.get("/api/friends", function (req, res) {
        return res.json(friends_list);
    });

    app.post("/api/friends", function (req, res) {
        // JSON post sent from the user
        var new_entry = req.body;

        if (friends_list.length < 1)
            res.send("no friends in list yet");
        else        // compare new entry against existing list to find closest match
            res.json(friends_list[closest_match(new_entry)]);

        new_entry.routeName = new_entry.name.replace(/\s+/g, "").toLowerCase();
        friends_list.push(new_entry);
    });

}


