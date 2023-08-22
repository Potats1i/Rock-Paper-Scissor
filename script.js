function pickComputerMove() {
  const randomNumber = Math.random(); 
  let ComputerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
   ComputerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
   ComputerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
   ComputerMove = 'scissor';
  }
  console.log(ComputerMove);
  return ComputerMove;
}
let score = JSON.parse(localStorage.getItem('score'));
let result = JSON.parse(localStorage.getItem('result'));
localStorage.getItem('result')
console.log(JSON.parse(localStorage.getItem('score'))) ;
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    draws: 0
  };
}
scoreUpdate()
function result1(playerMove) {
  const ComputerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'rock') {
    if (ComputerMove === 'rock') {
      result = 'Draw';
    } else if (ComputerMove === 'paper') {
      result = 'Lost';
    } else if (ComputerMove === 'scissor') {
      result = 'Win';
    }
  } else if (playerMove === 'paper') {
    const ComputerMove = pickComputerMove()
    if (ComputerMove === 'rock') {
      result = 'Win';
    } else if (ComputerMove === 'paper') {
      result = 'Draw';
    } else if (ComputerMove === 'scissor') {
        result = 'Lost';
    }
  } else if (playerMove === 'scissor') {
    const ComputerMove = pickComputerMove()
    if (ComputerMove === 'rock') {
      result = 'Lost';
    } else if (ComputerMove === 'paper') {
      result = 'Win';
    } else if (ComputerMove === 'scissor') {
      result = 'Draw';
    }
  }
  if (result === 'Win') {
    score.wins += 1;
  } else if (result === 'Lost') {
    score.losses += 1;
  } else if (result === 'Draw') {
    score.draws += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector(".score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`
  console.log(result);
  document.querySelector(".result").innerHTML = `You ${result}`;
  document.querySelector(".moves").innerHTML = `You ${playerMove} - Computer ${ComputerMove}`
  
  localStorage.setItem('result', JSON.stringify(result))
}
document.getElementById("rock").onclick = function() {
  result1('rock');
}
document.getElementById("paper").onclick = function() {
  result1('paper');
}
document.getElementById("scissor").onclick = function() {
  result1('scissor');
}
document.getElementById("reset").onclick = function() {
  console.clear()
  console.log('Score has been reset');
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  console.log(`wins:${score.wins},losses:${score.losses},draws:${score.draws}`);
  scoreUpdate()
  localStorage.removeItem('score');
}
function scoreUpdate() {
  document.querySelector(".score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`
}