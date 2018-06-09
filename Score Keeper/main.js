var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var winningScoreDisplay = document.getElementsById("winningScoreDisplay");

var p1Score = document.getElementById("p1_score");
var p2Score = document.getElementById("p2_score");

var getInput = document.querySelector("input");

var p1Counter = 0;
var p2Counter = 0;

var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function () {

    if (!gameOver) {
        p1Counter++;
        if (winningScore === p1Counter) {
            p1Score.classList.add("winner");
            gameOver = true;
        }
        p1Score.textContent = p1Counter;
    }

});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Counter++;
        if (winningScore === p2Counter) {
            p2Score.classList.add("winner");
            gameOver = true;
        }
        p2Score.textContent = p2Counter;
    }
});

resetButton.addEventListener("click", function () {
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Counter = 0;
    p2Counter = 0;
    gameOver = false;
    p1Score.classList.remove("winner");
    p2Score.classList.remove("winner");
});

getInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = getInput.values;
});