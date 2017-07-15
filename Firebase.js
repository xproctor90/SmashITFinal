 $(document).ready(function(){
	 var users;
	 var config = {
	    apiKey: "AIzaSyAzda9qEPbmQKSdXCfY5ZjxaLjvS0lLZh4",
	    authDomain: "burpees-and-stuff.firebaseapp.com",
	    databaseURL: "https://burpees-and-stuff.firebaseio.com",
	    projectId: "burpees-and-stuff",
	    storageBucket: "",
	    messagingSenderId: "135624626399"
	  };

	  firebase.initializeApp(config);
	  var database = firebase.database();
	  
	  function writeScore(scoreType,score) {
		  database.ref(scoreType).push({
			  score: score
		  });
	  }
	




//Add to 3 seperate Arrays

//Sort Arrays in decending order

//Retrieve first three array items of each array

//post 

if cardAmount === 0;
	var highScores = new Array();
	stopwatch.time.push(highscore)
	
else if cardAmount === 26;
	var mediumScores = new Array();
	stopwatch.time.push(mediumScore)

else cardAmount === 39;
	var easyScores = new Array();
    stopwatch.time.push(easyScore)
	
	



}

	
	function sortNumber(a,b) {
    	return a - b;
	}

	function getHighestScores(scoreType,scoreNum) {
		var highScores= []
		database.ref(scoreType).orderByChild("score").limitToLast(scoreNum).once('value').then(function(snapshot){
			 users = snapshot.val()
			 	 
			 for(var key in users) {
	   		 	var user = users[key];
	   		 	highScores.push(user.score)
	   		 }
    		 highScores.sort(sortNumber).reverse();
	    });
	    return highScores;
	}
	console.log(getHighestScores('easyScores/',3))
	console.log(getHighestScores('mediumScores/',3))
	console.log(getHighestScores('HardScores/',3))
	
}); 

}; 



//HI Adrian, the JS files are sending two files to the console log for you to use in the database.  
//If cardAmount = 0 then that is the 52 (hardest) workout If cardAmount = 26 then that is the 26 (middle) 
//workout If cardAmount = 39 then that is 13 card workout (easiest).  You will also receive a value from the timer - //
//the score in seconds (stopwatch.time)
//[5:26] 
//two values, not files.  cardAmount & stopwatch.time//

 

