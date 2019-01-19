var friends = require("../data/friends");
var arraySort = require("array-sort");

//Routes
module.exports = function(app) {
    //Display all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body.scores);

        //current user input
        var user = req.body;
        var totalDifferenceArray = [];
        var results = 0;
        for (var i = 0; i < friends.length; i++){
            results = 0;
            for (var j = 0; j < friends[i].scores.length; j++){
                results +=  parseInt(user.scores[j]) - parseInt(friends[i].scores[j]);
            }
            totalDifferenceArray.push({
                name: friends[i].name,
                linkToPhoto: friends[i].linkToPhoto,
                totalDiffNumm: Math.abs(results)
            });
        }
        arraySort(totalDifferenceArray, "totalDiffNum");
        friends.push(user);
        res.json(totalDifferenceArray[0]);
    });
}
