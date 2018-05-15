var randomWordArr = ["microwave", "oven", "refrigerator"];
var ans;
var lives = 0;
var answerArray = [];
var found = 0;
var img = document.getElementById('img');
var redWrong = document.getElementById('redWrong');
var win = document.getElementById('Youwin');
var textWin = document.getElementById('textWin');
var answer = document.getElementById("answer");
var livesText=document.getElementById('livesText');
var youLose = document.getElementById('youLose');
var body = document.getElementById('body');
var column= document.getElementById('column');
 

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
			livesText.innerHTML = "Number of lives 4: " + lives;
			livesText.style.fontSize= '20px';
			livesText.style.color= 'red';
		}
			if (lives > 3 ) {	
				column.style.display= 'none';			
				youLose.innerHTML = "You Lose! Try again?";
				body.style.backgroundImage='url(redwrong.jpg)';
				body.style.backgroundRepeat='no-repeat'
				redWrong.style.display='inline-block';


		lives = 0;
	}
			found = 0;
			if (answerArray.indexOf("_") == -1) {
				column.style.backgroundImage='url(colors.gif)';
				column.style.backgroundRepeat='no-repeat';
				img.style.display='inline-block';
				textWin.style.fontSize='60px';
				textWin.style.color='blue';
		} 
	}
}
	
	


	
	








