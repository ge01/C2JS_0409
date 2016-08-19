// This program uses an if/else if statement to assign a letter
// grade of A, B, C, D, or F to a numberic test score. A trailing
// else is used to set a flag if a negative value is entered.

// Create named constants to hold minimum
// scores required for each letter grade.
var MIN_A_SCORE = 90,
    MIN_B_SCORE = 80,
    MIN_C_SCORE = 70,
    MIN_D_SCORE = 60,
    MIN_POSSIBLE_SCORE = 0;

var grade;                  // Holds a numberic test score
var goodScore = true;       // For positive integer test
// Get the numeric scores
var testScore = prompt("Enter your numeric test score and I will tell you the letter grade you earned: ", "");
console.log("You entered " + testScore);

// Determin the letter grade
if (testScore >= MIN_A_SCORE)
  grade = 'A';
else if  (testScore >= MIN_B_SCORE)
  grade = 'B';
else if  (testScore >= MIN_C_SCORE)
  grade = 'C';
else if  (testScore >= MIN_D_SCORE)
  grade = 'D';
else if  (testScore >= 0)
  grade = 'F';
else
  goodScore = false;        // The score was below 0

// Display the letter grade
if (goodScore)
  console.log("Your grade is " + grade);
else
  console.log("The score cannot be below zero.");
