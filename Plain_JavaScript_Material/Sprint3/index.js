/*

MATH

*/

// Examples
Math.PI // Pi
Math.E // Euler
Math.round(); // rounding up
Math.floor(); // rounding down
Math.trunc(); // remove decimal points
Math.pow(x, y); // `x` to the power of `y`

/*
Random 
*/
Math.random(); //random

// for generating a range of 1 to n 
//const n = 100;
Math.floor(Math.random()* n) + 1;

// for generating a range of m to n 

const n = 100;  // max
const m = 50;  // min

Math.floor(Math.random() * (n - m)) + n;