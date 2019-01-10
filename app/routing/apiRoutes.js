var friendListData = require("../data/friends.js");

module.exports = function(app) {
    // get request
    app.get("/api/friendlist",function(req,res) {
        res.json(friendListData);
    })

    // post request
    app.post("/api/friendlist",function(req,res) {
    var user = req.body;
    var userScore = req.body.scores;
    for(var i = 0; i < userScore.length; i++) {
        userScore[i] = parseInt(userScore[i]);
    };

    var differenceArr = [];
    var totalDifference = 0;
    var index = 0;
    for( var i = 0 ; i < friendListData.length; i++) {
        for ( var j = 0 ; j < friendListData[i].scores.length ; j++) {
            // each score difference in each friendlist
            var differenceScr = Math.abs(userScore[j] - friendListData[i].scores[j]);
            // total score difference in each friendlist
            totalDifference += differenceScr;
            differenceArr.push(totalDifference);
        }
        var bestMatch = Math.min(...differenceArr);
        for ( var i = 0 ; i < differenceArr.length ; i++ ) {
            if ( bestMatch === differenceArr[i] ) {
                index = i;
            }
        }
    }
    friendListData.push(user);
    res.json(friendListData[index]);
    });
}