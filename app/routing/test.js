
app.post("/api/friends", function(req, res) {
   
   var newFriendAnswers = req.body.answers;
   var answersArray = [];
   var bestMatch = 0;
 
   //runs through all current friends in list
   for(var i = 0; i < friends.length; i++){
    var diff = 0;
    //run through scores to compare friends
    for(var j = 0; j < newFriendAnswers.length; j++){
     diff += (Math.abs(parseInt(friends[i].answers[j]) - parseInt(newFriendAnswers[j])));
    }
 
    //push results into answersArray
    answersArray.push(diff);
   }
   console.log(answersArray)
 
   //after all friends are compared, find best match
   for(var i = 0; i < answersArray.length; i++){
    if(answersArray[i] <= answersArray[bestMatch]){
     bestMatch = i;
    }
   }
 
   //return bestMatch data
   var bestFriend = friends[bestMatch];
​
   console.log(bestFriend)
   res.json(bestFriend);
 
   //pushes new submission into the friendsList array
   friends.push(req.body);
  });
 };