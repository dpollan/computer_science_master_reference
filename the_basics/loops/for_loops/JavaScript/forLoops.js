// Basic for loop construction in JS

// Create some basic collections
var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var collectionOfCars = {
  Toyota: "Corolla",
  Subaru: "Forester",
  Honda: "Civic",
  Jeep: "Wrangler",
  Ford: "Mustang",
};

var lineBreak = "\n";

//-----------------BASIC LOOP-----------------------------------
// Iterate through a set of numbers
console.log("basic for loop");
for (i = 0; i < 10; i++) {
  console.log(i); // <-- Output will be all numbers from 1 to 9
}
console.log(lineBreak);

//-----------------COLLECTIONS ARRAYS --------------------------

console.log("array of numbers");
// Iterate through an array
for (i = 0; i < arrayOfNumbers.length; i++) {
  console.log(arrayOfNumbers[i]); // <--Output will be numbers 1 to 10
}
console.log(lineBreak);

// Using Built in Array method
console.log("array of numbers using forEach Array method");
arrayOfNumbers.forEach((number) => console.log(number)); //<--Output will also be 1 to 10
console.log(lineBreak);

//-------------------------COLLECTIONS OBJECTS ---------------------

// Iterate through a collection
console.log("collection of car make and models");
for (make in collectionOfCars) {
  console.log(`Make: ${make}   Model: ${collectionOfCars[make]}`); // <-- output will be each car i.e. "Make: Toyota   Model: Corolla"
}
