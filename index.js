var randomWordArr = ["microwave", "oven", "refrigerator"];
var ans;
var lives = 0;
var answerArray = [];
var found = 0;
 

function startUp() {
	randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

	for (var i = 0; i < randomWord.length; i++)
	{
		answerArray[i]= "_"
	}


ans = answerArray.join(" ");
document.getElementById("answer").innerHTML = ans;

}

function showLetters() {

	var letter = document.getElementById("letter").value;
	if (letter.length > 0 ) {
	
		for (var i = 0; i < randomWord.length; i++) {

			if (randomWord[i] == letter) {
				answerArray[i] = letter;
				document.getElementById("answer").innerHTML = answerArray.join(" ");
				found = 1
			}
		}
		if (found === 0) {
				lives++
			document.getElementById("lives").innerHTML = "Number of lives left out of 4: " + lives;

		}
			if (lives > 3 ) {				
	
		document.getElementById("youLose").innerHTML = "You Lose! Try again?";
		lives = 0;
		startUp()

		}

		
		found = 0;

		if (answerArray.indexOf("_") == -1) {
			document.getElementById('youWin').innerHTML= 'YOU WIN!';
		}
	}
}
	
	document.getElementById("answer").innerHTML = answerArray.join(" ");


	
	








