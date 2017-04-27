// Declare variables for base 


//------------
var word; 
/*var testLetter= ["r","e","d"];*/ 
var underscore = " _ ";
var underscores =[];
//---------------------------------------------



//---------------------------------------------
var testWord = 	"rEdRedred"; 
/*var testLetter ="E";*/
var indices = [];
//---------------------------------------------



//steal contains function 

var contains = function (haystack, needle) {
	return !!~haystack.indexOf(needle)
};


//---------------------------------------------
underscores = underscore.repeat(testWord.length);
var blankWord = underscores.split("  ");
console.log(underscores);
console.log(blankWord)
//---------------------------------------------




//---------------------------------------------

testWord = testWord.toLowerCase()
var testArray = testWord.split("");

//---------------------------------------------




//---------------------------------------------


//Display the html ** placeholder ** unde
window.onload = function play() {

/*	document.getElementById("hangman").innerHTML = blankWord;*/

} 
//---------------------------------------------


//---------------------------------------------

// Declare keystrokes

var userGuess = "";
/*document.onkeyup = function (event) {

//define keycode as var 
userGuess = event.key;
console.log("current letter is " + userGuess)
return userGuess;

}*/

//---------------------------------------------



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

$(document).keyup(function() {
	userGuess = event.key;
	console.log("current letter is " + userGuess);
	var userGuessRightAt = checkTestLetter(userGuess, testWord)
	console.log(userGuessRightAt)
		if (userGuessRightAt.length ===0) {
			userStrikes.push(userGuess);
			count += 1 
		
		} else {
			for (var counter = 0; counter < userGuessRightAt.length; counter++) {
			blankWord[userGuessRightAt[counter]] = userGuess;
			}
		}

	console.log(blankWord)
	console.log(count)

})