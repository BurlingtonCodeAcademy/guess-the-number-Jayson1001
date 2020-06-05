const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let min = 200;
let max = 500;
//gives you a random number in a range as solid integers (in this case 1-100)

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.

  let computerGuess = randomNum(min, max);
  console.log("I guess " + computerGuess);

  let answer = await ask("Is this the correct number?");

  if (answer === "Yes") {
    console.log("You win!")
    process.exit();
  }
  while (answer !== "Yes") {
    let negAnswer = await ask("Is the number higher or lower?")
    if (negAnswer === "Higher") {
      min = computerGuess + 1
    } if (negAnswer === "Lower") {
      max = computerGuess - 1
    }
    computerGuess = Math.floor((min + max) / 2);
    console.log("I guess " + computerGuess);
    answer = await ask("Is this the correct number?");
    if (answer === "Yes") {
      console.log("You win!")
      process.exit();
    }
  }
}

/*
while (answer !== "Yes") {
  let mid = Math.floor((min + max) / 2);
  if
} */

/*
while (answer !== "Yes") {
  let negAnswer = await ask("Is the number higher or lower?")
  if (negAnswer === "Higher") {
    min = computerGuess + 1
  } if (negAnswer === "Lower") {
    max = computerGuess - 1
  }
  computerGuess = randomNum(min, max);
  console.log("I guess " + randomNum(min, max));
  answer = await ask("Is this the correct number?");
}
while (answer !== "Yes") {
  let negAnswer = await ask("Is the number higher or lower?")
  if (negAnswer === "Higher") {
    min = computerGuess + 1
  } if (negAnswer === "Lower") {
    max = computerGuess - 1
  }
  computerGuess = randomNum(min, max);
  console.log("I guess " + randomNum(min, max));
  answer = await ask("Is this the correct number?");
}
while (answer !== "Yes") {
  let negAnswer = await ask("Is the number higher or lower?")
  if (negAnswer === "Higher") {
    min = computerGuess + 1
  } if (negAnswer === "Lower") {
    max = computerGuess - 1
  }
  computerGuess = randomNum(min, max);
  console.log("I guess " + randomNum(min, max));
  answer = await ask("Is this the correct number?");
}
} */

/*
else {
  let negAnswer = await ask ("Is the number higher or lower?")
  if (negAnswer === "Higher") {
    min = computerGuess + 1
  } if (negAnswer === "Lower") {
    max = computerGuess - 1
  }
}
computerGuess = randomNum(min, max);
console.log("I guess " + randomNum(min, max));

answer = await ask("Is this the correct number?");

if(answer === "Yes") {
  console.log("You win!")
  process.exit();
} else {
  let negAnswer = await ask ("Is the number higher or lower?")
  if (negAnswer === "Higher") {
    min = computerGuess + 1
  } if (negAnswer === "Lower") {
    max = computerGuess - 1
  }
} computerGuess = randomNum(min, max);
console.log("I guess " + randomNum(min, max));
answer = await ask("Is this the correct number?");

if(answer === "Yes") {
  console.log("You win!")
  process.exit();
} else {
  let negAnswer = await ask ("Is the number higher or lower?")
  if (negAnswer === "Higher") {
    min = computerGuess + 1
  } if (negAnswer === "Lower") {
    max = computerGuess - 1
  }
}
}
*/












/*if (randomNum === secretNumber) {
    console.log("Yes!");
    process.exit();
  } if (randomNum != secretNumber) {
    console.log("No");
    console.log("Is it higher or lower?");
  } if (randomNum < secretNumber) {
    console.log("Lower");
  } if (randomNum > secretNumber) {
    console.log("Higher");
    }
  }
*/






/*
let answerTwo = ask("Is this the correct number?" + randomNum(min, max));

if (randomNum === secretNumber) {
  console.log("Yes!");
  process.exit();
} else if (randomNum > secretNumber) {
  console.log("No");
  console.log("Is it higher or lower?");
  console.log("Lower");
} else if (randomNum < secretNumber) {
  console.log("No");
  console.log("Is it higher or lower?");
  console.log("Higher");
}
}
*/



















/*let randomNum = (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};
let min = 1;
let max = 100;

  while (randomNum > || < secretNumber) {
    console.log("No")
  }

  let secretNum = 20
  */