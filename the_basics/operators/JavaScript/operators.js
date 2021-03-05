// Javascript Operators

// I've tried to map each operator to the symbol it represents in a logical order
// often the resulting action in an operator in JS will vary by the context in which it is used
// For this reason, I've decided to try to display all instances of this symbol in one place

// Declare all variables, initially unassigned
var num1, num2, str1, str2, result;


// Assignment Operator =
num1 = 2; num2 = 7; // <-- in JS you can keep assigning variables a single line
str1 = 'Hello'; str2 = "World";

// + Operator

// Arithmatic Addition
result = num1 + num2;
console.log(result); //<-- 9

// String Concatination
result = str1 + str2;
console.log(result); // <-- Hello World
// One Gotcha that pops up in JS is the plus operator will also perform type Coercion
// That means if I add the string "7" to the numeric literal value 2 I get the srting "72"
num1 = "7"; num2 = 2;
console.log(num1 + num2); // <-- 72

// Double Plusses ++ is the increment operator

// Increment Operator - Appended
num1 = 7;
num1++; // Set num1 equal to num1 + 1 right after code execution
console.log(num1); // <-- 8

// Increment Operator - Prepend
num2 = 2;
++num2; // Set num2 equal to num2 + 1 then perform code execution
console.log(num2); // <-- 3

// In the two above examples where the plus plus goes may not seem to make a difference but it actually does
// In both cases we just set a number equal to itself plus one but the order in which that addition happens
// Is determined by where the plusses are located in relation to the variable.
// Appending  the plussesis like saying "Do this thing, then add one to the variable"
// Prepending the plusses is like saying "Before anything else, add one to the variable then do this thing"

// Append Example
num1 = 7;
result = num1++ * 2; // multiply 7 times 2 to get 14 then add one to num1
console.log(num1)    // <-- 8
console.log(result); // <-- 14

// Prepend Example
num1 = 7;
result = ++num1 * 2;  // Add one to 7 to get 8 then double it to get 16
console.log(num1)    //  <-- 8
console.log(result)  //  <-- 16

// Assignment Operator
num1 = 7;
num1 += 5; // Basically shorthand for num1 = num1 + 5
console.log(num1); // <-- 12

// Also works with string concatination
str1 += str2;
console.log(str1); // <-- "HelloWorld"










// Subtraction
result = num2 - num1;
result