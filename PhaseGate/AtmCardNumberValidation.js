// AtmCardValidation.js

function AtmNumberValidation(cardNumbers) {
    if (!Array.isArray(cardNumbers)) {
        return { valid: false, reason: "Input must be an array" };
    }

    if (cardNumbers.length !== 15 && cardNumbers.length !== 16) {
        return { valid: false, reason: "Invalid length" };
    }

    if (!cardNumbers.every(n => typeof n === 'number')) {
        return { valid: false, reason: "Card number must contain digits only" };
    }

    const firstDigit = cardNumbers[0];
    let issuer = null;

    if (firstDigit === 3 && cardNumbers.length === 15) {
        issuer = "American Express";
    } else if (firstDigit === 4 && cardNumbers.length === 16) {
        issuer = "Visa";
    } else if (firstDigit === 5 && cardNumbers.length === 16) {
        issuer = "MasterCard";
    } else if (firstDigit === 6 && cardNumbers.length === 16) {
        issuer = "Discover";
    }

    if (!issuer) {
        return { valid: false, reason: "Invalid issuer or length" };
    }

    return { valid: true, issuer };
}

console.log(AtmNumberValidation([4, 5, 5, 6, 7, 3, 7, 5, 8, 6, 4, 1, 2, 3, 4, 5]));
console.log(AtmNumberValidation([3, 7, 1, 6, 2, 5, 3, 2, 0, 1, 2, 3, 4, 5, 6]));   

module.exports = {
    AtmNumberValidation
};
