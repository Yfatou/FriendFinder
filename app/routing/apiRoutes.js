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
        //===============================================================
        // The part below is inspired by the pseudo-codes and work done
        // in class during office hours
        // ==============================================================
        //Empty array where the total difference of score will be stored
        var totalDifferenceArray = [];
        //Sum of the total differences stored in the variable Results
        var results = 0;
        //First for loop through all te existing friends
        for (var i = 0; i < friends.length; i++){
            results = 0;
            //then for loop through the scores of the friends
            for (var j = 0; j < friends[i].scores.length; j++){
                //Subtract the scores of the existing friends and the new one
                //and adding them to the result
                results += Math.abs(parseInt(user.scores[j]) - parseInt(friends[i].scores[j]));
            }
            //Push the data into the new array
            totalDifferenceArray.push({
                name: friends[i].name,
                linkToPhoto: friends[i].linkToPhoto,
                totalDiffNum: results
            });
        }
        //Sort the new array to have the friends with the least total of difference
        arraySort(totalDifferenceArray, "totalDiffNum");
        //Insert he new friend into the Friends array
        friends.push(user);
        //Display it
        res.json(totalDifferenceArray[0]);
    });
}
