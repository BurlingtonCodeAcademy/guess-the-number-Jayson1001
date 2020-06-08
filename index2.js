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
    "Let's play a game where I (computer) make up a number and you (human) try to guess it."
  );
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
