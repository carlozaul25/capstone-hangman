var randomWordArr = ["microwave", "oven", "refrigerator"];
var ans;
var lives = 0;
var answerArray = [];
var found = 0;
var img = document.getElementById('img');
var blackThumb = document.getElementById('blackThumb');
var win = document.getElementById('Youwin');
var textWin = document.getElementById('textWin');
var answer = document.getElementById("answer");
var livesText=document.getElementById('livesText');
var youLose = document.getElementById('youLose');
// document.getElementById("answer").innerHTML = answerArray.join(" ");
 

function startUp() {
	randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
	for (var i = 0; i < randomWord.length; i++) {
			answerArray[i]= "_"
	}
		ans = answerArray.join(" ");
		answer.innerHTML = ans;
}

function showLetters() {
	var letter = document.getElementById("letter").value;
	if (letter.length > 0 ) {
		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] == letter) {
				answerArray[i] = letter;
				answer.innerHTML = answerArray.join(" ");
				found = 1
			}
		}
			if (found === 0) {
				lives++
			livesText.innerHTML = "Number of lives left out of 4: " + lives;
			img.style.backgroundRepeat='repeat-x';
			img.style.display='inline-block';
		}
			if (lives > 3 ) {				
				youLose.innerHTML = "You Lose! Try again?";
		lives = 0;
	}
			found = 0;
			if (answerArray.indexOf("_") == -1) {
				textWin.innerHTML="You Win!";
				img.style.display='inline-block';
				textWin.style.fontSize='60px';
				textWin.style.color='blue';
		} 
	}
}
	
	


	
	








