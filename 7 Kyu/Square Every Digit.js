/**
* Kata Name : Square Every Digit
* Kyu Level : 7 kyu
* Kata Description : Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
*                    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*                    Note: The function accepts an integer and returns an integer
*/
let squareDigits = num => { return newArray = parseInt(num.toString().split('').map(e => {return Math.pow(e, 2)}).join(''))}