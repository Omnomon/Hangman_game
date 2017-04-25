// Declare variables for base 


//------------
var word; 
/*var testLetter= ["r","e","d"];*/ 
var underscore = " _ ";
var underscores =[];
//---------------------------------------------



//---------------------------------------------
var testWord = 	"rEdRedred"; 
var testLetter =["R"];
var indices = [];
//---------------------------------------------




//---------------------------------------------
underscores = underscore.repeat(testWord.length);
var blankWord = underscores.split("  ");
console.log(underscores);
console.log(blankWord)
//---------------------------------------------




//---------------------------------------------

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
/*
	var testWord = "redredred" ; */
function checkTestLetter(testLetter, testWord) {
	indices = [];
	var testLetter;
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

var userGuessRightAt = [];
var userGuessRightAt = checkTestLetter("e", "redREDred")
console.log(userGuessRightAt)

