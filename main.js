/*
  ---- Understanding the problem ----
  - The game will be played against the computer. 
  - The computer will randomly choose between 'rock', 'paper' or 'scissors'.
  - The player will input their choice.
  - The game will compare both choices and determine the winner based on the rules:
    - Rock beats Scissors
    - Scissors beats Paper
    - Paper beats Rock
    - If both choices are the same, it's a tie.
  - The game will keep track of both the player’s score and the computer’s score.
	- The game will be played round by round, and the winner of each round will 
  - have their score incremented.
	- Each round’s result will be displayed with a winner announcement.
*/
/*
  ---- Planning ----
  - The game is played in the browser console using prompts and alerts.
  - The user inputs `ock", "paper", or "scissors"; the computer selects randomly.
  - The game follows standard rules:
    - Rock beats Scissors
    - Scissors beats Paper
    - Paper beats Rock
    - Identical choices result in a tie.
  - Scores are tracked across five rounds.
  - Each round displays choices, the winner, and updated scores.
  - After five rounds, the final winner is announced.
*/
/*
  ---- Pseudocode ----
  
  // Step 1: Define an array for choices
  SET choices = ["rock", "paper", "scissors"]

  // Step 2: Define a function to get computer's choice
  FUNCTION getComputerChoice:
    randomIndex = RANDOM(0, 2) // Generates a random index (0, 1 or 2)
    RETURN choices[randomIndex]
  END

  // Step 3: Define a function to get human's choice
  FUNCTION getHumanChoice:
    SET humanChoice
    REPEAT
      DISPLAY "Enter your choice: rock, paper, or scissors"
      humanChoice = INPUT()
      humanChoice = CONVERT_LOWERCASE(humanChoice)

      IF humanChoice NOT IN choices
        DISPLAY "Invalid choice. Please enter rock, paper, or scissors."
      ENDIF
    UNTIL humanChoice IN choices

    RETURN humanChoice
  END

  // Step 4: Declare global score variables
  SET humanScore = 0
  SET computerScore = 0

  // Step 5: Define function to display current scores
  FUNCTION displayScore:
    DISPLAY "Score: Player ($humanScore) | Computer ($computerScore)"
  END

  // Step 6: Define function to play a single round
  FUNCTION playRound(humanChoice,  computerChoice):
    IF humanChoice == computerChoice
      DISPLAY "It's a tie"
    ELSEIF humanChoice == "rock" && computerChoice == "paper" OR
          humanChoice == "paper" && computerChoice == "scissors" OR
          humanChoice == "scissors" && computerChoice == "rock"
      computerScore++
      DISPLAY "You lost! $computerChoice beats $humanChoice"
    ELSE
      humanScore++
      DISPLAY "You won! $humanChoice beats $computerChoice"
    ENDIF

    displayScore()
  END

  // Step 7: Define function to play the entire game for 5 rounds
  FUNCTION playGame:
    FOR i = 1 TO 5
      humanChoice = getHumanChoice()
      computerChoice = getComputerChoice()
      playRound(humanChoice, computerChoice)
    ENDFOR

    IF humanScore > computerScore
      DISPLAY "Congratulations! You won the game."
    ELSEIF computerScore > humanScore
      DISPLAY "Sorry, you lost the game."
    ELSE
      DISPLAY "It's a tie."
    ENDIF
  END

  // Step 8: Call the game function
  playGame()
*/
