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

start();

async function start() {
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

//incorprate min and max comparisions when numbers get close. computerGuess min and max range < 1. min() max()
//let correct = "yes";
//let incorrect = "no";

// combine if with and. if (and(min >= max)) {console.log("You're cheating!")}

// if true - console.log("You're cheating!")

//let between = randomNum(min, max)

// if (min > secretNumber) { console.log("Cheating!")}

// if (min and max) are within 1 intiger of each other - console.lo ("Cheating!")

/*if (min > max) {
  console.log("You're cheating!")
}*/

// if the computerGuess is higher than secretNumber && user input says lower, return "You're cheating!"
/*if ((computerGuess > secretNumber) && (negAnswer.toLowerCase() === "higher")) {
  console.log("You're cheating!")
}*/
/*if (computerGuess.range(min, max) <= 1) {
  console.log ("You're cheating!")
}*/

//This is the solution!!
/*if (min === max - 1) {
  console.log("You're cheating!");
  process.exit();
}*/

//cheater function - It says in the story, "after a higher/lower response contradicts and earlier higher/lower response."...
/*if (min === max) {
      console.log("You're cheating!");
      process.exit();
    }*/
