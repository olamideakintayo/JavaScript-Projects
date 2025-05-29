// SumOfIntegers.js

function sumOfDigits(number) {
    let total = 0;
    while (number >= 1 && number <= 10000) {
        let digit = number % 10;
        total = total + digit;
        number = Math.floor(number / 10);
    }
    return total;
}

let number = 932
console.log(`The sum of ${number} = ${sumOfDigits(number)}`);
