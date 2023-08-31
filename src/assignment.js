// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
function sumOfNumbersTo(numbersInAnArray) {
    let sum = 0;
    for (let n = 0 ; n < numbersInAnArray.length; n++){
        sum += numbersInAnArray[n];
    }
    return sum;

}  let numbersInAnArray = [10, 30, 40, 50, 60, 70]

let arrayOfNumbers = sumOfNumbersTo(numbersInAnArray)

alert(arrayOfNumbers)


// assignment.sumOfNumbersTo = sumOfNumbersTo;

/**
 * Challenge - 2
 *
 * Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.
 *
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
function countEvenNumbersWithin(arrayOfEvenNumbers) {
    // Write your code here
    // get the number from 1 to destination
    let sum = 0;
    let count = 0;
    let arrayOfEvenNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for(let i = 0; i < arrayOfEvenNumbers.length ; i++) {
        if (arrayOfEvenNumbers[i] % 2 === 0) {
            count++;
        }
        sum += i

    }
    return count;
}
let sumOfEvenArray = countEvenNumbersWithin(arrayOfEvenNumbers)
alert(sumOfEvenArray)

// assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    let result = [];

    return result;
}

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
