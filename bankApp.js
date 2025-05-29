
const accounts = [];

function createAccount(name, phone, balance) {
    if (!name) {
        throw new Error("Name cannot be empty.");
    }
    if (!/^\d+$/.test(phone)) {
        throw new Error("Phone must contain digits only.");
    }

    const parsedBalance = parseFloat(balance);
    if (isNaN(parsedBalance)) {
        throw new Error("Balance must be a valid number.");
    }
    if (parsedBalance < 0) {
        throw new Error("Balance cannot be negative.");
    }

    const account = { name: name, phone: phone, balance: parsedBalance };
    accounts.push(account);
    return "account";
}

function deposit(phone, amount) {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount <= 0 || isNaN(parsedAmount)) {
        throw new Error("Deposit amount must be positive.");
    }

    for (const account of accounts) {
        if (account.phone === phone) {
            account.balance += parsedAmount;
            return account.balance;
        }
    }

    throw new Error("Account with this phone number not found.");
}

function withdraw(phone, amount) {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount <= 0 || isNaN(parsedAmount)) {
        throw new Error("Withdrawal amount must be positive.");
    }

    for (const account of accounts) {
        if (account.phone === phone) {
            if (account.balance < parsedAmount) {
                throw new Error("Insufficient funds.");
            }
            account.balance -= parsedAmount;
            return account.balance;
        }
    }

    throw new Error("Account with this phone number not found.");
}

function getAllAccounts() {
    return accounts;
}

function findAccountByPhone(phone) {
    for (const account of accounts) {
        if (account.phone === phone) {
            return account;
        }
    }
    throw new Error("Account with this phone number not found.");
}

module.exports = {
  createAccount,
  deposit,
  withdraw,
  getAllAccounts,
  findAccountByPhone,
  accounts, 
  };

