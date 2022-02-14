const max = document.querySelector('input');
const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const reset = document.querySelector('#reset');
let p1Score = 0;
let p2Score = 0;

reset.addEventListener('click', () => {
  p1btn.disabled = false;
  p2btn.disabled = false;
  document.querySelector(`#p1`).innerText = "0";
  document.querySelector(`#p2`).innerText = "0";
  p1Score = 0;
  p2Score = 0;
});

const checkGameOver = () => {
  if (p1Score >= parseInt(max.value) || p2Score >= parseInt(max.value)) {
    p1btn.disabled = true;
    p2btn.disabled = true;
  }
}

const updateScore = (playerScore, player) => {
  playerScore++;
  document.querySelector(`#p${player}`).innerText = `${playerScore}`;
  return playerScore;
}

p1btn.addEventListener('click', () => {
  p1Score = updateScore(p1Score, 1);
  checkGameOver();
});

p2btn.addEventListener('click', () => {
  p2Score = updateScore(p2Score, 2);
  checkGameOver();
});
