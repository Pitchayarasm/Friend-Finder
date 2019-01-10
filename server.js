var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
var PORT = process.env.PORT || 3000;
var apiRoutes = require("./app/routing/apiRoutes");
    apiRoutes(app);
var htmlRoutes = require("./app/routing/htmlRoutes");
    htmlRoutes(app);

app.get("/api/friendlist",function(req,res) {
  res.json(friendListData);
})
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });