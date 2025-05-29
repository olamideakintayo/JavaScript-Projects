function categorizeNumbers(divisibleNumberBy, ...numbs) {
    const divisibleNumbers = [];

    for (let num of numbs) {
        if (num % divisibleNumberBy === 0) {
            divisibleNumbers.push(num);
        }
    }

    return divisibleNumbers.length > 0 ? divisibleNumbers : "No divisible number found";
}


console.log(categorizeNumbers(2, 1, 2, 3, 4, 5, 6));  // The First Number checks if it is Divisible by 2
console.log(categorizeNumbers(3, 1, 2, 3, 4, 5, 6));  
console.log(categorizeNumbers(5, 1, 2, 3, 4));       

console.log(categorizeNumbers(2.0, 1.5, 2.0, 3.5, 4.0, 5.5, 6.0)); 
console.log(categorizeNumbers(-3.0, 1.5, 2.0, 3.0, 4.5, 5.0, 6.0)); 