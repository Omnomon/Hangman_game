// Declare variables for base 


//------------
var word; 
/*var testLetter= ["r","e","d"];*/ 
var underscore = " _ ";
var underscores =[];
//---------------------------------------------



//---------------------------------------------
var testWord = 	"rEdRedred"; 
var testLetter ="E";
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

	document.getElementById("hangman").innerHTML = blankWord;

} 
//---------------------------------------------


//---------------------------------------------

// Declare keystrokes

var userGuess= ""
document.onkeyup = function (event) {

//define keycode as var 
userGuess = event.key;
console.log("current letter is " + userGuess)
return userGuess = ""

}

//---------------------------------------------

//replace testLetter with testWord 


//---------------------------------------------


//write a function that will find all instances of a letter for a given word

function checkTestLetter(testLetter, testWord) {
	indices = [];
	testLetter = testLetter.toLowerCase()
	testWord = testWord.toLowerCase()
	var testWordLetters = testWord.split("")
	var letterIndex = testWordLetters.indexOf(testLetter);
	while (letterIndex != -1) {
		indices.push(letterIndex);
		letterIndex = testWordLetters.indexOf(testLetter, letterIndex + 1);
		} 
	return indices
}

// ----------------------------------------------------------------------------

var userGuessRightAt = checkTestLetter('e', 'redredred')
console.log(userGuessRightAt)


//replace blankWord with testLetter 
function replaceUnderScoreWithTestLetter() {
	for (var counter = 0; counter < userGuessRightAt.length; counter++) {
		blankWord[userGuessRightAt[counter]] = testLetter[0];
	}
}

// -------- 


// if userGuess is wrong, push to wrong list 
var userStrikes = [];
var count = 0;
function userGuessedWrong(userGuessRightAt) {
	if (userGuessRightAt.length === 0) {
		userStrikes.push(testLetter);
		count++ ;
	}

	return count
}
