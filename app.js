const rockPaperScissors = () => {
  // Initialize player and computer scores
  let playerScore = 0;
  let computerScore = 0;

  // Initialize the first round
  let roundNum = 1;

  // Play section
  const play = document.querySelector('.play');

  // Start a new game
  const startNewGame = () => {
    const enterGame = document.querySelector('.enter-game');
    const playBtn = document.querySelector('.enter-game button');

    playBtn.addEventListener('click', () => {
      enterGame.classList.add('fade-out');
      play.classList.add('fade-in');
    });
  }
  // Play game
  const playGame = () => {
    // Get the options
    const options = document.querySelectorAll('.options img');

    // Select all the options
    options.forEach((option) => {
      option.addEventListener('click', function () {

        // Randomly generate computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[randomNumber];

        // Get the player option
        let playerChoice = option.id;

        // Show gameplay section
        const gamePlay = document.querySelector('.game-play');
        play.classList.remove('fade-in');
        gamePlay.classList.add('fade-in');

        // Show computer and player hands
        const computerHand = document.querySelector('.computer-hand img');
        const playerHand = document.querySelector('.player-hand img');
        computerHand.src = `./assets/${computerChoice}.png`;
        computerHand.alt = computerChoice;
        playerHand.src = `./assets/${playerChoice}.png`;
        playerHand.alt = playerChoice;

        // Grab result header result
        const result = document.querySelector('.game-play h2');

        // next round
        const roundBtn = document.querySelector('.result button');
        roundNum++;
        roundBtn.textContent = `Round ${roundNum}`;

        // Call the compare choices function
        compareChoices(computerChoice, playerChoice, result);

        // Start next round
        roundBtn.addEventListener('click', () => {
          gamePlay.classList.remove('fade-in');
          play.classList.add('fade-in');
        });
      });
    });
  }

  // Update Score
  const updateScore = () => {
    let pScoreBoard = document.querySelector('.player-score p');
    let cScoreBoard = document.querySelector('.computer-score p');

    pScoreBoard.textContent = playerScore;
    cScoreBoard.textContent = computerScore;
  }

  // Compare choices and update score
  const compareChoices = (computerChoice, playerChoice, result) => {
    // Check for a tie
    if (computerChoice === playerChoice) {
      result.textContent = 'It is a tie!';
      return;
    }

    // Check for rock
    if (computerChoice === 'rock') {
      if (playerChoice === 'paper') {
        result.textContent = 'Player won!';
        playerScore++;
        updateScore();
        return;
      } else {
        result.textContent = 'Computer won!';
        computerScore++;
        updateScore();
        return;
      }
    }
    // Check for paper
    if (computerChoice === 'paper') {
      if (playerChoice === 'scissors') {
        result.textContent = 'Player won!';
        playerScore++;
        updateScore();
        return;
      } else {
        result.textContent = 'Computer won!';
        computerScore++;
        updateScore();
        return;
      }
    }
    // Check for scissors
    if (computerChoice === 'scissors') {
      if (playerChoice === 'rock') {
        result.textContent = 'Player won!';
        playerScore++;
        updateScore();
        return;
      } else {
        result.textContent = 'Computer won!';
        computerScore++;
        updateScore();
        return;
      }
    }
  }

  // Call all the inner functions
  startNewGame();
  playGame();
}

// Call the main function scope
rockPaperScissors();