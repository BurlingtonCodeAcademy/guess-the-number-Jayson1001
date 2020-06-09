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
  console.log("Let's play a game where I (computer) make up a number and you (human) try to guess it.");
  let secretNumber = randomNum(Math.floor(min), Math.floor(max));
  console.log(secretNumber);
  //The above console.log is a check to confirm that you guessed the correct number.
  
  let myGuess = await ask("Ok ready? Guess a whole number between " + min + " and " + max + ".\n")

  if (myGuess === secretNumber) {
    console.log("Yes! You win!");
    process.exit();
  } 
  //Starts a loop of options if you don't guess the secret number on the first try.
  while (myGuess !== secretNumber) {
    if (myGuess > secretNumber) {
        myGuess = await ask("No, guess lower\n")
    } if (myGuess < secretNumber) {
      myGuess = await ask("No, guess higher\n")  
    } if (myGuess === secretNumber) {
        console.log("Yes! You win!");
        process.exit();
    }
  }
}