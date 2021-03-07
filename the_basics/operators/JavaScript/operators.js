// Javascript Operators

// I've tried to map each operator to the symbol representing it in a logical order
// often the resulting action in an operator in JS will vary by the context in which it is used
// For this reason, I've decided to try to display all instances of this symbol continuously in one place
// Before moving on to the next symbol.  For instance + for Sting concatination and ++ for increment are all
// Recorded in the same place on this document as they both involve the + character.

// Declare all variables, initially unassigned
var num1, num2, str1, str2, result;

// + Operator
console.log("________________ Plus Operator ___________________");

// Arithmetic Addition
num1 = 7;
num2 = 2;
console.log("\nArithmetic Addition: 7 + 2");
console.log(num1 + num2); //<-- 9

// String Concatination
str1 = "Hello";
str2 = "World";
console.log('\nString Concatination: "Hello" + "World"');
console.log(str1 + str2); // <-- Hello World

// One Gotcha that pops up in JS is the plus operator will also perform type Coercion
// That means if I add the string "7" to the numeric literal value 2 I get the srting "72"
num1 = "7";
num2 = 2;
console.log('\nOops, Gotcha:  "7" + 2');
console.log(num1 + num2); // <-- 72

// Double Plusses ++ is the increment operator

// Increment Operator - Appended
num1 = 7;
num1++; // Set num1 equal to num1 + 1 right after code execution
console.log("\nIncrement Operator - Appended: 7++");
console.log(num1); // <-- 8

// Increment Operator - Prepend
num1 = 7;
++num1; // Set num2 equal to num2 + 1 then perform code execution
console.log("\nIncrement Operator - Prepended: ++7");
console.log(num1); // <-- 3

// In the two above examples where the plus plus goes may not seem to make a difference but it actually does
// In both cases we just set a number equal to itself plus one but the order in which that addition happens
// Is determined by where the plusses are located in relation to the variable.
// Appending  the plussesis like saying "Do this thing, then add one to the variable"
// Prepending the plusses is like saying "Before anything else, add one to the variable then do this thing"

// Append Example
num1 = 7;
result = num1++ * 2; // multiply 7 times 2 to get 14 then add one to num1
console.log("\nIncrement Operator Append Example: 7++ * 2");
console.log("Notice first we do 7*2 first, then we increment 7");
console.log(result); // <-- 14

// Prepend Example
num1 = 7;
result = ++num1 * 2; // Add one to 7 to get 8 then double it to get 16
console.log("\nIncrement Operator Prepend Example: ++7 * 2");
console.log("Notice first we increment 7, then do 8 * 2");
console.log(result); //  <-- 16

// Assignment Operator
num1 = 7;
num1 += 5; // Basically shorthand for num1 = num1 + 5
console.log("\nAssignment Operator Addition: 7 += 5");
console.log(num1); // <-- 12

// Also works with string concatination
str1 += str2;
console.log('\nAssignment Operator Concatination: "Hello" += "World"');
console.log(str1); // <-- "HelloWorld"

// - Operator
console.log("________________ Minus Operator ___________________");

// Mathematical subtraction
num1 = 7;
num2 = 2;
console.log("\nArithmetic Subtraction: 7 - 2");
console.log(num1 - num2); // <-- 5

// Number Implicit Coercion
// Using - operator will implicitly coerce any value to a number type in JS
// If it cannot convert a value directly to a number, it will convert it to NaN value

str1 = "7";
str2 = "2";
console.log('\nType Coercion To Number:  "7" - "2"');
console.log(str1 - str2); // <-- 5

str1 = "seven";
num2 = 2;
result = str1 - str2;
console.log('\nType Coercion To Number Resulting In NaN Value: "seven" - 2');
console.log(result); // <-- NaN

// Assignment Operator Subtraction
num1 = 7;
num2 = 2;
num1 -= num2; // Basically shorthand for num1 = num1 - num2
console.log("\nAssignment Operator Subtraction: 7 -= 2");
console.log(num1);

// Decrement Operator minus minus
// The Decrement Operator works much the same as the Increment Operator
// If we prepend with -- the decrement occurs first
// If we append with -- the line of code is executed first

// Append Example
num1 = 7;
result = num1-- * 2; // multiply 7 times 2 to get 14 then subtract one from num1
console.log("\nDecrement Operator Append Example: 7-- * 2");
console.log("Notice first we do 7*2 first, then we subtract one from 7");
console.log(result); // <-- 14

// Prepend Example
num1 = 7;
result = num1 * 2; // Add Subtract One from 7 to get 6 then double it
console.log("\nDecrement Operator Prepend Example: --7 * 2");
console.log("Notice first we subtract one from 7, then do 6 * 2");
console.log(result); //  <-- 12

// Asterisk Operator
console.log("________________________Asterisk Operator_______________________");

// Mathematical Multiplication
num1 = 7;
num2 = 5;
console.log("\nArithmetic Multiplication: 7 * 5");
console.log(num1 * num2); // <-- 35

// Mathematical Exponentiation
num1 = 7;
num2 = 5;
result = num1 ** num2;
console.log("\nArithmetic Exponentiation: 7 ** 5");
console.log("This is equivalent to seven to the power of 5 or 7⁵");
console.log(result); // <-- 16807

// Assignment Operator Multiplication:
num1 = 7;
num2 = 5;
num1 *= num2;
console.log("\nAssignment Operator Multiplication: 7 *= 5");
console.log(num1); // <-- 35

//Assignment Operator Exponentiation:
num1 = 7;
num2 = 5;
num1 **= num2;
console.log("\nAssignment Operator Exponentiation: 7 **= 5");
console.log(num1); // <-- 16807

// Forward Slash Operator
console.log(
  "____________________________Forward Slash Operator___________________________________"
);

// Mathematical Division
num1 = 35;
num2 = 7;
console.log("\nArithmetic Division: 35 / 7");
console.log(num1 / num2); // <-- 5

// Assignment Operator Division
num1 = 25;
num2 = 4;
console.log("\nAssignment Operator Division: 25 /= 4");
console.log(num1 / num2); // <-- 6.25

// Comment Operator - single Line
console.log(
  "// comment operator: Anything following double forward slash will be treated as a comment until the next line."
); // <-- Everything after the // is ignored, this gets ignored

// Comment Operator - Multi Line
console.log(
  "/* Comment operator: Anything following forward slash asterisk will be ignored until the next occurance of asterisk forward slash regardless of how many lines"
);
/* Everything after the /* gets ignored
This also gets ignored
multiple lines are ignored
until we see an asterisk followed by a forward slash
it is still part of the multi line comment */
