const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let min = 1;
let max = 100;
//gives you a random number in a range as solid integers (in this case 1-100)


initialize();

async function initialize() {
    console.log("Which game would you like to play?");

    let game = await ask ("Would you like to pick or guess the number? \nType 'guess' or 'pick'. \n");
    if (game === 'guess') {
        guess();
    } if (game === 'pick') {
        pick();
    } else {
        console.log("I didn't understand the response");
        initialize();
    }
}

async function guess() {
    let secretNumber = randomNum(min, max);
    //console.log(secretNumber);
    //The above console.log is a check to see if your code works.
    console.log("Ok ready? Guess a number between " + min + " and " + max + ".");
  
    let myGuess = randomNum(min, max);
    console.log(myGuess);
  
    let myNextGuess = Math.floor((min + max) / 2);
    //Utilizes the binary search algorithm for all remaining guesses.
  
    if (myGuess === secretNumber) {
      console.log("Yes! You win!");
      process.exit();
    }
    while (myGuess !== secretNumber) {
      if (myGuess > secretNumber) {
        console.log("Guess lower");
        max = myGuess - 1;
      }
      if (myGuess < secretNumber) {
        console.log("Guess higher");
        min = myGuess + 1;
      }
  
      myGuess = Math.floor((min + max) / 2);
      console.log("I guess " + myGuess);
      if (myGuess === secretNumber) {
        console.log("Yes! You win!");
        process.exit();
      }
    }
}

async function pick() {
    console.log(
        "Let's play a game where you (human) make up a number and I (computer) try to guess it."
      );
      let secretNumber = await ask(
        "What is your secret number?\nI won't peek, I promise...\n"
      );
      console.log("You entered: " + secretNumber);
      // Now try and complete the program.
    
      let computerGuess = randomNum(min, max);
      console.log("I guess " + computerGuess);
    
      let answer = await ask("Is this the correct number?");
    
      //If the computer guesses the correct number, the user answers "yes". Then "You win!" And then the program exits.
      if (answer.toLowerCase() === "yes") {
        console.log("You win!");
        process.exit();
      }
      //If the computer doesn't guess the correct number, user responds "no".
      while (answer.toLowerCase() === "no") {
        let negAnswer = await ask("Is the number higher or lower?"); //Then the question of "higher or lower?", followed by the appropriate answer by user.
        if (negAnswer.toLowerCase() === "higher") {
          min = computerGuess + 1;
        }
        if (negAnswer.toLowerCase() === "lower") {
          max = computerGuess - 1;
        }
        //cheater function
        if (min > max || max < min) {
          console.log("You're cheating!");
          process.exit();
        }
        computerGuess = Math.floor((min + max) / 2); //The computer guesses again, but using the binary search algorithm to maximize guess efficiency.
        console.log("I guess " + computerGuess);
        answer = await ask("Is this the correct number?"); //Then asks the user to confirm their answer.
        if (answer.toLowerCase() === "yes") {
          console.log("You win!");
          process.exit();
        }
      }
}


