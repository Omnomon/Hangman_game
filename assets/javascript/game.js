// Declare variables for base 


//------------
var word; 
/*var testLetter= ["r","e","d"];*/ 
var underscore = " _ ";
var underscores =[];
//---------------------------------------------



//---------------------------------------------
var testWordBank =  [ 
"This.screw()", 
"curry",
"my_back_hurts", 
"homework", 
"apples" , 
"legolas", 
"winter_is_coming",
"smoke_weed_every_day",
"i_made_a_game", 
"i hope this does not break the game"]; 

var testWord = testWordBank[Math.floor(Math.random() * 10)]
/*var testLetter ="E";*/
var indices = [];
//---------------------------------------------

/*

*/
//---------------------------------------------
underscores = underscore.repeat(testWord.length);
var blankWord = underscores.split("  ");
console.log(underscores);
console.log(blankWord, blankWord.length)
//---------------------------------------------




//---------------------------------------------

testWord = testWord.toLowerCase()
var testArray = testWord.split("");
console.log(testArray , testArray.length)

//---------------------------------------------

//create array of images 

var imageArray = [
'./assets/images/platform.png', 
'./assets/images/strike_1.png', 
'./assets/images/strike_2.png', 
'./assets/images/strike_3.png', 
'./assets/images/strike_4.png', 
'./assets/images/strike_5.png', 
'./assets/images/strike_6.png'
]; 



var userGuess = "";



//---------------------------------------------


//write a function that will find all instances of a letter for a given word

function checkTestLetter(userGuess, testWord) {
	indices = [];
	userGuess = userGuess.toLowerCase()
	testWord = testWord.toLowerCase()
	var testWordLetters = testWord.split("")
	var letterIndex = testWordLetters.indexOf(userGuess);
	while (letterIndex != -1) {
		indices.push(letterIndex);
		letterIndex = testWordLetters.indexOf(userGuess, letterIndex + 1);
		} 
	return indices
}

// ----------------------------------------------------------------------------

// -------

/*function checkUnderscores(underscore, testWord) {
	console.log("checkUnderscores running")
	var underscoreIndex = [];
	while (underscoreIndex != -1) {
		underscoreIndex = blankWord.indexOf(underscore, underscoreIndex +1)
		if ( underscoreIndex.length == 0 ) {
			$("#letter_correct").html("YOU WIN")
			console.log("checkUnderscores you win")
		if ( underscoreIndex.length > 0  && count == 6) {
			$("#letter_incorrect").append (" YOU LOSE ")
			console.log("checkUnderscores you lose ")
		} 
		}
	}
}
*/

function checkBlankWordEqualsTestWord (blankWord, testWord) {
	for (var i = 0; i <blankWord.length; i++) {
		if (blankWord[i] == testWord[i]) {
			$("#letter_correct").html("YOU WIN")
		}
	} 
}

//--------- check run ----------
var userGuessRightAt = checkTestLetter('e', 'redredred')
console.log(userGuessRightAt)
//------------------------------------------


//if userGuess is right, replace blankWord with testLetter 
function replaceUnderScoreWithTestLetter(userGuessRightAt) {
	for (var counter = 0; counter < userGuessRightAt.length; counter++) {
		blankWord[userGuessRightAt[counter]] = userGuess[0];
	}
}

// -------- 


// if userGuess is wrong, increase count, add to userStrikes 
var userStrikes = [];
var count = 0;
function userGuessedWrong(userGuessRightAt) {
	if (userGuessRightAt.length === 0) {
		userStrikes.push(userGuess);
		count++ ;
	}

	return count
}

// put all the code together 

window.onload = function play() {
	$("#letter_correct").append($("<div>").html(blankWord.length + " characters (may or may not include other characters!)"))
} 



$(document).ready().keyup(function() {
	userGuess = event.key;
	console.log("current letter is " + userGuess);
	var userGuessRightAt = checkTestLetter(userGuess, testWord);
	console.log(userGuessRightAt);
		if (userGuessRightAt.length ===0) {
			userGuessedWrong(userGuessRightAt);
			$("#noose").attr("src", imageArray[count])
				if (count === 6) {
				$('#letter_incorrect').html("<div>GAME OVER</div>")
				$('#letter_correct').hide()
				$('#reset').html("Play again?")
				$('#theWord').html(testWord)
				};

			};
	replaceUnderScoreWithTestLetter(userGuessRightAt);

	$("#theWord").html(blankWord);
	$("#letter_incorrect").html("You have " + ( 6 - count ) + " guesses left. Letters already guessed: " + userStrikes);
	if ( count >= 6 ) {
		$("#letter_incorrect").html("YOU LOSE");
	};


	$("#letter_correct").text(underscores).html(blankWord).append("<div>");
	
	console.log(blankWord);
	console.log(count);

}); 

$(document).ready(function(){
	$("#reset").click(function(){
		console.log("reset button")
		window.location.reload(true)
	});
});
	

/*	if (userGuessRightAt.length !==0) {
		$("#letter_correct").append($("<div>").html(userGuess)).addClass("col-xs-1")
	};
*/


/*			if (count +=1) {
	 			console.log("function works")
				var img = imageArray[0];
				 for (var i = 0; i<imageArray.length; i++) {
				 	if (img == imageArray[i].src) {	
				 		img == imageArray[i+1]
 					} 

 					if (img == -1) {
 						img == imageArray[0];
 					} else {
 						console.log("fix hangmang images")
 					}

				 } 
*/

