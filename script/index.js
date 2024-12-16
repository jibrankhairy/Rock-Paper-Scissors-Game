let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};
const updateScore = () => {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Score: You win: ${score.wins}. You lose: ${score.losses}. You draw: ${score.draws}.`;
};
updateScore();
const playGame = (playerMove) => {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "You draw";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "You draw";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "You draw";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "You draw") {
    score.draws += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScore();
  resultGame(result);
  moveGame(playerMove, computerMove);
};

const resultGame = (result) => {
  Swal.fire({
    title: result,
    icon:
      result === "You win"
        ? "success"
        : result === "You lose"
        ? "error"
        : "info",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
};

const moveGame = (playerMove, computerMove) => {
  document.querySelector(
    ".js-move"
  ).innerHTML = `You <img src="assets/${playerMove}-emoji.png" class="move-icon"> VS <img src="assets/${computerMove}-emoji.png" class="move-icon"> Computer`;
};
const pickComputerMove = () => {
  randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
};
