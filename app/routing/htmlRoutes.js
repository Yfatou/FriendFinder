var path = require("path");

//Routes
module.exports = function(app) {

    //Display the survey page 
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Default, to display the home page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};