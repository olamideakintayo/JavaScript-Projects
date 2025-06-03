//bankAppSimulation.js
const prompt = require('prompt-sync')();


let transactions = [];

let balance;

function withdrawal(amount, balance) {
  if (amount % 500 !== 0 && amount % 1000 !== 0) {
    return [false, "The Withdrawal amount must be a multiple of 500 or 1000 naira."];
  }
  
  
  const transactionFee = 100;
  const totalDeduction = amount + transactionFee;

  if (amount > 0.9 * balance) {
    return [false, "You cannot withdraw more than 90% of your balance."];
  }

  if (balance - totalDeduction < 199) {
    return [false, "Insufficient balance after transaction. Minimum balance of 199 naira must remain."];
  }

  return [true];
}

function printTransactions() {
  if (transactions.length === 0) {
    console.log("No transactions yet.");
  } else {
    console.log("\nTransaction Log:");
    transactions.forEach((value, index) => {
      console.log(`${index + 1}. Withdrawn: ₦${value.withdrawn}, Fee: ₦${value.transactionFee}, Remaining Balance: ₦${value.balance}`);
    });
  }
}

 function main() {
 while (true) {
  const balanceInput = Number(prompt("Enter your account balance (₦): "));
  balance = parseFloat(balanceInput);
  if (!isNaN(balance) && balance > 0) {
    break;
  }
  console.log("Initial balance must be a positive number.");
}

  while (true) {
    console.log(`\nCurrent Balance: ₦${balance}`);
    const userInput = String(prompt("Do you want to make a withdrawal? (yes/no/view transactions): ")).toLowerCase();

    if (userInput === "no") {
      console.log("Goodbye!! Have a nice day");
      break;
    } else if (userInput === "view transactions") {
      printTransactions();
      continue;
    } else if (userInput === "yes") {
      try {
         while (true) {
  const amountInput = Number(prompt("Enter your account balance (₦): "));
  amount = parseFloat(amountInput);
  if (!isNaN(amount) && amount > 0) {
    break;
  }
  console.log("Initial balance must be a positive number.");
}


        if (amount > 20000) {
          console.log("You can only withdraw a maximum of ₦20,000 per transaction.");
          continue;
        }

        const [validTransaction, message] = withdrawal(amount, balance);

        if (!validTransaction) {
          console.log(`Invalid transaction: ${message}`);
          continue;
        }

        const transactionFee = 100;
        const total = amount + transactionFee;
        balance -= total;

        transactions.push({
          withdrawn: amount,
          transactionFee,
          balance,
        });

        console.log(`Successfully withdrew ₦${amount}. Fee: ₦${transactionFee}. Remaining Balance: ₦${balance}`);
      } catch (err) {
        console.log("Invalid input. Please enter a numeric value.");
      }
    } else {
      console.log("Invalid choice. Please type 'yes', 'no', or 'view transactions'.");
    }
  }

}

main();




























