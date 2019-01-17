var tableData = require("../data/friends");

//Routes
module.exports = function(app) {

    //Display all possible friends
    app.get("/api/friends", function(req, res){
        res.json(tableData);
    });


    app.post("api/friends", function(req, res){
        var userData = req.body;
        tableData.push(req.body);

        res.json(tableData[tableData.length-1]);
    })
}