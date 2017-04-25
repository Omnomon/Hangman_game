// Declare variables
var counter; 
var indices = [];
var userGuess;
var word = ["r", "e", "d", "r", "e", "d", "r", "e", "d"];
var testLetter = ["r", "e", "d"];
var userWrong = [];
var underscore = " _ ";
var underscores =[];
var wordIndex = []; 
var truthSeeker = false; 
var letterIndex; 
var memory 


// tried to turn while loop into for loop 
/*var letterIndex = word.indexOf("r")
for( word[i] = 0 ; i < word.length; i++) {
		indices.push(letterIndex);
		letterIndex = word.indexOf()
	}
*/

// Declare keystrokes to === userGuess 
document.onkeyup = function recordKeyStroke(event) {

	//check if keycode works 
	console.log(event.key); 

	//define keycode as var 
	var userGuess = event.key;
	console.log("current letter is " + userGuess)



}
//



//find indices of word, assign to indices  -- works and stole from mdn website 
// push indices of every instance letter in word to a new array  
var letterIndex = word.indexOf(testLetter[1]);
while (letterIndex != -1) {
	indices.push(letterIndex);
	letterIndex = word.indexOf(testLetter[1], letterIndex + 1);
} 

console.log(indices)
console.log(testLetter[2])
// find indices of all strings in word, assign to indices 

/*var letterIndex = word.indexOf(testLetter);
while (letterIndex != -1) {
	indices.push(letterIndex);
	letterIndex = word.indexOf(testLetter, letterIndex + 1);
}

// trying to create index = [[1,2,3][4,5,6][7,8,9]], not [1,2,3,4,5,6,7,8,9]

	var letterIndex = word.indexOf(testLetter[1]);
	while (letterIndex != -1) {
		indices.push(letterIndex);
		letterIndex = word.indexOf(testLetter[1], letterIndex + 1);
	}  
	wordIndex[1] = indices;
	answers[1] = wordIndex[1] 


console.log(indices)
console.log(wordIndex[1])
console.log(testLetter[1])

	var letterIndex = word.indexOf(testLetter[0]);
	while (letterIndex != -1) {
		indices.push(letterIndex);
		letterIndex = word.indexOf(testLetter[0], letterIndex + 1);
	}  
	wordIndex[0] = indices; 
	answers[0]= wordIndex[0]


console.log(indices)
console.log(wordIndex[0])
console.log(testLetter[0])
console.log(answers[0])
console.log(answers[1])



// ------------------------------------------------ 




*/
// caused browser to run out of memory 
/*for (letterIndex = 0; letterIndex < word.length; letterIndex++) {
	letterIndex = word.indexOf(letter, letterIndex++);
	indices.push(letterIndex);
}*/

//Create underscores by word length 

console.log(underscore);
underscores = underscore.repeat(word.length);
console.log(underscores);

//Display the html ** placeholder ** 
window.onload = function play() {

	document.getElementById("hangman").innerHTML = underscores;

} 

// Assign value to each underscore corresponding with the word?  

//If guess is right

/*	document.getElementById("hangman").onkeyup = function guessRight() {

	for ( i = 0; i < word.length ; i++) {
		if (userGuess == word[i]) {
			truthSeeker == true; 
		} if (truthSeeker) {
			userGuess === word[i];
			break
		} else {
			userWrong.push(userGuess);
			console.log(userGuess + ' is wrong');	
			break
		}

		}
}
*/


/*// map indices to guessLetter  with function ====== caused checkGuessLetter to break at testword.toLowerCase()

function mapGuessLetterToIndices(testLetter, indices) {
	for (var i = 0; i < this.indices.length; i++) {
		var testLetter =[testLetter];
		testLetter = testLetter.push(testLetter); 
		var lettersAre = checkTestLetter("_", blankWord);test
		testLetter[i] = blankWord[indices[i]];
	}
	return testLetter;
	return blankWord;
}
 // why is testLetter returning "2" ? 

 console.log(checkTestLetter('r', 'redRErEd')) 
 mapGuessLetterToIndices(('r', indices))

*/

// lets not try to assign _ = testLetter this way 
/*var userGuessRightAt = [];
var userGuessRightAt = checkTestLetter("e", "redREDred")
console.log(userGuessRightAt) // = 1, 4, 7
console.log(blankWord) // a lot of underscores 
console.log(testLetter) // e 

function replaceBlankWordWithUserGuessRight(userGuessRightAt, testLetter) {
	for (var counter = 0; counter < userGuessRightAt.length; counter++) {
		blankWord[userGuessRightAt] = testArray[userGuessRightAt].forEach()
	}
}

console.log(blankWord)
console.log(replaceBlankWordWithUserGuessRight([1,4,7], "rEdRedred"))*/


// ask why this doesn't work 
/*var _testVar = [1];
console.log(_testVar)
if (_testVar == [1]) {
	console.log("works")
} else {
	console.log("false")
}*/