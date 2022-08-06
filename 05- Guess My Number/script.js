'use strict';

/*
let messageEl = document.querySelector('.message');
messageEl.textContent = 'Correct Number! 😁';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/

//* Elements
const messageEl = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

//* Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    messageEl.textContent = 'No number ⛔...';
  }

  //When player wins
  else if (guess === secretNumber) {
    messageEl.textContent = 'Correct Number 🎆🎇';
    numberEl.textContent = guess;

    document.body.style.backgroundColor = '#60b347';

    numberEl.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }

  //When guess is too high
  else if (guess !== secretNumber) {
    onGuessChanged(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
  }
});

let onGuessChanged = function (textMessage) {
  if (score > 1) {
    score--;
    scoreEl.textContent = score;
    messageEl.textContent = textMessage;
  } else {
    messageEl.textContent = '💥 You lost the game!';
    scoreEl.textContent = 0;
  }
};

againBtn.addEventListener('click', function () {
  score = 20;
  scoreEl.textContent = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  document.body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
