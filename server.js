//=========================================================
//Some of the code are "inspired/borrowed" from the in-class
//activities - 13-week/16-HotRestaurant
//==========================================================

var express = require("express");
var path = require("path");

//Express server
var app = express();

//Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

