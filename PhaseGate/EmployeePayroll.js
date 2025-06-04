// EmployeePayroll.js
const prompt = require('prompt-sync')();

class Employee {
    static employees = [];

    constructor(name, hoursWorked, hourlyPayRate, federalTaxWithholdingRate, stateTaxWithholdingRate) {
        this.name = name;
        this.hoursWorked = hoursWorked;
        this.hourlyPayRate = hourlyPayRate;
        this.federalTaxWithholdingRate = federalTaxWithholdingRate;
        this.stateTaxWithholdingRate = stateTaxWithholdingRate;
    }

    getName() {
        return this.name;
    }

    showPayRoll() {
        const grossPay = this.hoursWorked * this.hourlyPayRate;
        const federalTax = grossPay * (this.federalTaxWithholdingRate / 100);
        const stateTax = grossPay * (this.stateTaxWithholdingRate / 100);
        const totalDeduction = federalTax + stateTax;
        const netPay = grossPay - totalDeduction;

        console.log(`\nEmployee name: ${this.name}`);
        console.log(`Hours Worked: ${this.hoursWorked.toFixed(2)}`);
        console.log(`Pay Rate: $${this.hourlyPayRate.toFixed(2)}`);
        console.log(`Gross Pay: $${grossPay.toFixed(2)}`);
        console.log("Deductions:");
        console.log(`  Federal Withholding (${this.federalTaxWithholdingRate}%): $${federalTax.toFixed(2)}`);
        console.log(`  State Withholding (${this.stateTaxWithholdingRate}%): $${stateTax.toFixed(2)}`);
        console.log(`  Total Deduction: $${totalDeduction.toFixed(2)}`);
        console.log(`Net Pay: $${netPay.toFixed(2)}`);
    }

    static addEmployeePayRoll() {
        let name;
        while (true) {
            name = prompt("Enter Employee Name: ").trim();
            const duplicate = Employee.employees.some(employee => employee.name.toLowerCase() === name.toLowerCase());
            if (duplicate) {
                console.log(`Error: Employee with name '${name}' already exists. Please enter a different name.`);
            } else {
                break;
            }
        }

        const hoursWorked = promptFloatInRange("Enter number of hours worked in a week (max 40): ", 0, 40);
        const hourlyPay = promptFloatInRange("Enter hourly pay rate: ", 0, Infinity);
        const federalTax = promptFloatInRange("Enter federal tax withholding rate (0 - 100): ", 0, 100);
        const stateTax = promptFloatInRange("Enter state tax withholding rate (0 - 100): ", 0, 100);

        Employee.employees.push(new Employee(name, hoursWorked, hourlyPay, federalTax, stateTax));
        console.log("Employee added successfully.");
        mainMenu();
    }

    static viewPayRoll() {
        if (Employee.employees.length === 0) {
            console.log("No employee records found.");
        } else {
            Employee.employees.forEach(employee => employee.showPayRoll());
        }
        mainMenu();
    }

    static updatePayRoll() {
        if (Employee.employees.length === 0) {
            console.log("There are no employee records to update.");
            return mainMenu();
        }

        const name = prompt("Enter the employee name to update: ").trim();
        const found = Employee.employees.find(emp => emp.getName().toLowerCase() === name.toLowerCase());

        if (!found) {
            console.log("Employee not found.");
            return mainMenu();
        }

        found.hoursWorked = promptFloatInRange("Enter the new number of hours worked in a week (max 40): ", 0, 40);
        found.hourlyPayRate = promptFloatInRange("Enter the new hourly pay rate: ", 0, Infinity);
        found.federalTaxWithholdingRate = promptFloatInRange("Enter the new federal tax withholding rate (0 - 100): ", 0, 100);
        found.stateTaxWithholdingRate = promptFloatInRange("Enter the new state tax withholding rate (0 - 100): ", 0, 100);

        console.log("The Employee Payroll has been updated.");
        mainMenu();
    }
}


function promptFloatInRange(message, min, max) {
    while (true) {
        const value = parseFloat(prompt(message));
        if (!isNaN(value) && value >= min && value <= max) {
            return value;
        }
        console.log(`Error: Value must be between ${min} and ${max}.`);
    }
}

function mainMenu() {
    console.log("\n----- Employee Payroll System -----");
    console.log("1. Add Employee");
    console.log("2. View Payroll");
    console.log("3. Update Employee");
    console.log("4. Exit");

    const userInput = prompt("Select an option: ").trim();
    switch (userInput) {
        case "1":
            Employee.addEmployeePayRoll();
            break;
        case "2":
            Employee.viewPayRoll();
            break;
        case "3":
            Employee.updatePayRoll();
            break;
        case "4":
            console.log("GoodBye!! HAve a nice day!...");
            process.exit(0);
            break;
        default:
            console.log("Invalid option. Try again.");
            mainMenu();
    }
}


mainMenu();
