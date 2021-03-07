// Basic while loop in JavaScript

let i = 0;

let number = 0;
let guess = 0;
let count = 0;

while (i <= 20) {
  console.log(i); // <-- Output is 0 through 20
  i++;
}

// Basic guessing game

// Picks random numbers in a range and guesses and prints a new number until it guesses correctly
number = Math.floor(20 * Math.random()); // <-- Picks a random number between 1 and 20
console.log(`Random Number: ${number}`);

while (guess !== number) {
  guess = Math.floor(20 * Math.random());
  console.log(`Guess ${++count}: ${guess}`);
}

console.log(
  `Computer correctly guessed the number ${number} in ${count} tries`
);
